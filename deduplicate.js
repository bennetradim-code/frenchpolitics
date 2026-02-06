const fs = require('fs');

// Read the file
const filePath = 'src/data/frenchPolitics.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Extract the politicians array
const matchStart = content.indexOf('export const politicians = [');
const matchEnd = content.lastIndexOf(']') + 1;
const beforeArray = content.substring(0, matchStart);
const arrayContent = content.substring(matchStart, matchEnd);
const afterArray = content.substring(matchEnd);

// Parse the array with regex to find individual politician objects
// This is a simplified approach - extract the entire array, eval it carefully
const arrayStr = arrayContent.replace('export const politicians = ', 'let nextId = 1;\nconst politicians = ');

// Write to temp file, execute, get the array back
const tempFile = 'temp_parse.js';
fs.writeFileSync(tempFile, arrayStr + '\nmodule.exports = { politicians };');

try {
  // Load and deduplicate
  const { politicians } = require('./' + tempFile);
  
  // Create a map by name to deduplicate
  const seen = new Map();
  const deduped = [];
  
  for (const politician of politicians) {
    if (!seen.has(politician.name)) {
      seen.set(politician.name, politician);
      deduped.push(politician);
    } else {
      // Merge justice incidents
      const existing = seen.get(politician.name);
      if (politician.details.justiceIncidents && politician.details.justiceIncidents.length > 0) {
        const existingIncidents = existing.details.justiceIncidents || [];
        const merged = [...existingIncidents];
        
        for (const incident of politician.details.justiceIncidents) {
          if (!merged.some(e => e.description === incident.description)) {
            merged.push(incident);
          }
        }
        existing.details.justiceIncidents = merged;
      }
      
      // Update conviction and case counts
      if (politician.convictions > existing.convictions) {
        existing.convictions = politician.convictions;
      }
      if (politician.ongoingCases > existing.ongoingCases) {
        existing.ongoingCases = politician.ongoingCases;
      }
    }
  }
  
  // Generate output
  let output = beforeArray + 'export const politicians = [\n';
  
  for (let i = 0; i < deduped.length; i++) {
    const p = deduped[i];
    output += '  {\n';
    output += `    id: ${i + 1},\n`;
    output += `    name: '${p.name}',\n`;
    output += `    party: '${p.party}',\n`;
    output += `    position: '${p.position}',\n`;
    output += `    convictions: ${p.convictions},\n`;
    output += `    ongoingCases: ${p.ongoingCases},\n`;
    output += `    details: ${JSON.stringify(p.details, null, 6)}\n`;
    output += '  }' + (i < deduped.length - 1 ? ',' : '') + '\n';
  }
  
  output += ']' + afterArray;
  
  fs.writeFileSync(filePath, output);
  console.log(`✅ Deduplicated: ${politicians.length - deduped.length} duplicates removed`);
  
} catch (e) {
  console.error('Error:', e.message);
} finally {
  fs.unlinkSync(tempFile);
}

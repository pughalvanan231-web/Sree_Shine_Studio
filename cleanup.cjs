const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.jsx')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const allFiles = walkSync(path.join(__dirname, 'src'));

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Standardization replacements based on Phase 3 and Phase 7 instructions
  
  // Layout and Backgrounds
  content = content.replace(/bg-\[\#FBF9F5\]/g, 'bg-black');
  content = content.replace(/bg-white/g, 'bg-[#121212]');
  content = content.replace(/bg-\[\#F3EFE7\]/g, 'bg-[#121212]');
  content = content.replace(/bg-\[\#FAF7F2\]/g, 'bg-black');
  content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-black');

  // Text Colors
  content = content.replace(/text-\[\#191B1E\]/g, 'text-[#ECE5D8]');
  content = content.replace(/text-\[\#0a0a0a\]/g, 'text-[#ECE5D8]');
  content = content.replace(/text-\[\#585C65\]/g, 'text-[#9CA3AF]');
  content = content.replace(/text-\[\#374151\]/g, 'text-[#9CA3AF]');
  content = content.replace(/text-\[\#9C7741\]/g, 'text-[#C8A25D]');
  
  // Borders
  content = content.replace(/border-\[\#DDD2BF\]\/80/g, 'border-white/10');
  content = content.replace(/border-\[\#DDD2BF\]/g, 'border-white/10');
  content = content.replace(/border-black\/5/g, 'border-white/10');
  content = content.replace(/border-black\/10/g, 'border-white/10');

  // Typography
  content = content.replace(/font-serif/g, 'font-heading');
  
  // Remove unused glassmorphism
  content = content.replace(/backdrop-blur-xl/g, 'backdrop-blur-md');
  content = content.replace(/shadow-2xl/g, 'shadow-lg');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated colors/typography in ${file}`);
  }
});

console.log("Deep color standardization complete!");

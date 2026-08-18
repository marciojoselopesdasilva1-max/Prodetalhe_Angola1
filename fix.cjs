const fs = require('fs');

let header = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
header = header.replace(
  /<div className="flex items-center gap-2 z-50">[\s\S]*?<\/div>/,
  '<div className="flex items-center gap-2 z-50">\n            <Logo className="text-xl" />\n          </div>'
);
fs.writeFileSync('src/components/layout/Header.tsx', header);

let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace(
  /<div className="flex items-center gap-2">[\s\S]*?<\/div>/,
  '<div className="flex items-center gap-2">\n            <Logo className="text-xl" />\n          </div>'
);
fs.writeFileSync('src/components/layout/Footer.tsx', footer);

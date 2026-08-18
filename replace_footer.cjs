const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

content = content.replace(
  "import { ShieldCheck, Facebook, Instagram, Twitter } from 'lucide-react';",
  "import { Facebook, Instagram, Twitter } from 'lucide-react';\nimport { Logo } from '../ui/Logo';"
);

content = content.replace(
  /<div className="flex items-center gap-2">\s*<ShieldCheck className="h-8 w-8 text-\[#FACC15\]" \/>\s*<span className="text-xl font-bold tracking-tight text-white">Prodetalhe<span className="text-\[#FACC15\]">_Angola<\/span><\/span>\s*<\/div>/,
  '<div className="flex items-center gap-2">\n            <Logo />\n          </div>'
);

fs.writeFileSync('src/components/layout/Footer.tsx', content);

const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

content = content.replace(
  "import { ShieldCheck, Phone, Menu, X } from 'lucide-react';",
  "import { Phone, Menu, X } from 'lucide-react';\nimport { Logo } from '../ui/Logo';"
);

content = content.replace(
  /<div className="flex items-center gap-2 z-50">\s*<ShieldCheck className="h-8 w-8 text-\[#FACC15\]" \/>\s*<span className="text-xl font-bold tracking-tight text-white">Prodetalhe<span className="text-\[#FACC15\]">_Angola<\/span><\/span>\s*<\/div>/,
  '<div className="flex items-center gap-2 z-50">\n            <Logo />\n          </div>'
);

fs.writeFileSync('src/components/layout/Header.tsx', content);

import glob
import re
import os

components = glob.glob('src/components/landing/*.tsx')

for comp in components:
    if comp.endswith('icons.tsx'):
        continue
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()

    # Restore lucide-react imports from my previous unauthorized change
    content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+["\']\./icons["\'];?', r'import {\1} from "lucide-react";', content)

    # Rename XIcon back to X if needed
    if ' XIcon' in content or '{XIcon' in content or '{ XIcon' in content:
        content = re.sub(r'\bXIcon\b', 'X', content)
        content = content.replace('<XIcon ', '<X ')

    # Remove inline prop
    content = content.replace(' inline className', ' className')
    content = content.replace(' inline />', ' />')
    content = content.replace('<X inline', '<X')

    # Add GlassIcon import if not there
    if 'GlassIcon' not in content and ('c.icon' in content or 'p.icon' in content or 's.icon' in content or 'd.icon' in content or 'k.icon' in content or 'Menu' in content or 'menu' in content.lower()):
        last_import = content.rfind('import ')
        if last_import != -1:
            end_of_last_import = content.find('\n', last_import) + 1
            content = content[:end_of_last_import] + 'import { GlassIcon } from "@/components/GlassIcon";\n' + content[end_of_last_import:]

    # Header mobile menu button replacement
    if 'header.tsx' in comp:
        content = re.sub(
            r'<button\s*onClick=\{\(\)\s*=>\s*setOpen\(\(o\)\s*=>\s*!o\)\}\s*className="lg:hidden[^"]+"\s*aria-label="Menú"\s*>\s*\{open \? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />\}\s*</button>',
            r'<GlassIcon onClick={() => setOpen((o) => !o)} ariaLabel="Menú" className="lg:hidden">\n            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}\n          </GlassIcon>',
            content
        )

    # Replace specific feature wrappers from the CURRENT state (which is w-fit)
    content = content.replace('<div className="mb-4 transition-transform group-hover:scale-110 w-fit">\n                <c.icon />\n              </div>', '<GlassIcon ariaLabel={c.label} className="mb-4 transition-transform group-hover:scale-110">\n                <c.icon />\n              </GlassIcon>')
    
    content = content.replace('<div className="group-hover:opacity-80 transition-colors w-fit">\n                  <c.icon />\n                </div>', '<GlassIcon ariaLabel={c.title} className="group-hover:opacity-80 transition-colors">\n                  <c.icon />\n                </GlassIcon>')
    
    content = content.replace('<div className="w-fit">\n                  <p.icon />\n                </div>', '<GlassIcon ariaLabel={p.label}>\n                  <p.icon />\n                </GlassIcon>')
    
    content = content.replace('<div className="mb-4 w-fit">\n                <s.icon />\n              </div>', '<GlassIcon ariaLabel={s.title} className="mb-4">\n                <s.icon />\n              </GlassIcon>')
    
    content = content.replace('<div className="w-fit hover:scale-[1.02] transition-all duration-300">\n                      <s.icon />\n                    </div>', '<GlassIcon ariaLabel={s.title} className="hover:scale-[1.02] transition-all duration-300">\n                      <s.icon />\n                    </GlassIcon>')
    
    content = content.replace('<div className="shrink-0 w-fit">\n                  <p.icon />\n                </div>', '<GlassIcon ariaLabel={p.title} className="shrink-0">\n                  <p.icon />\n                </GlassIcon>')
    
    content = content.replace('<span className="w-fit transition-transform group-hover:scale-110">\n                    <d.icon />\n                  </span>', '<GlassIcon ariaLabel={d.title} className="transition-transform group-hover:scale-110">\n                    <d.icon />\n                  </GlassIcon>')

    with open(comp, 'w', encoding='utf-8') as f:
        f.write(content)

if os.path.exists('src/components/landing/icons.tsx'):
    os.remove('src/components/landing/icons.tsx')

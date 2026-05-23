import glob
import re
import os

components = glob.glob('src/components/landing/*.tsx')

for comp in components:
    if comp.endswith('icons.tsx'):
        continue
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()

    # Restore lucide-react imports
    content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+["\']\./icons["\'];?', r'import {\1} from "lucide-react";', content)

    # Rename XIcon back to X if needed
    if ' XIcon' in content or '{XIcon' in content or '{ XIcon' in content:
        content = re.sub(r'\bXIcon\b', 'X', content)
        content = content.replace('<XIcon ', '<X ')

    # Remove inline prop
    content = content.replace(' inline className', ' className')
    content = content.replace(' inline ', ' ')
    content = content.replace('<X inline', '<X')

    # Add GlassIcon import if not there
    if 'GlassIcon' not in content and ('c.icon' in content or 'p.icon' in content or 's.icon' in content or 'd.icon' in content or 'k.icon' in content or 'menu' in content.lower()):
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

    # Replace specific feature wrappers
    content = content.replace('<div className="w-12 h-12 rounded-xl liquid-neon flex items-center justify-center mb-4 transition-transform group-hover:scale-110">\n                <c.icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_var(--cyan-glow)]" />\n              </div>', '<GlassIcon ariaLabel={c.label} className="mb-4 transition-transform group-hover:scale-110">\n                <c.icon />\n              </GlassIcon>')
    
    content = content.replace('<div className="w-11 h-11 rounded-xl bg-[color:var(--surface-3)] border border-[color:var(--hairline)] flex items-center justify-center group-hover:border-[color:var(--cyan-glow)]/50 transition-colors">\n                  <c.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n                </div>', '<GlassIcon ariaLabel={c.title} className="group-hover:opacity-80 transition-colors">\n                  <c.icon />\n                </GlassIcon>')
    
    content = content.replace('<div className="w-10 h-10 rounded-lg bg-[color:var(--cyan-glow)]/10 border border-[color:var(--cyan-glow)]/30 flex items-center justify-center">\n                  <p.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n                </div>', '<GlassIcon ariaLabel={p.label}>\n                  <p.icon />\n                </GlassIcon>')
    
    content = content.replace('<div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[color:var(--surface-3)] to-[color:var(--surface-2)] border border-[color:var(--hairline)] flex items-center justify-center mb-4">\n                <s.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n              </div>', '<GlassIcon ariaLabel={s.title} className="mb-4">\n                <s.icon />\n              </GlassIcon>')
    
    content = content.replace('<div className="relative w-16 h-16 rounded-3xl glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">\n                      <s.icon className="w-6 h-6 text-[color:var(--cyan-glow)]" />\n                    </div>', '<GlassIcon ariaLabel={s.title} className="hover:scale-[1.02] transition-all duration-300">\n                      <s.icon />\n                    </GlassIcon>')
    
    content = content.replace('<div className="w-9 h-9 rounded-lg bg-[color:var(--danger)]/10 border border-[color:var(--danger)]/30 flex items-center justify-center shrink-0">\n                  <p.icon className="w-4 h-4 text-[color:var(--danger)]" />\n                </div>', '<GlassIcon ariaLabel={p.title} className="shrink-0">\n                  <p.icon />\n                </GlassIcon>')
    
    content = content.replace('<span className="w-10 h-10 rounded-lg liquid-neon flex items-center justify-center transition-transform group-hover:scale-110">\n                    <d.icon className="w-5 h-5 text-white drop-shadow-[0_0_8px_var(--cyan-glow)]" />\n                  </span>', '<GlassIcon ariaLabel={d.title} className="transition-transform group-hover:scale-110">\n                    <d.icon />\n                  </GlassIcon>')

    with open(comp, 'w', encoding='utf-8') as f:
        f.write(content)

if os.path.exists('src/components/landing/icons.tsx'):
    os.remove('src/components/landing/icons.tsx')

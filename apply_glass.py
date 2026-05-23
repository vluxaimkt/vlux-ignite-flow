import glob
import re

components = glob.glob('src/components/landing/*.tsx')
for comp in components:
    if comp.endswith('icons.tsx'):
        continue
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change imports
    content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+["\']lucide-react["\'];?', r'import {\1} from "./icons";', content)

    # Change XIcon
    if '<X ' in content or '<X>' in content or '{X}' in content or ' X,' in content or ', X' in content:
        content = re.sub(r'\bX\b', 'XIcon', content)
        
    # Wrap standard icons in inline if they are part of links/buttons (e.g. ArrowRight, Menu, XIcon, Check, etc)
    inline_icons = ['ArrowRight', 'Menu', 'XIcon', 'Sparkles', 'Check', 'CheckCircle2', 'TrendingUp', 'Package', 'AlertTriangle', 'Zap', 'ArrowUpRight', 'Clock', 'Bot', 'Calendar', 'Mail', 'Phone', 'MapPin']
    for icon in inline_icons:
        content = content.replace(f'<{icon} className', f'<{icon} inline className')
        content = content.replace(f'<{icon} />', f'<{icon} inline />')
        
    # Add inline for dynamic icons in dashboard-mockup
    if 'dashboard-mockup' in comp:
        content = content.replace('<k.icon className', '<k.icon inline className')
        content = content.replace('<p.icon className', '<p.icon inline className')

    # Remove the old wrappers
    content = content.replace('<div className="w-12 h-12 rounded-xl liquid-neon flex items-center justify-center mb-4 transition-transform group-hover:scale-110">\n                <c.icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_var(--cyan-glow)]" />\n              </div>', '<div className="mb-4 transition-transform group-hover:scale-110 w-fit">\n                <c.icon />\n              </div>')
    
    content = content.replace('<div className="w-11 h-11 rounded-xl bg-[color:var(--surface-3)] border border-[color:var(--hairline)] flex items-center justify-center group-hover:border-[color:var(--cyan-glow)]/50 transition-colors">\n                  <c.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n                </div>', '<div className="group-hover:opacity-80 transition-colors w-fit">\n                  <c.icon />\n                </div>')
    
    content = content.replace('<div className="w-10 h-10 rounded-lg bg-[color:var(--cyan-glow)]/10 border border-[color:var(--cyan-glow)]/30 flex items-center justify-center">\n                  <p.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n                </div>', '<div className="w-fit">\n                  <p.icon />\n                </div>')
    
    content = content.replace('<div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[color:var(--surface-3)] to-[color:var(--surface-2)] border border-[color:var(--hairline)] flex items-center justify-center mb-4">\n                <s.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n              </div>', '<div className="mb-4 w-fit">\n                <s.icon />\n              </div>')
    
    content = content.replace('<div className="relative w-16 h-16 rounded-3xl glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">\n                      <s.icon className="w-6 h-6 text-[color:var(--cyan-glow)]" />\n                    </div>', '<div className="w-fit hover:scale-[1.02] transition-all duration-300">\n                      <s.icon />\n                    </div>')
    
    content = content.replace('<div className="w-9 h-9 rounded-lg bg-[color:var(--danger)]/10 border border-[color:var(--danger)]/30 flex items-center justify-center shrink-0">\n                  <p.icon className="w-4 h-4 text-[color:var(--danger)]" />\n                </div>', '<div className="shrink-0 w-fit">\n                  <p.icon />\n                </div>')
    
    content = content.replace('<span className="w-10 h-10 rounded-lg liquid-neon flex items-center justify-center transition-transform group-hover:scale-110">\n                    <d.icon className="w-5 h-5 text-white drop-shadow-[0_0_8px_var(--cyan-glow)]" />\n                  </span>', '<span className="w-fit transition-transform group-hover:scale-110">\n                    <d.icon />\n                  </span>')

    with open(comp, 'w', encoding='utf-8') as f:
        f.write(content)

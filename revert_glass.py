import glob
import re

components = glob.glob('src/components/landing/*.tsx')

for comp in components:
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove GlassIcon imports
    content = re.sub(r'import\s+\{\s*GlassIcon\s*\}\s*from\s+["\']@/components/GlassIcon["\'];?\n?', '', content)
    content = re.sub(r'import\s+\{\s*GlassIcon\s*\}\s*from\s+["\']./GlassIcon["\'];?\n?', '', content)

    # Header mobile menu button replacement
    if 'header.tsx' in comp:
        content = re.sub(
            r'<GlassIcon\s*onClick=\{\(\)\s*=>\s*setOpen\(\(o\)\s*=>\s*!o\)\}\s*ariaLabel="Menú"\s*className="lg:hidden">\s*\{open \? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />\}\s*</GlassIcon>',
            r'<button\n            onClick={() => setOpen((o) => !o)}\n            className="lg:hidden glass-button rounded-full bg-white/10 border border-white/20 text-white !p-2 hover:bg-white/20 hover:scale-[1.03] transition-all duration-300"\n            aria-label="Menú"\n          >\n            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}\n          </button>',
            content
        )

    # Revert specific feature wrappers
    content = content.replace('<GlassIcon ariaLabel={c.label} className="mb-4 transition-transform group-hover:scale-110">\n                <c.icon />\n              </GlassIcon>', '<div className="w-12 h-12 rounded-xl liquid-neon flex items-center justify-center mb-4 transition-transform group-hover:scale-110">\n                <c.icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_var(--cyan-glow)]" />\n              </div>')
    
    content = content.replace('<GlassIcon ariaLabel={c.title} className="group-hover:opacity-80 transition-colors">\n                  <c.icon />\n                </GlassIcon>', '<div className="w-11 h-11 rounded-xl bg-[color:var(--surface-3)] border border-[color:var(--hairline)] flex items-center justify-center group-hover:border-[color:var(--cyan-glow)]/50 transition-colors">\n                  <c.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n                </div>')
    
    content = content.replace('<GlassIcon ariaLabel={p.label}>\n                  <p.icon />\n                </GlassIcon>', '<div className="w-10 h-10 rounded-lg bg-[color:var(--cyan-glow)]/10 border border-[color:var(--cyan-glow)]/30 flex items-center justify-center">\n                  <p.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n                </div>')
    
    content = content.replace('<GlassIcon ariaLabel={s.title} className="mb-4">\n                <s.icon />\n              </GlassIcon>', '<div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[color:var(--surface-3)] to-[color:var(--surface-2)] border border-[color:var(--hairline)] flex items-center justify-center mb-4">\n                <s.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />\n              </div>')
    
    content = content.replace('<GlassIcon ariaLabel={s.title} className="hover:scale-[1.02] transition-all duration-300">\n                      <s.icon />\n                    </GlassIcon>', '<div className="relative w-16 h-16 rounded-3xl glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">\n                      <s.icon className="w-6 h-6 text-[color:var(--cyan-glow)]" />\n                    </div>')
    
    content = content.replace('<GlassIcon ariaLabel={p.title} className="shrink-0">\n                  <p.icon />\n                </GlassIcon>', '<div className="w-9 h-9 rounded-lg bg-[color:var(--danger)]/10 border border-[color:var(--danger)]/30 flex items-center justify-center shrink-0">\n                  <p.icon className="w-4 h-4 text-[color:var(--danger)]" />\n                </div>')
    
    content = content.replace('<GlassIcon ariaLabel={d.title} className="transition-transform group-hover:scale-110">\n                    <d.icon />\n                  </GlassIcon>', '<span className="w-10 h-10 rounded-lg liquid-neon flex items-center justify-center transition-transform group-hover:scale-110">\n                    <d.icon className="w-5 h-5 text-white drop-shadow-[0_0_8px_var(--cyan-glow)]" />\n                  </span>')

    with open(comp, 'w', encoding='utf-8') as f:
        f.write(content)

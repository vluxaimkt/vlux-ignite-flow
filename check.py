import glob
import re

with open('src/components/landing/icons.tsx', 'r', encoding='utf-8') as f:
    icons_content = f.read()

exported = re.findall(r'export const ([A-Za-z0-9_]+) =', icons_content)
exported.append('LiquidWrapper')
print("Exported:", exported)

for comp in glob.glob('src/components/landing/*.tsx'):
    if comp.endswith('icons.tsx'): continue
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']\./icons["\']', content)
    if match:
        imports = [x.strip() for x in match.group(1).split(',')]
        for imp in imports:
            if imp and imp not in exported:
                print(f"MISSING ICON: {imp} in {comp}")

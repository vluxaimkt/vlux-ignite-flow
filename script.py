import os
import glob
import re

# Update icons.tsx so it only exports raw SVGs with the correct stroke and drop shadow
icons_path = 'src/components/landing/icons.tsx'
with open(icons_path, 'r', encoding='utf-8') as f:
    icons_content = f.read()

icons_content = icons_content.replace('w-full h-full', 'w-6 h-6')
icons_content = icons_content.replace('const icon = <InlineSVG name={name} className={className} />;', 'return <InlineSVG name={name} className={className} />;')
icons_content = icons_content.replace('return noWrapper ? icon : <LiquidWrapper>{icon}</LiquidWrapper>;', '')
with open(icons_path, 'w', encoding='utf-8') as f:
    f.write(icons_content)

# Replace all imports of lucide-react in landing components
components = glob.glob('src/components/landing/*.tsx')
for comp in components:
    if comp.endswith('icons.tsx'):
        continue
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace lucide-react import with local icons
    if 'lucide-react' in content:
        content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+[\"\']lucide-react[\"\'];?', r'import {\1} from "./icons";', content)
        # Rename X to XIcon if present in the destructured import
        if ' X,' in content or ' X ' in content or '{X,' in content or '{ X,' in content:
            content = re.sub(r'\bX\b', 'XIcon', content)
        with open(comp, 'w', encoding='utf-8') as f:
            f.write(content)

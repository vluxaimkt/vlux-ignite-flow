import glob
import re

components = glob.glob('src/components/landing/*.tsx')
for comp in components:
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the weird quotes
    content = content.replace("from \\'lucide-react\\';", 'from "lucide-react";')
    content = content.replace("from \\'lucide-react\\'", 'from "lucide-react"')
    content = content.replace("from \\\"lucide-react\\\";", 'from "lucide-react";')
    content = content.replace("from 'lucide-react'", 'from "lucide-react"')
    
    with open(comp, 'w', encoding='utf-8') as f:
        f.write(content)

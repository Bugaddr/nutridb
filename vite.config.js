import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function markdownNutrientsPlugin() {
  const virtualId = 'virtual:nutrients'
  const resolvedId = '\0' + virtualId

  return {
    name: 'markdown-nutrients',
    resolveId(id) {
      if (id === virtualId) return resolvedId
    },
    load(id) {
      if (id !== resolvedId) return
      const dir = path.resolve(__dirname, 'src/data/nutrients')
      if (!fs.existsSync(dir)) return 'export default []'
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
      const nutrients = files.map(file => {
        try {
          const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
          const { data, content } = matter(raw)
          return { ...data, content: content.trim(), id: file.replace('.md', '') }
        } catch (e) {
          console.warn(`⚠️ Failed to parse ${file}: ${e.message}`)
          return null
        }
      }).filter(Boolean)
      nutrients.sort((a, b) => (a.sortOrder || 99) - (b.sortOrder || 99))
      return `export default ${JSON.stringify(nutrients)}`
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('src/data/nutrients') && file.endsWith('.md')) {
        const mod = server.moduleGraph.getModuleById(resolvedId)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          return [mod]
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), markdownNutrientsPlugin()],
  base: '/nutridb/',
})

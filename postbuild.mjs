import fs from 'fs'
import path from 'path'

const distIndexHtmlPath = path.resolve('dist', 'index.html')
const rawContent = fs.readFileSync(distIndexHtmlPath, { encoding: 'utf-8' })
const newContent = rawContent.replace(/type="module" crossorigin /g, '')
fs.writeFileSync(distIndexHtmlPath, newContent, { encoding: 'utf-8' })

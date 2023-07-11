import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { optimize } from 'svgo'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const iconsPath = join(__dirname, 'icons.json')
const vueSrcPath = join(__dirname, '../packages/vue/src/icons.ts')
const reactSrcPath = join(__dirname, '../packages/react/src/icons.tsx')

const banner = '// Generated by glyphs/generate-src.js\n'
const vueImports = `
import { defineComponent, h } from 'vue'
import type { DefineComponent } from 'vue'
import type { DinkieIconProps } from './index'
`
const reactImports = `
import React from 'react'
import type { DinkieIconProps } from './index'
`

const optimizePath = (path) =>
  optimize(`<path d="${path}"/>`).data.replace(/<path d="(.+)"\/>/g, '$1')

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const toComponentName = (name) =>
  'DinkieIcon' +
  capitalize(name).replace('.small', '').replace('.filled', 'Filled').replace('.alt', 'Alt') +
  (name.match('.small') ? '10' : '12')

const generateVueComponent = ({ name, size, path }) => `
export const ${name}: DefineComponent<DinkieIconProps> = defineComponent({
  name: '${name}',
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 ${size} ${size}' }, [
      h('path', { fill: 'currentColor', d: '${path}' }),
    ]),
})
`

const generateReactComponent = ({ name, size, path }) => `
export const ${name} = ({ className }: DinkieIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 ${size} ${size}'} className={className}>
    <path fill="currentColor" d="${path}" />
  </svg>
)
`

const main = () => {
  const icons = JSON.parse(readFileSync(iconsPath, 'utf8')).map(({ name, size, path }) => ({
    name: toComponentName(name),
    size,
    path: optimizePath(path),
  }))
  writeFileSync(vueSrcPath, banner + vueImports + icons.map(generateVueComponent).join(''))
  writeFileSync(reactSrcPath, banner + reactImports + icons.map(generateReactComponent).join(''))
}

main()

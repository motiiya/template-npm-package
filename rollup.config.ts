import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.ts',
  output: {
    file: './index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    commonjs(),
    terser()
  ]
}

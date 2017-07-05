import { parse } from 'acorn'

export default (options = {}) => {
  const version = options.ecmaVersion || 5
  return {
    name: 'assert-es',

    transformBundle (code) {
      try {
        parse(code, { ecmaVersion: version, sourceType: 'module' })
      } catch (err) {
        throw new Error(`Failed to parse code as ES${version}: ${err}`)
      }
      return null
    }
  }
}

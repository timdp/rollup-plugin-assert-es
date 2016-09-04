import { parse } from 'acorn'
import { replace, VisitorOption } from 'estraverse'
import { generate } from 'escodegen'
import { createFilter } from 'rollup-pluginutils'
import { extname } from 'path'

const reType = /^(?:Im|Ex)port[A-Z]/

const importExportRemovingVisitor = {
  enter ({ type }) {
    if (reType.test(type)) {
      return VisitorOption.Remove
    }
  }
}

const prune = (ast) => replace(ast, importExportRemovingVisitor)

export default (options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  const version = options.ecmaVersion || 5
  return {
    name: 'assert-es',

    transform (code, id) {
      if (!filter(id) || extname(id) !== '.js') {
        return null
      }
      const ast = parse(code, { ecmaVersion: 6, sourceType: 'module' })
      const prunedCode = generate(prune(ast))
      try {
        parse(prunedCode, { ecmaVersion: version, sourceType: 'module' })
      } catch (err) {
        throw new Error(`Failed to parse ${id} as ES${version}: ${err}`)
      }
      return null
    }
  }
}

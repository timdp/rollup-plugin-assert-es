import fs from 'fs'
import path from 'path'

const fixturesRoot = path.join(__dirname, '../fixtures')

const listFixtures = (version) => {
  return fs.readdirSync(path.join(fixturesRoot, 'es' + version))
    .filter((name) => (path.extname(name) === '.js'))
    .map((name) => path.basename(name, '.js'))
}

// Transpiled by Rollup
export const EXCEPT = [
  'import',
  'export'
]

export const ES3 = listFixtures(3)
export const ES5 = listFixtures(5)
export const ES6 = listFixtures(6).filter((name) => (EXCEPT.indexOf(name) < 0))

export const getFixturePath = (name, ext = '.js') => path.join(fixturesRoot, name + ext)

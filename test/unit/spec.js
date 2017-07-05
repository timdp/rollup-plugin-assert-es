import assertES from '../../src/'
import { getFixturePath, ES3, ES5, ES6, EXCEPT } from '../lib/fixtures'
import { rollup } from 'rollup'

const allow = (name, version) => expect(rollup({
  entry: getFixturePath(`es${version}/${name}`),
  plugins: [assertES()]
}).then((bundle) => bundle.generate())).to.be.resolved

const disallow = (name, version) => expect(rollup({
  entry: getFixturePath(`es${version}/${name}`),
  plugins: [assertES()]
}).then((bundle) => bundle.generate())).to.be.rejected

const allowAll = (arr, version) => {
  for (const name of arr) {
    it('allows ' + name, () => allow(name, version))
  }
}

const disallowAll = (arr, version) => {
  for (const name of arr) {
    it('disallows ' + name, () => disallow(name, version))
  }
}

describe('rollup-plugin-assert-es', function () {
  describe('ES6-to-ES5', function () {
    allowAll(ES3, 3)

    allowAll(ES5, 5)

    disallowAll(ES6, 6)

    allowAll(EXCEPT, 6)
  })
})

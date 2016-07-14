const foo = {
  get bar () {
    return this._bar
  },

  set bar (value) {
    this._bar = value
  }
}
foo.bar = 'baz'
console.log(foo)

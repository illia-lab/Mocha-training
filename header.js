const {seleniumWD} = require('promod')
const {$ ,$$, browser} = seleniumWD

class HeaderFragment {
  constructor() {
    this.sighIn = $$('.btn.btn-secondary').get(0)
    this.sighUp = $$('.bth.btn-secondary').get(1)
  }
}

module.exports = {
  HeaderFragment
}

const _ = require('lodash');

module.exports = {
  bind: (fpm) => {
    // Run When Server Init
    fpm.registerAction('INIT', () => {
      const c = fpm.getConfig()
      console.log('Run Init Actions', c)
    })

    fpm.registerAction('BEFORE_SERVER_START', () => {
      console.log('Run BEFORE_SERVER_START Actions')
    })
    return {};
  }
}

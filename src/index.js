const _ = require('lodash');
const pkg = require('../package.json');
const debug = require('debug')(pkg.name);
module.exports = {
  bind: (fpm) => {

    const bizModule = { };
    // Run When Server Init
    fpm.registerAction('INIT', () => {
      const c = fpm.getConfig()
      debug('%o', c);
    })

    fpm.registerAction('BEFORE_SERVER_START', () => {
      console.log('Run BEFORE_SERVER_START Actions')
    })
    return bizModule;
  }
}

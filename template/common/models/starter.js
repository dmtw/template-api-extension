'use strict'

module.exports = function(<%= this.changeCase.pascal(moduleName) %>) {
  // This is a static method that lives on the <%= this.changeCase.pascal(moduleName) %> model
  <%= this.changeCase.pascal(moduleName) %>.echo = value => Promise.resolve(value)

  // We defined the remote method on the module to make it available over REST
  <%= this.changeCase.pascal(moduleName) %>.remoteMethod('echo', {
    accepts: { arg: 'value', type: 'string' },
    returns: { arg: 'result', type: 'string' },
  })
}

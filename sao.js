const changeCase = require('change-case')

module.exports = {
  templateOptions: {
    context: {
      changeCase
    }
  },
  prompts: {
    moduleName: {
      message: 'What is the name of the new module (examples: Content/System/Storage...)?',
      default: 'Starter'
    },
    name: {
      message: 'What is the name of the new template (api-*)?',
      default({moduleName}) {
        return `api-${changeCase.lower(moduleName)}`
      },
    },
    description: {
      message: 'How would you describe the new project?',
      default({moduleName}) {
        return `Colmena API ${changeCase.lower(moduleName)}`
      },
    },
    scope: {
      message: 'What is the scope of your NPM Org?',
      default: ':gitUser:',
      store: true
    },
  },
  showTip: true,
}

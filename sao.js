const changeCase = require('change-case')
const pathCase = changeCase.pathCase

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
  move: answers => {
    return {
      'common/models/starter.js': `common/models/${pathCase(answers.moduleName)}.js`,
      'common/models/starter.json': `common/models/${pathCase(answers.moduleName)}.json`,
      'common/models/starter-item.js': `common/models/${pathCase(answers.moduleName)}-item.js`,
      'common/models/starter-item.json': `common/models/${pathCase(answers.moduleName)}-item.json`,
    }

  },
  showTip: true,
}

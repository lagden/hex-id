'use strict'

export default {
  require: [
    'esm'
  ],
  babel: {
    testOptions: {
      presets: [
        ['module:ava/stage-4', {modules: false}]
      ]
    }
  },
  extensions: [
    'mjs'
  ]
}

'use strict'

const print = require('../../utils').print

module.exports = {
  command: 'repo',

  describe: 'Get stats for the currently used repo',

  builder: {
    human: {
      type: 'boolean',
      default: false
    }
  },

  handler (argv) {
    argv.ipfs.stats.repo({ human: argv.human }, (err, stats) => {
      if (err) {
        throw err
      }

      print(`repo status
  number of objects: ${stats.numObjects}
  repo size: ${stats.repoSize}
  repo path: ${stats.repoPath}
  version: ${stats.version}
  maximum storage: ${stats.storageMax}`)
    })
  }
}

'use strict';

module.exports = {

  'app': {

    'options': {

      'configuration': 'tslint.json',

      'force': false

    },

    'files': {

      'src': [
        '<%= paths.src %>/**/*.ts',
        '!node_modules',
        '!typings'
      ]

    }

  }

};
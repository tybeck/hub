'use strict';

module.exports = {

  'app': {

    'options': {

      'sourceMap': true,

      'emitDecoratorMetadata': true,

      'experimentalDecorators': true,

      'removeComments': false,

      'noImplicitAny': false,

      'noImplicitUseStrict': true,

      'pretty': true,

      'declaration': false,

      // 'lib': [
      //
      //   'es2016'
      //
      // ],

      'typeRoots': [

        '../node_modules/@types'

      ],

      'exclude': [

        '../node_modules',

        '../platforms'

      ]

    },

    'files': [

      {

        'src': [

          '<%= paths.src %>/**/*.ts'

        ],

        'dest': '<%= paths.dist %>/',

        'options': {

          'fast': 'never'

        }

      }

    ]

  }

};

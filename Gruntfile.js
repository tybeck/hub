'use strict';

module.exports = function (grunt) {

  var _ = require('lodash'),

    chalk = require('chalk');

  var pkg = {

    'grunt': null,

    msg: function (msg) {

      console.log(
        chalk.bgWhite(
          chalk.red('## ') +
          chalk.black('Hoagies On Main') +
          chalk.red(' ## ') +
          chalk.black(msg)
        )
      );

      return this;

    },

    /**
     * Load grunt tasks automatically
     * Time how long tasks take. Can help when optimizing build times
     * @method init
     * @type Function
     */

    init: function (grunt) {

      this.grunt = grunt;

      require('es6-promise')
        .polyfill();

      require('jit-grunt')(this.grunt, {});

      require('time-grunt')(this.grunt);

      return this;

    },

    /**
     * Configure grunt plugins
     * @method config
     * @type Function
     */

    config: function () {

      var grunt = this.grunt;

      grunt.initConfig({

        'pkg': grunt.file.readJSON('package.json'),

        'paths' : require('./grunt/paths'),

        'watch' : require('./grunt/watch'),

        'clean' : require('./grunt/clean'),

        'ts' : require('./grunt/ts'),

        'tslint': require('./grunt/tslint')

      });

      return this;

    },

    /**
     * @method tasks
     * Build tasks for build, test, serve, and running the application.
     */

    tasks: function () {

      var self = this,

        grunt = self.grunt;

      self
        .msg('         #@  `@`        ')
        .msg('         #@  `@`        ')
        .msg('        ,@@@@@@\'        ')
        .msg('       @@@@@@@@@@       ')
        .msg('      @@@#@  `@@@@      ')
        .msg('      @@ #@  `@ @@;     ')
        .msg('      @@ #@  `@`,@@     ')
        .msg('      @@ #@  `@` \'\'     ')
        .msg('      @@+#@  `@`        ')
        .msg('      .@@@@. `@`        ')
        .msg('       `@@@@@@@,        ')
        .msg('         #@@@@@@@.      ')
        .msg('         #@  `@@@@,     ')
        .msg('         #@  `@`\'@@     ')
        .msg('     @@  #@  `@` @@:    ')
        .msg('     @@` #@  `@` @@;    ')
        .msg('     +@@ #@  `@` @@`    ')
        .msg('      @@@#@  `@`@@@     ')
        .msg('      `@@@@;:\'@@@@      ')
        .msg('        @@@@@@@@@       ')
        .msg('         #@#@#@`        ')
        .msg('         #@  `@`        ')
        .msg('         ;;   ;         ');

      grunt.registerTask('build', function () {

        var tasks = [

          'buildTs'

        ];

        grunt
          .task
          .run(
            tasks
          );

      });

      grunt.registerTask('buildTs', function () {

        grunt
          .task
          .run([

            'tslint:app',

            'ts:app',

            'clean:baseDirApp',

            'clean:js'

          ]);

      });

      grunt.registerTask('serve', function () {

        grunt.task.run([

          'build',

          'watch'

        ]);

      });

      return self;

    }

  };

  pkg
    .init(grunt)
    .config()
    .tasks();

};

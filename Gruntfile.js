module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      dist: {
        files: ['!public/bower_components/**/*', 'public/**/*', '!public/css/style.css'],
        options: {
          livereload: true,
        }
      }
    },
    copy: {
      project: {
        expand: true,
        cwd: '.',
        src: ['public/**/*', '!Gruntfile.js', '!package.json',
          '!public/bower.json'
        ],
        dest: 'dist'
      }
    },
    clean: {
      dist: {
        src: 'dist'
      }
    },
    usemin: {
      html: 'dist/public/index.html'
    },
    useminPrepare: {
      options: {
        root: 'dist/public',
        dest: 'dist/public'
      },
      html: 'public/index.html'
    },
    uglify: {
      options: {
        mangle: true
      }
    }
  });

  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('build', ['dist', 'minifica']);

  grunt.registerTask('dist', ['clean', 'copy']);
  grunt.registerTask('minifica', ['useminPrepare', 'concat',
    'uglify', 'usemin'
  ]);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');

};

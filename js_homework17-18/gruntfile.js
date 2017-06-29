
module.exports=function(grunt){
   'use strict';
   grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/js/*.js'],
      dest: 'js/script.main.js'
    },
},
     concat_css: {
    options: {
      separator: ';',
    },
    all: {
      src: ['src/css/*.css'],
      dest: 'css/styles.main.css'
    },
  },
  cssmin:{
     dist: {
      src: ['css/styles.main.css'],
      dest: 'css/styles.main.min.css'
 },
 },
  uglify:{
     dist: {
      src: ['js/script.main.js'],
      dest: 'js/script.main.min.js'
 },
 },

});
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-concat-css');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'concat_css', 'cssmin', 'uglify']);

};

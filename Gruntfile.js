/*
	----------------------------------------------------------
	Build environment
	----------------------------------------------------------
	1) Install NodeJS:
		http://nodejs.org/
	2) Install dev dependencies
	  npm install
	3) Install Grunt CLI globally
		npm install grunt-cli -g
	----------------------------------------------------------
*/

module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      'build/MIDI.js': [
        'build/prefix.js',
        'inc/jasmid/stream.js',
        'inc/jasmid/midifile.js',
        'inc/jasmid/replayer.js',
        'js/midi/audioDetect.js',
        'js/midi/gm.js',
        'js/midi/loader.js',
        'js/midi/player.js',
        'js/midi/plugin.audiotag.js',
        'js/midi/plugin.webaudio.js',
        'js/midi/plugin.webmidi.js',
        'js/util/dom_request_xhr.js', // req when using XHR
        'js/util/dom_request_script.js', // req otherwise
        'inc/shim/base64binary.js',
        'build/suffix.js',
      ]
    },
    'node-minify': {
      'minify': {
        files: {
          'build/MIDI.min.js': ['build/MIDI.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-node-minify');
  grunt.registerTask('default', ['concat', 'node-minify']);
};

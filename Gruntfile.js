"use strict";

module.exports = function( grunt ) {

	// Load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Watch
		watch: {
			css: {
				files: [ '../assets/scss/**/*' ],
				tasks: [ 'compass' ]
			},
			js: {
				files: '../assets/js/**/*',
				tasks: [ 'uglify' ]
			}
		},

		// Compile scss
		compass: {
			dist: {
				options: {
					force: true,
					config: 'config.rb',
					outputStyle: 'compressed'
				}
			}
		},

		// Concat and minify javascripts
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'../build/js/app.min.js': [
						'../assets/js/app.js'
					]
				}
			}
		},

		'ftp-deploy': {
			  build: {
			    auth: {
			      host: 'ftp.vidapanoramica.com',
			      port: 21,
			      authKey: 'key1'
			    },
			    src: '/Projetos/InstitutoDomJose',
			    dest: '/home/deved047/public_html/idj',
			    exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'dist/tmp']
			  }
			}
	});

	// registrando tarefa default
	grunt.registerTask( 'default', [ 'watch' ] );

	// registrando tarefa para deploy
	grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );

};
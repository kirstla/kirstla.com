module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			development: {
				src: [
					'src/library/angular.js',
					'src/library/angular-animate.js',
					'src/library/angular-cookies.js',
					'src/library/angular-loader.js',
					'src/library/angular-resource.js',
					'src/library/angular-route.js',
					'src/library/angular-sanitize.js',
					'src/library/angular-touch.js',
					'node_modules/moment/moment.js',
					'tmp/templates.js',
					'src/application/bootstrap.js',
					'src/application/controllers.js',
					'src/application/directives.js',
					'src/application/services.js',
					'src/application/modules/*/*.js'
				],
				dest: 'public/www/0.0.1/application.js'
			}
		},
		html2js: {
			options: {
				base: 'src',
				htmlmin: {
					//collapseBooleanAttributes: true,
				    collapseWhitespace: true,
				    //removeAttributeQuotes: true,
				    removeComments: true,
				    //removeEmptyAttributes: true,
				    //removeRedundantAttributes: true,
				    //removeScriptTypeAttributes: true,
				    //removeStyleLinkTypeAttributes: true
					}
			},
			templates: {
				src: 'src/**/*.html',
				dest: 'tmp/templates.js'
			}
		},
		watch: {
			files: ['src/**/*'],
			tasks: ['default'],
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html2js');
	
	// Default task(s).
	grunt.registerTask('default',['html2js','concat:development']);
	grunt.registerTask('production',['html2js','concat:production','uglify:production']);
	
};
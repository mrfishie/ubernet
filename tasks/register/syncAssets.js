module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'compass:dev',
		'sync:dev',
        'browserify:dev',
		'coffee:dev'
	]);
};

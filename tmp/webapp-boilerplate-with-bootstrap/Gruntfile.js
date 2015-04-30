module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({

        less: {
            options : {
                plugins : [ new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]}) ]   //  TODO: maybe we need more?
            },
            development: {
                // options: {
                //     paths: ["static/less"], // I'm not sure if we need this, since by default it's just the source files' paths
                //     compress: true,
                //     yuicompress: true
                // },
                files: {
                    "static/css/main.css": "static/less/main.less"
                }
            }
        },

        react: {
            jsx: {
                files: [
                    {
                        expand: true,
                        cwd: 'static/jsx',
                        src: [ '**/*.jsx' ],
                        dest: 'static/js',
                        ext: '.js'
                    }
                ]
            }
        },

        watch: {
            styles: {
                files: ['static/less/**/*.less'],
                tasks: ['less']
            },
            react: {
                files: 'static/jsx/**/*.jsx',
                tasks: ['react']
            }
        }
        
    });

    
    grunt.loadNpmTasks('grunt-react');
    grunt.registerTask('default', ['less', 'react', 'watch']);
};

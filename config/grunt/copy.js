module.exports = {
    404: {
        files: [
            {
                cwd: 'src/',
                dest: 'build/web-audio-meetup-may-2019/',
                expand: true,
                src: ['404.html']
            }
        ]
    },
    scripts: {
        files: [
            {
                cwd: 'build/web-audio-meetup-may-2019/',
                dest: 'build/web-audio-meetup-may-2019/scripts/',
                expand: true,
                src: ['**/!(ngsw-worker).js']
            }
        ]
    },
    styles: {
        files: [
            {
                cwd: 'build/web-audio-meetup-may-2019/',
                dest: 'build/web-audio-meetup-may-2019/styles/',
                expand: true,
                src: ['**/*.css']
            }
        ]
    }
};

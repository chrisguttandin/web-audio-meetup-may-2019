module.exports = {
    default: {
        files: [
            {
                cwd: 'build/web-audio-meetup-may-2019/browser',
                dest: 'build/web-audio-meetup-may-2019/browser',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};

module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/web-audio-meetup-may-2019/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /web-audio-meetup-may-2019/ --configuration production --subresource-integrity'
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/web-audio-meetup-may-2019/browser/**.map'
        },
        'verify': {
            cmd: `npx bundle-buddy build/web-audio-meetup-may-2019/browser/*.js.map && \
                grep -r build/web-audio-meetup-may-2019/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};

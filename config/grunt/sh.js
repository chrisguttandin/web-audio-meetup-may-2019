const { env } = require('process');

module.exports = (grunt) => {
    const fix = grunt.option('fix') === true;

    return {
        'analyze': {
            cmd: `npx ng build --prod --source-map --stats-json && \
                webpack-bundle-analyzer build/web-audio-meetup-may-2019/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /web-audio-meetup-may-2019/ --prod --subresource-integrity'
        },
        'continuous': {
            cmd: 'npx ng test'
        },
        'e2e': {
            cmd: env.CI ? 'npx ng e2e' : 'webdriver-manager update && npx ng e2e --no-webdriver-update'
        },
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json --ext .js ${fix ? '--fix ' : ''}--report-unused-disable-directives *.js config/`
        },
        'lint-src': {
            cmd: `htmlhint --config config/htmlhint/document.json 'src/**/index.html' && \
                htmlhint --config config/htmlhint/template.json 'src/app/**/*.component.html' && \
                npx ng lint web-audio-meetup-may-2019 && \
                npx stylelint src/**/*.css --config config/stylelint/config.json`
        },
        'lint-test': {
            cmd: 'npx ng lint web-audio-meetup-may-2019 --configuration test'
        },
        'monitor': {
            cmd: 'npx ng serve'
        },
        'prerender': {
            cmd: 'npx ng run web-audio-meetup-may-2019:server:production && npx angular-prerender --preserve-index-html'
        },
        'preview': {
            cmd: 'npx ng serve --prod'
        },
        'smoke': {
            cmd: env.CI
                ? `IS_SMOKE_TEST=true npx ng e2e --dev-server-target '' && \
                    npx hint --telemetry=off https://chrisguttandin.github.io/web-audio-meetup-may-2019`
                : `webdriver-manager update && \
                    IS_SMOKE_TEST=true npx ng e2e --dev-server-target '' --no-webdriver-update && \
                    npx hint --telemetry=off https://chrisguttandin.github.io/web-audio-meetup-may-2019`
        },
        'test': {
            cmd: 'npx ng test --watch false'
        },
        'verify': {
            cmd: `npx bundle-buddy build/web-audio-meetup-may-2019/*.js.map && \
                grep -r build/**/*.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};

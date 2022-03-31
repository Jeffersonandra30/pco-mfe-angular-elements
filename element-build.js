const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-app/runtime.js',
        './dist/angular-app/polyfills.js',
        './dist/angular-app/main.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/app-root.js');

    await fs.copyFile('./dist/angular-app/styles.css', 'elements/styles.css')

    await fs.copy('./dist/angular-app/assets/', 'elements/assets/' )
    
})()
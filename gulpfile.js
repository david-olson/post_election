//Project Config
var project = 'postElection',
    url = 'localhost:9888',
    bower = './assets/bower_components/',
    build = '../build_postElection/',
    buildInclude = [
        '**/*.php',
        '**/*.html',
        '**/*.css',
        '**/*.js',
        '**/*.svg',
        '**/*.ttf',
        '**/*.otf',
        '**/*.eot',
        '**/*.woff',
        '**/*.woff2',
        // exclude files and folders
        '!.gitignore',
        '!.git/**/*',
        '!./**/.DS_Store',
        '!node_modules/**/*',
        '!assets/bower_components/**/*',
        '!style.css.map',
        '!assets/js/custom/*',
        '!assets/css/patrials/*'
    ];
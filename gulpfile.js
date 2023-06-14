// Importando os módulos do Gulp e as suas dependências
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Função para minificar os scripts
function scripts() {
    return gulp.src('./src/scripts/*.js') // Seleciona os arquivos JavaScript na pasta './src/scripts'
        .pipe(uglify()) // Minifica os scripts
        .pipe(gulp.dest('./dist/js')); // Salva os scripts minificados na pasta './dist/js'
}

// Função para compilar e minificar os estilos
function styles() {
    return gulp.src('./src/styles/*.scss') // Seleciona os arquivos Sass na pasta './src/styles'
        .pipe(sass({ outputStyle: 'compressed' })) // Compila os estilos Sass e os comprime
        .pipe(gulp.dest('./dist/css')); // Salva os estilos compilados na pasta './dist/css'
}

// Função para otimizar as imagens
function images() {
    return gulp.src('./src/images/**/*') // Seleciona todos os arquivos de imagem na pasta './src/images' e em subpastas
        .pipe(imagemin()) // Otimiza as imagens
        .pipe(gulp.dest('./dist/images')); // Salva as imagens otimizadas na pasta './dist/images'
}

// Tarefa padrão do Gulp, executada ao chamar 'gulp' no terminal
exports.default = gulp.parallel(styles, images, scripts);

// Tarefa para monitorar os arquivos e executar as tarefas relacionadas quando houver alterações
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Monitora os arquivos Sass e executa a tarefa 'styles' quando houver alterações
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts)); // Monitora os arquivos JavaScript e executa a tarefa 'scripts' quando houver alterações
}

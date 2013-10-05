'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var FireshellGenerator = module.exports = function FireshellGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(FireshellGenerator, yeoman.generators.Base);

FireshellGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // var prompts = [{
  //   type: 'confirm',
  //   name: 'someOption',
  //   message: 'Would you like to enable this option?',
  //   default: true
  // }];

  // this.prompt(prompts, function (props) {
  //   this.someOption = props.someOption;

  //   cb();
  // }.bind(this));

  cb();
};

FireshellGenerator.prototype.createDirLayout = function createDirLayout() {
  this.directory('app', 'app');
  this.directory('src', 'src');
};

FireshellGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
};

FireshellGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

FireshellGenerator.prototype.packageFile = function packageFile() {
  this.copy('_package.json', 'package.json');
};

FireshellGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

FireshellGenerator.prototype.grunt = function grunt() {
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('grunt-build.bat', 'grunt-build.bat');
  this.copy('grunt-build.command', 'grunt-build.command');
  this.copy('grunt-dev.bat', 'grunt-dev.bat');
  this.copy('grunt-dev.command', 'grunt-dev.command');
};

FireshellGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

FireshellGenerator.prototype.readme = function readme() {
  this.copy('README.md', 'README.md');
};

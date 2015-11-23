module.exports = function(grunt) {

  var cfg = grunt.file.readJSON("config.json");
  var pkg = grunt.file.readJSON("package.json");

  /////////////////////////////////////////////////////////////////////////
  grunt.initConfig({
    pkg: pkg,
    cfg: cfg,
    webDir:"../",
    availabletasks: {
      tasks: {
        options: {
          sort: true,
          filter: "include",
          tasks: ["default","install", "cleanup","run:ios","run:android"]
        }
      }
    },
    shell: {
      options: {
        stdout: true,
        stderr: true,
        stdin: true
      },
      install: {
        command: function() {
          return "bower cache clean && bower install";
        }
      },
      installAdditional: {
        command: function() {
          if(cfg.installCommands) {
            return cfg.installCommands.join('&&');
          }
          else {
            return "";
          }
        }
      },
      runios: {
        command: "phonegap run ios --target=\"<%=cfg.phonegapiOSTarget%>\""
      },
      runandroid: {
        command: "phonegap run android --target=\"<%=cfg.phonegapAndroidTarget%>\""
      }
    },
    compass: {
      compile: {
        options: {
          httpPath: "<%=cfg.baseURL%>",
          sassDir: "<%=cfg.sassDir%>",
          cssDir: "<%=cfg.cssDir%>",
          imagesDir: "<%=cfg.imgDir%>",
          fontsDir: "<%=cfg.fontsDir%>",
          httpStylesheetsPath:"<%=cfg.cssDir%>",
          cacheDir: "<%=localDir%>/.sass-cache",
          outputStyle:"compressed",
          relativeAssets:true,
          lineComments:false,
          force: true,
          raw: "preferred_syntax = :sass\n",
          environment: "production",
          require: ["sass-css-importer"]
        }
      }
    },
    watch: {
      js: {
        files: ["<%=cfg.jsDir%>/**/*.js"],
        tasks: ["compile:scripts"]
      },
      sass: {
        files: ["<%=cfg.sassDir%>/**/*.scss"],
        tasks: ["compile:styles"]
      },
      everything: {
        files: ["<%=cfg.sassDir%>/**/*.scss", "<%=cfg.jsDir%>/**/*.js"],
        tasks: ["compile:scripts", "compile:styles"]
      }
    },
    clean: {
      options: { 
        force: true 
      },
      default: {
        src: "<%=cfg.cleanFiles%>"
      }
    },
    copyFiles: {
      main: {
        files: "<%=cfg.copyFiles%>"
      }
    },
    autoprefixer: {
      options: {
       browsers: ["last 2 version"]
     },
     default: {
       files: [{
        expand: true, 
        cwd: "<%=cfg.cssDir%>/",
      src: "{,*/}*.css",
      dest: "<%=cfg.cssDir%>/"
    }]
  }
}
});

  /////////////////////////////////////////////////////////////////////////
  grunt.loadNpmTasks("grunt-available-tasks");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-shell");

  /////////////////////////////////////////////////////////////////////////
  grunt.registerTask("default", "These help instructions",["availabletasks"]);
  grunt.registerTask("cleanup", "Clean project",["clean:default"]);
  grunt.registerTask("install", "Install the project",["shell:install", "shell:installAdditional","copyFiles:main"]);
  grunt.registerTask("run:ios", "Run on iOS simulator",["build", "shell:runios"]);
  grunt.registerTask("run:android", "Run on Android simulator",["build", "shell:runandroid"]);

  /////////////////////////////////////////////////////////////////////////
  grunt.task.registerMultiTask("copyFiles", function() {
    var path = require("path");
    for(file in this.data.files) {
      var filesCopy = grunt.file.expand(file);
      for(fileCopy in filesCopy) {
        var from = filesCopy[fileCopy];
        var to = path.join(this.data.files[file], path.basename(from));
        grunt.log.ok("Copying "+from+" to "+to)
        grunt.file.copy(from, to);
      }
    }
  });
};
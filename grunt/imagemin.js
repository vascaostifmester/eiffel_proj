'use strict';

module.exports = {
  main: {
    options: {
      optimizationLevel: 7,
      pngquant: true,
      progressive: true,
      use: [
        "ice"
      ]
    },
    files: [
      {
        expand: true,
        cwd: "<%= cfg.root %><%= cfg.src.images %>",
        src: [
          "**/*.png",
          "**/*.jpg"
        ],
        dest: "<%= cfg.root %><%= cfg.dest.images %>"
      }
    ]
  }
};
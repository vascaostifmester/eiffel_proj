'use strict';

module.exports = {
    options: {
        map: "true",
        browserlist: ["> 1% PT", "last 4 versions"]
    },
    "<%= cfg.root %><%= cfg.dest.styles %>main.css": "<%= cfg.root %><%= cfg.dest.styles %>main.css"
};

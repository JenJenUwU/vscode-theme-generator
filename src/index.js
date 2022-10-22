"use strict";
exports.__esModule = true;
require("@simonwep/pickr/dist/themes/nano.min.css");
var pickr_1 = require("@simonwep/pickr");
var pickr = pickr_1["default"].create({
    el: '.color-picker',
    theme: 'nano',
    defaultRepresentation: 'HEXA',
    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,
        // Input / output Options
        interaction: {
            hex: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
pickr.on('change', function (color, instance) {
    console.log(color.toHEXA().toString());
});

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',
    defaultRepresentation: 'HEX',

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

//console.log(pickr.getSelectedColor().toHEXA().toString());
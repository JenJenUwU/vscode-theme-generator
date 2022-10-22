import '@simonwep/pickr/dist/themes/nano.min.css';
import Pickr  from '@simonwep/pickr';

const pickr = Pickr.create({
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

pickr.on('change', (color, instance) => {
    console.log(color.toHEXA().toString());
})
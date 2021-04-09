import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: 'a53f5b',
                secondary: 'a53f5b',
                accent: 'f9a000',
                error: '12031d',
            },
        },
    },
});

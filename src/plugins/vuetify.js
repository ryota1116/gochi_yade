import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        yellow: colors.yellow.accent4, //設定金額カラー
        sexyblue: "#00B0FF", // colors.light.blue.accent3
        indigo: "#3949AB"
      },
    },
  },
});

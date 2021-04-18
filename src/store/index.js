import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    style: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    }
  },
  mutations: {
    updateStyle(store, style) {
      Object.assign(store.style, style);
    }
  }
});

export default store;

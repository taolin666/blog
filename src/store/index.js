import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phone: null,
  },
  mutations: {
    setPhone: function (state, mobile) {
      state.phone = mobile
    }
  }
})
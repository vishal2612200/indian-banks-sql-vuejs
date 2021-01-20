import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { favourites } from "./favourites.module";
import { apidata } from "./apidata.module";


Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    apidata,
    favourites,
  },
  plugins: [createPersistedState()],
});

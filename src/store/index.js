import Vue from 'vue';
import Vuex from 'vuex';
//依赖
import state from './state';
import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';
//vuexlogger
import createLogger from 'vuex/dist/logger';
//logger开启模式
const debug = process.env.NODE_ENV !== 'production';

//注册vuex
Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store;

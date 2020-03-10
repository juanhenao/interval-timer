import Vue from 'vue';
import Vuex from 'vuex';
import timers from './modules/timers';
//import createLogger from '../../../src/plugins/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    timers
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
})
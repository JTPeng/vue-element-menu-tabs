import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/store/module/menu'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
  }
})

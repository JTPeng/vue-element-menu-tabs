import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/store/module/menu'
import theme from '@/store/module/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    theme,
  },
})

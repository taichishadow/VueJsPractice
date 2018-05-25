import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList (store, val) {
      store.list.push(val)
    },
    editList (store, val) {
      store.list.splice(store.list.indexOf(val), 1, val)
    },
    deleteList (store, val) {
      store.list.splice(store.list.indexOf(val), 1)
    }
  },
  actions: {
    setList (store, val) {
      store.commit('setList', val)
    },
    editList (store, val) {
      store.commit('editList', val)
    },
    deleteList (store, val) {
      store.commit('deleteList', val)
    }
  },
  getters: {
    getList: state => {
      return state.list
    }
  }
})

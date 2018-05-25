const state = {
  list: []
}

const mutations = {
  setList (store, val) {
    store.list.push(val)
  },
  editList (store, val) {
    store.list.splice(store.list.indexOf(val), 1, val)
  },
  deleteList (store, val) {
    store.list.splice(store.list.indexOf(val), 1)
  }
}

const actions = {
  setList (store, val) {
    store.commit('setList', val)
  },
  editList (store, val) {
    store.commit('editList', val)
  },
  deleteList (store, val) {
    store.commit('deleteList', val)
  }
}

const getters = {
  getList: state => {
    return state.list
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

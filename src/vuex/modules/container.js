const state = {
  list: [],
  jsonList: []
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
  },
  setJsonData(store, val) {
    store.jsonList=val
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
  },
  initJsonData(store){
    fetch('http://colearning.nsysu.edu.tw:8082/v1/items/activity')
      .then(response => response.json())
      .then((response) => {
        store.commit('setJsonData', response.data.items)
      });
  }
}

const getters = {
  getList: state => {
    return state.list
  },
  getJsonData: state => {
    return state.jsonList
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const constants = {
  action: {
    setNewItemToList: 'setNewItemToList',
    removeItemFromList: 'removeItemFromList',
    setItemComplete: 'setItemComplete',
    setShowCompleteItems: 'setShowCompleteItems',
    setShowPendingItems: 'setShowPendingItems'
  },
  mutations: {
    SET_NEW_ITEM_TO_LIST: 'SET_NEW_ITEM_TO_LIST',
    REMOVE_ITEM_FROM_LIST: 'REMOVE_ITEM_FROM_LIST',
    SET_ITEM_COMPLETE: 'SET_ITEM_COMPLETE',
    SET_SHOW_COMPLETE_ITEMS: 'SET_SHOW_COMPLETE_ITEMS',
    SET_SHOW_PENDING_ITEMS: 'SET_SHOW_PENDING_ITEMS'
  }
}
const SET_NEW_ITEM_TO_LIST = 'SET_NEW_ITEM_TO_LIST'
const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST'
const SET_ITEM_COMPLETE = 'SET_ITEM_COMPLETE'
const SET_SHOW_COMPLETE_ITEMS = 'SET_SHOW_COMPLETE_ITEMS'
const SET_SHOW_PENDING_ITEMS = 'SET_SHOW_PENDING_ITEMS'

const state = {
  lists: [],
  copyLists: []
}

const getters = {
  showCopyLists(state) {
    return state.copyLists
  }
}

const actions = {
  setNewItemToList({}, payload) {
    this.commit(SET_NEW_ITEM_TO_LIST, payload)
  },
  setItemComplete({}, passID) {
    this.commit(SET_ITEM_COMPLETE, passID)
  },
  removeItemFromList({}, passID) {
    this.commit(REMOVE_ITEM_FROM_LIST, passID)
  },
  setShowCompleteItems({}) {
    this.commit(SET_SHOW_COMPLETE_ITEMS)
  },
  setShowPendingItems({}) {
    this.commit(SET_SHOW_PENDING_ITEMS)
  }
}

const mutations = {
  [SET_NEW_ITEM_TO_LIST](state, payload) {
    state.lists = state.lists.concat(payload)
  },
  [REMOVE_ITEM_FROM_LIST](state, payload) {
    state.lists = state.lists.filter((value) => {
      if (value.id !== payload) {
        return value
      }
      return null
    })
  },
  [SET_ITEM_COMPLETE](state, payload) {
    state.lists = state.lists.filter((value) => {
      if (value.id === payload) {
        value.complete = !value.complete
      }
      return value
    })
  },
  [SET_SHOW_COMPLETE_ITEMS](state) {
    state.copyLists = state.lists.filter((value) => value.complete ? value : null)
  },
  [SET_SHOW_PENDING_ITEMS](state) {
    state.copyLists = state.lists.filter((value) => !value.complete ? value : null)
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
  }
})

export default store

export {
  constants
}
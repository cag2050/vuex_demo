import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    msg: null
}

// mutations里写函数怎样影响state
const mutations = {
    increment(state) {
        state.count = state.count + 1
        state.msg = '已经加1'
    },
    decrement(state) {
        state.count = state.count - 1
        state.msg = '已经减1'
    }
}

// actions里写有几个函数
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement')
}

const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
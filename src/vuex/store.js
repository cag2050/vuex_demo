/**
 * Created by yixia on 17/3/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
const state = {
    count: 0
}

const mutations = {
    increment(state) {
        state.count = state.count + 1
    },
    decrement(state) {
        state.count = state.count - 1
    }
}

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
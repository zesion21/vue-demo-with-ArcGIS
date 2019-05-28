import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cout: 0
    },
    mutations: {
        add(state) {
            state.cout++;
        }
    },
    actions: {}
});
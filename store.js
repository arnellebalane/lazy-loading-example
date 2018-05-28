import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    photos: []
};

const mutations = {
    setPhotos(state, photos) {
        state.photos = photos;
    }
};

const actions = {
    fetchPhotos() {
        // TODO
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});

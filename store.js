import Vue from 'vue';
import Vuex from 'vuex';
import photos from './api/photos';

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
    fetchPhotos({ commit }) {
        photos.all().then(photos => {
            commit('setPhotos', photos);
        });
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});

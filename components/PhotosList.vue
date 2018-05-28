<template>
    <div class="photos-list">
        <PhotosListItem
            v-for="photo in photos"
            :key="photo.url"
            :data="photo"
        />
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import PhotosListItem from './PhotosListItem.vue';

    export default {
        name: 'PhotosList',

        components: {
            PhotosListItem
        },

        computed: mapState(['photos']),

        created() {
            this.fetchPhotos();
        },

        methods: mapActions(['fetchPhotos'])
    };
</script>

<style scoped>
    .photos-list-item {
        width: 100%;
    }

    .photos-list-item:not(:first-child) {
        margin-top: 50px;
    }

    .photos-list-item:not(:last-child) {
        margin-bottom: 50px;
    }
</style>

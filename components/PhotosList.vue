<template>
    <div class="photos-list">

    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'PhotosList',

        computed: mapState(['photos']),

        created() {
            this.fetchPhotos();
        },

        methods: mapActions(['fetchPhotos'])
    };
</script>

<template>
    <div class="photos-list-item">
        <img :src="data.placeholder" alt="Photo Item" class="placeholder">
    </div>
</template>

<script>
    export default {
        name: 'PhotosListItem',

        props: {
            data: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style scoped>
    .photos-list-item {
        position: relative;
    }

    img {
        display: block;
        width: 100%;
    }
</style>

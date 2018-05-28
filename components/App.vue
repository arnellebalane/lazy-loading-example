<template>
    <div id="app">
        <h1>Lazy Loading Example</h1>
        <PhotosList />
    </div>
</template>

<script>
    import PhotosList from './PhotosList.vue';

    export default {
        name: 'App',

        components: {
            PhotosList
        }
    };
</script>

<style scoped>
    #app {
        padding: 50px;
        text-align: center;
    }

    h1 {
        margin-bottom: 50px;
        font-size: 16px;
        font-weight: 600;
    }

    .photos-list {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
</style>

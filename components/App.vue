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

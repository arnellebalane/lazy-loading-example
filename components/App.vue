<template>
    <div id="app">
        <header>
            <h1>Lazy Loading Example</h1>
            <a href="https://github.com/arnellebalane/lazy-loading-example" rel="noopener noreferrer" target="_blank">github.com/arnellebalane/lazy-loading-example</a>
        </header>

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

    header {
        margin-bottom: 50px;
    }

    h1 {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 600;
    }

    a {
        font-size: 12px;
    }

    .photos-list {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
</style>

<template>
    <div class="photos-list-item">
        <img :src="data.placeholder" alt="Placeholder Photo" class="placeholder">

        <transition name="fade">
            <img v-if="isLoaded" :src="data.url" alt="Actual Photo" class="actual">
        </transition>
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
        },

        data() {
            return {
                isLoaded: false
            };
        },

        mounted() {
            const image = new Image();
            image.src = this.data.url;

            image.onload = () => this.isLoaded = true;
        }
    };
</script>

<style scoped>
    .photos-list-item {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 3px;
        position: relative;
        background-color: #fff;
        box-shadow:
            0 15px 35px rgba(50, 50, 50, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.05);
    }

    img {
        display: block;
        width: 100%;
    }

    img.actual {
        position: absolute;
        top: 8px;
        left: 8px;
        width: calc(100% - 16px);
        max-height: calc(100% - 16px);
    }

    /** Transition classes **/

    .fade-enter-active {
        transition: opacity 1s linear;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-to {
        opacity: 1;
    }
</style>

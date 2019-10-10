<template>
    <div id="app" class="d-flex flex-column">
        <div class="content flex-grow-1">
            <router-view/>
        </div>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import FooterComponent from "@/components/FooterComponent.vue";

    @Component({
        components: {FooterComponent}
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "styles/app";

    html, body, #app {
        height: 100%;
    }

    body {
        background-image: url("assets/backgrounds/geometry.png");
        background-repeat: repeat;
        background-color: #f9fafb;
    }
</style>

<template>
    <div class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <img src="../assets/logo.svg" class="logo" alt=""/>
                    Powered By <a href="http://cometcrate.io" class="text-light font-weight-bold">Comet Crate</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class FooterComponent extends Vue {

    }
</script>

<style scoped lang="scss">
    .footer {
        height: 50px;
        width: fit-content;

        padding-right: 30px;
        box-sizing: content-box;

        border: 2px solid #ccc;
        border-left: none;
        border-bottom: none;
        border-top-right-radius: 50px;

        background-color: #444;
        color: white;
    }

    .logo {
        width: 30px;
        height: 30px;
        margin: 10px;
    }
</style>

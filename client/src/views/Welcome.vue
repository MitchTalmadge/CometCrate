<template>
    <div class="welcome h-100">
        <div class="container h-100 d-flex">
            <div class="row w-100 align-items-center">
                <div class="col">
                    <div class="login-card">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="card-left col-6">
                                    <div class="inner">
                                        <h1>Hackathon Title</h1>
                                        <hr/>
                                        <p>A short description about the hackathon, maybe a call to action, or something
                                            catchy to make people want to sign up.</p>
                                    </div>
                                </div>
                                <div class="card-right col-6">
                                    <h1>Sign In</h1>
                                    <hr/>
                                    <p class="lead text-center">Sign-in is provided by:</p>
                                    <a class="btn-mlh btn btn-block btn-outline-primary"><img
                                            src="../assets/third-party/my-mlh.svg" alt="My MLH Sign In"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Welcome extends Vue {
    }
</script>

<style scoped lang="scss">
    .login-card {
        background-color: white;
        overflow: hidden;

        border-radius: 20px;
        border: none;
        box-shadow: 0 0 15px -6px #666;
    }

    .login-card .card-left {
        padding: 20px;
        background-color: $brand-primary;
        background-image: url("../assets/photos/hackathon.png");
        color: white;
        z-index: 1;
    }

    .login-card .card-left .inner:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        width: 100%;
        height: 100%;

        background-image: url("../assets/photos/hackathon.png");
        background-position: -20px -20px;
        filter: blur(8px);
    }

    .login-card .card-left .inner {
        position: relative;
        overflow: hidden;

        padding: 30px;
        border-radius: 20px;
        background-color: rgba($brand-primary, 0.8);
    }

    .login-card .card-right {
        padding: 50px;
    }

    .login-card .btn-mlh > img {
        height: 30px;
    }
</style>

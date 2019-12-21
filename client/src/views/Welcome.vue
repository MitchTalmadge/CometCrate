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
                                        <div class="row">
                                            <div class="col-3">
                                                <img src="../assets/theme/logo.svg" alt="" />
                                            </div>
                                            <div class="col-9">
                                                <h1>HackTheU</h1>
                                                <p class="lead">Presented by Galileo</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="row pb-5">
                                            <div class="col-6">
                                                <font-awesome-icon icon="map-marker-alt" class="float-left mr-3 h-100"/>
                                                480 Wakara Way, Salt Lake City, UT 84108
                                            </div>
                                            <div class="col-6">
                                                <font-awesome-icon icon="calendar-alt" class="float-left mr-3 h-100"/>
                                                10:00 AM October 5th to 5:00 PM October 6th
                                            </div>
                                        </div>
                                        <p>Come join us for our fourth annual hackathon! The event is completely free,
                                            and $1000s of prizes will be given out!</p>
                                        <img class="sponsor mt-4" src="../assets/theme/sponsor.svg" alt="" />
                                    </div>
                                </div>
                                <div class="card-right d-flex flex-column col-6">
                                    <div class="sign-in-content flex-grow-1">
                                        <h1>Sign In</h1>
                                        <hr/>
                                        <p class="lead">Create an account and/or sign in using MyMLH</p>
                                        <a class="btn-mlh btn btn-block btn-lg btn-outline-primary" href="/api/auth/oauth/mlh/login">
                                            <img src="../assets/third-party/my-mlh.svg" class="mlh-colored" alt="MyMLH Sign In" />
                                            <img src="../assets/third-party/my-mlh-white.svg" class="mlh-white" alt="MyMLH Sign In" />
                                        </a>
                                    </div>
                                    <div class="sign-in-footer row">
                                        <div class="col text-right">
                                            <a href="#">Contact Us</a> | <a href="#">Privacy Policy</a>
                                        </div>
                                    </div>
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
        box-shadow: 0 0 20px -8px black;
    }

    .login-card .card-left {
        z-index: 1;

        padding: 0;
        background-color: $brand-primary;
        color: white;
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

        background-image: url("../assets/photos/hackathon.jpg");
        background-position: -20px -20px;
        filter: blur(9px);
    }

    .login-card .card-left .inner {
        position: relative;
        overflow: hidden;

        padding: 50px;
        background-color: rgba($brand-primary, 0.8);
    }

    .login-card .card-right {
        padding: 50px;
    }

    .login-card .btn-mlh > img {
        height: 30px;
    }

    .login-card .btn-mlh:not(:hover) > .mlh-white {
        display: none;
    }

    .login-card .btn-mlh:hover > .mlh-colored {
        display: none;
    }

    img.sponsor {
        max-height: 200px;
    }
</style>

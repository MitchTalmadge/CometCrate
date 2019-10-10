<template>
    <div id="view-welcome" class="h-100">
        <div class="container h-100 d-flex">
            <div class="row w-100 align-items-center">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                          <h1>Login</h1>
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

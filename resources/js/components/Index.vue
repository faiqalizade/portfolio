<template>
    <div class="main-wrapper">
        <div class="avatar-col">
            <!-- <img src="/images/IMG_3246.jpeg"> -->
        </div>
        <div class="content-col">
            <router-view></router-view>
        </div>
        <VMenu />
    </div>
</template>
<style>
@import '/css/app.css';
</style>
<script>
    import VMenu from "./Menu";
    export default {
        components: {
            VMenu
        }
    }
</script>

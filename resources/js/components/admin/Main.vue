<template>
    <div class="admin">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "/css/adminStyle.css";
</style>
<script>
import Vue from "vue";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);
export default {
    
}
</script>
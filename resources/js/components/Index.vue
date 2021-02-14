<template>
    <div style="height:100%">
        <component :is="currentComponent"></component>
    </div>
</template>
<script>
import FrontendMain from "./Main";
import AdminMain from './admin/Main';
export default {
    data() {
        return {
            currentComponent: "FrontendMain"
        }
    },
    created() {
        this.checkComponent()
    },
    methods: {
        checkComponent(){
            if(this.$route.meta.admin){
                this.currentComponent = "AdminMain"
            }
        }
    },
    components:{
        FrontendMain,
        AdminMain
    }
}
</script>

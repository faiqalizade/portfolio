<template>
    <div style="height:100%" >
            <div class="admin-title">
                Dashboard
            </div>
            <div class="admin-main-content">
                <div class="admin-sidebar">
                    <div class="sidebar-menu-list-wrapper">
                        <div class="sidebar-menu-item">
                            <router-link to="/admin/posts/">
                                <span class="md-list-item-text">Posts</span>
                            </router-link>
                            <router-link to="/admin/portfolio/">
                                    <span class="md-list-item-text">Portfolio</span>
                            </router-link>
                            <router-link to="/admin/site/">
                                    <span class="md-list-item-text">Site</span>
                            </router-link>
                            <router-link to="/admin/resume/">
                                    <span class="md-list-item-text">Resume</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="admin-content">
                    <router-view :key="$route.path" />
                </div>
            </div>
    </div>
</template>
<style scoped>
    
</style>
<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
    created() {
        this.authCheck();
    },
    methods: {
        authCheck: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'get',
                        url: '/api/login/check',
                        transformResponse: [(data) => {
                            var response = JSON.parse(data);
                            if(!response){
                                Cookies.remove("vuser");
                                this.$router.push("/login/");
                            }
                        }]
                    };
                    axios(options);
                }
            }else{
                this.$router.push("/login/");
            }
        }
    },
}
</script>
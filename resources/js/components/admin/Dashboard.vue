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
export default {
    
}
</script>
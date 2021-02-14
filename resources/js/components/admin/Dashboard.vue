<template>
    <div style="height:100%" >
        <md-app style="height:100%" >
            <md-app-toolbar class="md-primary">
                <span class="md-title">Dashboard</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="clipped">
                <md-list>
                <router-link to="/admin/posts/">
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Posts</span>
                    </md-list-item>
                </router-link>

                <router-link to="/admin/portfolio/">
                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Portfolio</span>
                    </md-list-item>
                </router-link>

                <!--<md-list-item>
                    <md-icon>delete</md-icon>
                    <span class="md-list-item-text">Trash</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
                </md-list-item>-->
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <router-view :key="$route.path" />
            </md-app-content>
        </md-app>
    </div>
</template>
<script>
export default {
    
}
</script>
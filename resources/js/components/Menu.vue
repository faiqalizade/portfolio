<template>
    <div class="main-menu">
        <router-link to="/" class="menu-item">
            <span><i class="fas fa-home"></i></span>
            <span>HOME</span>
        </router-link>
        <router-link to="/about/" class="menu-item">
            <span><i class="fas fa-user-alt"></i></span>
            <span>ABOUT</span>
        </router-link>
        <router-link to="/resume/" class="menu-item">
            <span><i class="fas fa-file"></i></span>
            <span>RESUME</span>
        </router-link>
        <router-link to="/portfolio/" class="menu-item">
            <span><i class="fas fa-briefcase"></i></span>
            <span>PORTFOLIO</span>
        </router-link>
        <router-link to="/blog/" class="menu-item">
            <span><i class="fas fa-file-alt"></i></span>
            <span>BLOG</span>
        </router-link>
        <router-link to="/contacts/" class="menu-item">
            <span><i class="fas fa-address-book"></i></span>
            <span>CONTACT</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>
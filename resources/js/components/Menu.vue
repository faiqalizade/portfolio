<template>
    <div class="main-menu">
        <router-link to="/" class="menu-item">
            <span><i class="fas fa-home"></i></span>
            <span>ГЛАВНАЯ</span>
        </router-link>
        <router-link to="/about/" class="menu-item">
            <span><i class="fas fa-user-alt"></i></span>
            <span>ОБО МНЕ</span>
        </router-link>
        <router-link to="/resume/" class="menu-item">
            <span><i class="fas fa-file"></i></span>
            <span>РЕЗЮМЕ</span>
        </router-link>
        <router-link to="/portfolio/" class="menu-item">
            <span><i class="fas fa-briefcase"></i></span>
            <span>ПОРТФОЛИО</span>
        </router-link>
        <router-link to="/blog/" class="menu-item">
            <span><i class="fas fa-file-alt"></i></span>
            <span>БЛОГ</span>
        </router-link>
        <router-link to="/contacts/" class="menu-item">
            <span><i class="fas fa-address-book"></i></span>
            <span>КОНТАКТЫ</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>
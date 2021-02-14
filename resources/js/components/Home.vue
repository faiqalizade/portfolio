<template>
    <div class="home" >
        <h1>
            <span class="name">Faig</span>
            <span class="surname" >Alizade</span>
        </h1>
        <div class="about-text">
            <span>I'm a</span>
            <span>FULL-STACK WEB DEVELOPER</span>
        </div>
        <div class="btn-wrapper">
            <VButton text="Download CV" > </VButton>
        </div>
    </div>
</template>
<script>
import VButton from "./Button";
export default {
    components:{
        VButton
    }
}
</script>
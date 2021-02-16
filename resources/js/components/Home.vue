<template>
    <div class="home" >
        <h1>
            <span class="name">Faig</span>
            <span class="surname" >Alizade</span>
        </h1>
        <div class="about-text">
            <span>Я</span>
            <span>FULL-STACK ВЕБ-РАЗРАБОТЧИК</span>
        </div>
        <div class="btn-wrapper">
            <VButton cv="files/CV.pdf" text="Скачать CV" > </VButton>
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
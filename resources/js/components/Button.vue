<template>
    <div v-if="!cv" class="button" v-html="text">

    </div>
    <a download="" target="_blank" :href="cv" v-else class="button" v-html="text">
    </a>
</template>
<style scoped lang="scss">
    .button{
        text-align: center;
        display: flex;
        background-color: #4169e1;
        text-decoration: none;
        color: #fff;
        padding: .8rem 1rem;
        font-size: 1.2rem;
        border-radius: 3px;
        cursor: pointer;
        justify-content: center;
        border: 2px solid #4169e1;
        transition: all .5s;
        &:hover{
            background-color: #fff;
            color: #000;
        }
    }
</style>
<script>
export default {
    props:{
        color: String,
        text: String,
        cv: false
    }
}
</script>
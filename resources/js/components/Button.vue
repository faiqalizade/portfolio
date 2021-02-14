<template>
    <div class="button">
        {{text}}
    </div>
</template>
<style scoped lang="scss">
    .button{
        text-align: center;
        display: flex;
        background-color: #4169e1;
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
        text: String
    }
}
</script>
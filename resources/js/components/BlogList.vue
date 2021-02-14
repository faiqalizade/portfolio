<template>
    <div class="page" >
        <h1>Blog</h1>
        <div class="blog-list-wrapper">
            <div class="blog-item">
                <img src="https://marketifythemes.com/html/shane/img/news/1.jpg">
                <div class="item-date">
                    14.02.2021
                </div>
                <div class="item-title">
                    Lorem ipsum dolor sit.
                </div>
                <div>
                    Read more
                </div>
            </div>
            <div class="blog-item">
                <img src="https://marketifythemes.com/html/shane/img/news/1.jpg">
                <div class="item-date">
                    14.02.2021
                </div>
                <div class="item-title">
                    Lorem ipsum dolor sit.
                </div>
                <div>
                    Read more
                </div>
            </div>
            <div class="blog-item">
                <img src="https://marketifythemes.com/html/shane/img/news/1.jpg">
                <div class="item-date">
                    14.02.2021
                </div>
                <div class="item-title">
                    Lorem ipsum dolor sit.
                </div>
                <div>
                    Read more
                </div>
            </div>
            <div class="blog-item">
                <img src="https://marketifythemes.com/html/shane/img/news/1.jpg">
                <div class="item-date">
                    14.02.2021
                </div>
                <div class="item-title">
                    Lorem ipsum dolor sit.
                </div>
                <div>
                    Read more
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts: function(){
            console.log('asd');
            // axios.get("/api/blog").then(res=>{
            //     console.log(res.data);
            // })
        }
    },
}
</script>
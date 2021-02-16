<template>
    <div class="page">
        <h1>Portfolio</h1>
        <div class="portfolio-list-wrapper">
            <div class="portfolio-item" style="background-image:url('');" v-for="(portfolio,key) in PortfolioItems" :key="key" v-on:click="openModal(portfolio.body)" >
                {{portfolio.title}}
            </div>
        </div>
        <div v-show="showModal" class="modal-wrapper">
            <div class="modal-content-wrapper">
                <div v-on:click="showModal = !showModal" class="close-button"><i class="fas fa-times"></i></div>
                <div class="modal-content" v-html="currentBody"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.modal-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 9;
    padding: 0 10%;
}
.modal-content-wrapper{
    display: none;
    background-color: #fff;
    padding: 3rem;
    width: calc(100% - 6rem);
    max-height: calc(100% - 6rem);
    min-height: calc(100% - 6rem);
    position: relative;
}
.close-button{
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}
.modal-content{
    min-height: 100%;
    width: 100%;
    overflow-y: scroll;
}
.portfolio-item{
    cursor: pointer;
}
</style>
<script>
import axios from "axios";
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            PortfolioItems: Array,
            currentBody: String,
            showModal: false,
        }
    },
    created() {
        this.loadPortfolio();
    },
    methods: {
        loadPortfolio: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'get',
                        url: '/api/portfolio',
                        // data: {
                        //     title: this.name,
                        //     body: this.body
                        // },
                        transformResponse: [(data) => {
                            this.PortfolioItems = JSON.parse(data);                            
                        }]
                    };
                    axios(options);
                }
            }
        },
        openModal: function(body){
            this.currentBody = body;
            this.showModal = true;
            document.querySelector(".modal-content-wrapper").style.display = 'flex';
            // console.log(body);
        }
    },
}
</script>
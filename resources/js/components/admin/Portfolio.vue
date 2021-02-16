<template>
    <div>
        <h1>Portfolio</h1>
        <router-link to="create">create</router-link>
        <div class="admin-portfolio-wrapper">
            <div class="admin-portfolio-item" v-for="(portfolio,index) in PortfolioItems" :key="index">
                <div class="admin-portfolio-title">
                    <router-link :to="'update/'+portfolio.id" >{{portfolio.title}}</router-link>
                    <div v-on:click="deletePortfolio(portfolio.id,index)" ><i class="fas fa-trash"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.admin-portfolio-title{
    display: flex;

}
.admin-portfolio-title a:first-child{
    margin-right: 1rem;
}
</style>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            PortfolioItems: Array
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
                        url: '/api/portfolio/',
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
        deletePortfolio: function(id,index){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'DELETE',
                        url: '/api/portfolio/'+id,
                        // data: {
                        //     title: this.name,
                        //     body: this.body
                        // },
                        transformResponse: [(data) => {
                            if(data == 1){
                                this.PortfolioItems.splice(index,1);
                            }
                        }]
                    };
                    axios(options);
                }
            }
        }
    },
}
</script>
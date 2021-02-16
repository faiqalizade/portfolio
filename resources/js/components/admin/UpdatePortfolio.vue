<template>
    <div>
        <form >
            <div class="form-field">
                <div class="form-label">
                    Title
                </div>
                <input type="text" name="title" v-model="name" class="form-input">
            </div>
            <div class="form-field">
                <div class="form-label">
                    Body
                </div>
                <textarea v-model="body" name="body">

                </textarea>
            </div>
            <div v-on:click="sendPortfolio" class="send-button">
                Send
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            name: '',
            body: ""
        }
    },
    created() {
        this.loadPortfolio()
    },
    methods: {
        loadPortfolio: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'get',
                        url: '/api/portfolio/'+this.$route.params.id,
                        // data: {
                        //     title: this.name,
                        //     body: this.body
                        // },
                        transformResponse: [(data) => {
                            this.name = JSON.parse(data).title;
                            this.body = JSON.parse(data).body;
                            // console.log(data);                  
                        }]
                    };
                    axios(options);
                }
            }
        },
        sendPortfolio: function(){
            if (this.name && this.body) {
                if (Cookies.get("vuser")) {
                    if (JSON.parse(Cookies.get("vuser")).token) {
                        axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                        const options = {
                            method: 'PUT',
                            url: '/api/portfolio/'+this.$route.params.id,
                            data: {
                                title: this.name,
                                body: this.body,
                                id: this.$route.params.id
                            },
                            transformResponse: [(data) => {
                                console.log(data);               
                            }]
                        };
                        axios(options);
                    }
                }
            }
        }
    }
}
</script>
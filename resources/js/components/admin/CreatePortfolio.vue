<template>
    <div>
        <h1>Create Portfolio</h1>
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
<style scoped>

</style>
<script>
import Cookies from "js-cookie";
import axios from 'axios';
import VButton from "../Button";

export default {
    data() {
        return {
            name: '',
            body: ''
        }
    },
    components:{
        VButton
    },
    methods: {
        sendPortfolio: function(){

            if (Cookies.get("vuser") && this.name && this.body) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'post',
                        url: '/api/portfolio/',
                        data: {
                            title: this.name,
                            body: this.body
                        },
                        transformResponse: [(data) => {
                            // console.log(data);  
                            this.name = '';
                            this.body = "";                    
                        }]
                    };
                    axios(options);
                }
            }
        }
    },
}
</script>
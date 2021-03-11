<template>
    <div class="login-page" >
        <form >
            <div>
                <label>Login</label>
                <input name="username" v-model="username" type="text" >
            </div>
            <div>
                <label>Password</label>
                <input name="password" v-model="password" type="password">
            </div>
            <div v-on:click="sendForm" style="width:100%; margin:0" class="md-raised md-primary">Login</div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from "js-cookie";
export default {
    data: () => ({
        username: null,
        type: null,
        withLabel: null,
        inline: null,
        number: null,
        textarea: null,
        autogrow: null,
        disabled: null,
        password: null
    }),
    created() {
        this.checkUser();
    },
    methods: {
        sendForm: function () {
            axios.defaults.headers.common.Authorization = "";
            const options = {
                method: 'post',
                url: '/api/login',
                data: {
                    username: this.username,
                    password: this.password
                },
                transformResponse: [(data) => {
                    var responseJson = JSON.parse(data);
                    Cookies.set("vuser",JSON.stringify({user: responseJson.user,token:responseJson.token}));
                    if(responseJson.success){
                        // console.log(responseJson.token);
                        axios.defaults.headers.common.Authorization = `Bearer ${responseJson.token}`
                        // console.log(axios.defaults.headers.common.Authorization);
                        this.$router.push("/admin/");
                    }
                    return data;
                }]
            };
            axios(options);
        },
        checkUser: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'get',
                        url: '/api/login/check',
                        transformResponse: [(data) => {
                            var response = JSON.parse(data);
                            if(response){
                                this.$router.push("/admin/");
                            }else{
                                Cookies.remove("vuser");
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
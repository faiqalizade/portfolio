<template>
    <div class="login-page" >
        <form >
            <md-field>
                <label>Login</label>
                <md-input v-model="initial"></md-input>
            </md-field>
            <md-field>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
            </md-field>
            <md-button v-on:click="senForm" style="width:100%; margin:0" class="md-raised md-primary">Login</md-button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => ({
      initial: null,
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null,
      password: null
    }),
    methods: {
        senForm: function(){
            axios.post("/api/check").then(res => {
                if(res.data.success){
                     this.$router.push('/admin/');
                }
            })
        }
    },
}
</script>
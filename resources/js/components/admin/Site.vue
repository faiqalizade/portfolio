<template>
    <div>
        <form>
            <div class="field-content">
                <div class="input-label">Email</div>
                <input v-model="Site.email" type="email" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">Phone</div>
                <input v-model="Site.phone" type="text" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">website</div>
                <input v-model="Site.website" type="text" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">About Page</div>
                <textarea v-model="Site.about" ></textarea>
            </div>
            <div class="field-content">
                <div class="input-label">Image</div>
                <input type="file" class="input">
            </div>
            <div> Send  </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            Site:{
                image: '',
                email: "",
                phone: "",
                website: "",
                about: ""
            }
        }
    },
    created() {
        this.loadSite();
    },
    methods: {
        loadSite: function(){
            axios({
                method: 'get',
                url: '/api/site/',
                transformResponse: [(data) => {
                    var response = JSON.parse(data);
                    this.Site = response
                    // console.log(response);
                    // console.log(data);
                }]
            })
        }
    },
}
</script>
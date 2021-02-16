<template>
    <div>
        <h1>Work Experience</h1>
        <form >
            <input type="hidden" v-model="WorkExperience.id">
            <div class="field-content">
                <div class="input-label">DATE</div>
                <input v-model="WorkExperience.date" type="text" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">Title</div>
                <input v-model="WorkExperience.title" type="text" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">Company</div>
                <input v-model="WorkExperience.company" type="text" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">Desc</div>
                <textarea v-model="WorkExperience.description"></textarea>
            </div>
        </form>
        <div class="btn">Send Work</div>

        <div class="work-wxperience-wrapper">
            <div class="work-experience-item">

            </div>
        </div>

        <h1>Skills</h1>
        <form >
            <input type="hidden" v-model="Skill.id">
            <div class="field-content">
                <div class="input-label">Label</div>
                <input v-model="Skill.label" type="text" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">Level</div>
                <input v-model="Skill.level" min="0" max="100" type="number" class="input">
            </div>
            <div class="field-content">
                <div class="input-label">Is Language</div>
                <input type="checkbox" v-model="Skill.isLang">
            </div>
        </form>
        <div v-on:click="sendSkill" class="btn">Send Skill</div>

    </div>
</template>
<script>
import axios from 'axios';
import Cookies from "js-cookie";
export default {
    data() {
        return {
            Skill:{
                id: null,
                label: "",
                level: 0,
                isLang: false
            },
            WorkExperience:{
                id: null,
                date: "",
                title: '',
                company: "",
                description: ""
            }
        }
    },
    methods: {
        sendSkill: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'post',
                        url: '/api/resume/',
                        data: {
                            title: this.Skill.label,
                            level: this.Skill.level,
                        },
                        transformResponse: [(data) => {
                            console.log(data);               
                        }]
                    };
                    axios(options);
                }
            }
        }
    },
}
</script>
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
        <div v-on:click="sendWork"  class="btn">Send Work</div>
        <div v-if="WorkExperience.id" v-on:click="clearWork"  class="btn">Cancel</div>

        <div v-if="Works" class="work-experience-wrapper">
            <div v-for="(work,index) in Works" v-bind:key="index" class="work-experience-item">
                <div class="work-date">{{work.date}}</div>
                <div class="work-title">{{work.title}}</div>
                <div class="work-company">{{work.company}}</div>
                <div class="work-desc">{{work.description}}</div>
                <div class="work-actions">
                    <div v-on:click="editWork(work.id,index)" ><i class="fas fa-pencil-alt"></i></div>
                    <div v-on:click="deleteWork(work.id,index)" ><i class="fas fa-trash"></i></div>
                </div>
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
        <div v-if="Skill.id" v-on:click="clearSkill"  class="btn">Cancel</div>

        <div class="skill-wrapper">
            <h3>Key Skills</h3>
            <div v-for="(skill,skillIndex) in Skills[0]" v-bind:key="'skill' + skillIndex" class="skill-item">
                <div class="skill-title">{{skill.title}}</div>
                <div class="skill-level">{{skill.level}}</div>
                <div class="skill-lang">{{skill.lang}}</div>
                <div class="work-actions">
                    <div v-on:click="editSkill(skill.id,skillIndex,0)" ><i class="fas fa-pencil-alt"></i></div>
                    <div v-on:click="deleteSkill(skill.id,skillIndex,0)" ><i class="fas fa-trash"></i></div>
                </div>
            </div>
            <h3>Language</h3>
            <div v-for="(lang,langIndex) in Skills[1]" v-bind:key="'lang' + langIndex" class="skill-item">
                <div class="skill-title">{{lang.title}}</div>
                <div class="skill-level">{{lang.level}}</div>
                <div class="skill-lang">{{lang.lang}}</div>
                <div class="work-actions">
                    <div v-on:click="editSkill(lang.id,langIndex,1)" ><i class="fas fa-pencil-alt"></i></div>
                    <div v-on:click="deleteSkill(lang.id,langIndex,1)" ><i class="fas fa-trash"></i></div>
                </div>
            </div>
        </div>
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
            },
            Works: Array,
            Skills: Array
        }
    },
    created() {
        this.loadList();
    },
    methods: {
        sendSkill: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    if(!this.Skill.id){
                        var options = {
                            method: 'post',
                            url: '/api/resume',
                            data: {
                                title: this.Skill.label,
                                level: this.Skill.level,
                                lang: this.Skill.isLang
                            },
                            transformResponse: [(data) => {
                                this.Skill.label = '';
                                this.Skill.level = 0
                                this.Skill.isLang = false;  
                            }]
                        };
                    }else{
                        var options = {
                            method: 'PUT',
                            url: '/api/resume/'+this.Skill.id,
                            data: {
                                title: this.Skill.label,
                                level: this.Skill.level,
                                lang: this.Skill.isLang
                            },
                            transformResponse: [(data) => {
                                this.Skill.label = '';
                                this.Skill.level = 0
                                this.Skill.isLang = false;  
                            }]
                        };
                    }
                    axios(options);
                }
            }
        },

        sendWork: function(){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    if (this.WorkExperience.id == null) {
                        var options = {
                            method: 'post',
                            url: '/api/work',
                            data: {
                                date: this.WorkExperience.date,
                                title: this.WorkExperience.title,
                                company: this.WorkExperience.company,
                                description: this.WorkExperience.description,
                            },
                            transformResponse: [(data) => {
                                console.log(data);
                            }]
                        };
                        // axios(options);
                    }else{
                        var options = {
                            method: 'put',
                            url: '/api/work/'+this.WorkExperience.id,
                            data: {
                                date: this.WorkExperience.date,
                                title: this.WorkExperience.title,
                                company: this.WorkExperience.company,
                                description: this.WorkExperience.description,
                            },
                            transformResponse: [(data) => {
                                console.log(data);
                            }]
                        };
                    }
                    axios(options);
                }
            }
        },
        loadList: function(){
            const options = {
                method: 'get',
                url: '/api/work',
                transformResponse: [(data) => {
                    var response = JSON.parse(data);
                    if (response) {
                        this.Works = response;
                    }
                }]
            };
            axios(options);

            const options2 = {
                method: 'get',
                url: '/api/resume',
                transformResponse: [(data) => {
                    this.Skills = JSON.parse(data);
                }]
            };
            axios(options2);
        },
        editWork: function(id,index){
            this.WorkExperience.id = id;
            this.WorkExperience.date = this.Works[index].date;
            this.WorkExperience.title = this.Works[index].title;
            this.WorkExperience.company = this.Works[index].company;
            this.WorkExperience.description = this.Works[index].description;
        },
        editSkill: function(id,index,lang){
            this.Skill.id = id;
            this.Skill.label = this.Skills[lang][index].title;
            this.Skill.level = this.Skills[lang][index].level;
            this.Skill.isLang = this.Skills[lang][index].lang;
        },
        clearSkill: function(){
            this.Skill.id = null;
            this.Skill.label = "";
            this.Skill.level = 0;
            this.Skill.isLang = false;
        },
        clearWork: function(){
            this.WorkExperience.id = null;
            this.WorkExperience.date = '';
            this.WorkExperience.title = '';
            this.WorkExperience.company = '';
            this.WorkExperience.description = '';
        },
        deleteWork: function(id,index){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'DELETE',
                        url: '/api/work/'+id,
                        transformResponse: [(data) => {
                            this.Works.splice(index,1);
                        }]
                    };
                    axios(options);
                }
            }
        },
        deleteSkill: function(id,index){
            if (Cookies.get("vuser")) {
                if (JSON.parse(Cookies.get("vuser")).token) {
                    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(Cookies.get("vuser")).token}`;
                    const options = {
                        method: 'DELETE',
                        url: '/api/resume/'+id,
                        transformResponse: [(data) => {
                            this.Skills.splice(index,1);
                        }]
                    };
                    axios(options);
                }
            }
        }
    },
}
</script>
<style scoped >
.work-experience-wrapper,
.skill-wrapper{
    margin: 1rem 0;
}
.work-experience-item,
.skill-item{
    display: flex;
    justify-content: space-between;
}
.work-actions,
.skill-actions{
    display: flex;
}
.work-actions  div,
.skill-actions div{
    margin: 0 .5rem;
}
</style>
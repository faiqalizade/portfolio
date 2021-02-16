<template>
    <div class="page">
        <h1>Faig<span class="bluetext">'s Resume</span></h1>
        <section class="work-experience">
            <div class="section-header-wrapper">
                <div class="section-header">
                    Места работы
                </div>
            </div>
                <div class="work-experience-wrapper">
                    <div class="work-experience-item" v-for="(work,index) in Works" :key="index" >
                        <div class="work-experience-date">
                            {{work.date}}
                        </div>
                        <div class="work-experience-title">
                            <div class="work-experience-job-title">
                                {{work.title}}
                            </div>
                            <div class="work-experience-company-name">
                                {{work.company}}
                            </div>
                        </div>
                        <div class="work-experience-desc">
                            {{work.description}}
                        </div>
                    </div>
                </div>
        </section>
        <div style="display:flex" >
            <div style="float:left" >
                <VButton cv="files/CV.pdf" text="Скачать CV" > </VButton>
            </div>
        </div>
        <section class="skills">
            <div class="section-header-wrapper">
                <div class="section-header">
                    Навыки
                </div>
            </div>
            <div class="skill-item" v-for="(skillitem , index) in skillsArr" :key="index">
                <div class="skill-title" >
                    {{skillitem.title}}
                    <div class="skill-percent">
                        {{skillitem.level}}
                    </div>
                </div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar" :style="{width: skillitem.level + '%'}" ></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="skills">
            <div class="section-header-wrapper">
                <div class="section-header">
                    Языки
                </div>
            </div>
            <div class="skill-item" v-for="(language , index) in languages" :key="index">
                <div class="skill-title" >
                    {{language.title}}
                    <div class="skill-percent">
                        {{language.level}}%
                    </div>
                </div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar" :style="{width: language.level + '%'}" ></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
.section-header-wrapper{
    margin-bottom: 1.5rem;
}
</style>
<script>
import VButton from './Button';
import axios from 'axios';
export default {
    data: () => ({
        skillsArr:Array,
        languages:Array,
        Works: Array
    }),
    created() {
        this.loadList();
    },
    methods: {
        loadList: function(){
            const options = {
                method: 'get',
                url: '/api/work',
                transformResponse: [(data) => {
                    this.Works = JSON.parse(data);
                }]
            };
            axios(options);

            const options2 = {
                method: 'get',
                url: '/api/resume',
                transformResponse: [(data) => {
                    this.skillsArr = JSON.parse(data)[1];
                    this.languages = JSON.parse(data)[0];
                }]
            };
            axios(options2);
        }
    },
    components:{
        VButton
    }
}
</script>


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
                    <div class="work-experience-item">
                        <div class="work-experience-date">
                            05.2020 - now
                        </div>
                        <div class="work-experience-title">
                            <div class="work-experience-job-title">
                                Web developer
                            </div>
                            <div class="work-experience-company-name">
                                AdvertPro
                            </div>
                        </div>
                        <div class="work-experience-desc">
                            Разработка, поддержка веб приложений основанных на CMS или фреймворках. Wordpress, Bitrix, AdverptroCMS, Joomla, Yii2.
                        </div>
                    </div>
                    <div class="work-experience-item">
                        <div class="work-experience-date">
                            06.2018 - 09.2018
                        </div>
                        <div class="work-experience-title">
                            <div class="work-experience-job-title">
                                Junior Web developer
                            </div>
                            <div class="work-experience-company-name">
                                Cetera
                            </div>
                        </div>
                        <div class="work-experience-desc">
                            Разработка и поддержка веб сайтов на Wordpress, Bitrix, CeteraCMS.
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
                        <div class="skill-bar" :style="{width: skillitem.level}" ></div>
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
                        {{language.level}}
                    </div>
                </div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar" :style="{width: language.level}" ></div>
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
import VButton from './Button'
export default {
    data: () => ({
        skillsArr:[
            {
                title: "Laravel",
                level: "30%"
            },
            {
                title: "PHP",
                level: "75%"
            },
            {
                title: "OOP",
                level: "75%"
            },
            {
                title: "HTML",
                level: "90%"
            },
            {
                title: "CSS",
                level: "90%"
            },
            {
                title: "JS",
                level: "80%"
            },
            {
                title: "Wordpress CMS",
                level: "60%"
            },
            {
                title: "Linux",
                level: "40%"
            },
            {
                title: "REST API",
                level: "70%"
            },
            {
                title: "Node.JS",
                level: "20%"
            },
            {
                title: "Git",
                level: "40%"
            },
            {
                title: "SQL",
                level: "70%"
            },
            {
                title: "1С BITRIX",
                level: "50%"
            },
            {
                title: "Vue.js",
                level: "60%"
            },
            {
                title: "Figma",
                level: "80%"
            },
            {
                title: "MySQL",
                level: "80%"
            },
            {
                title: "Firebase",
                level: "20%"
            },
            {
                title: "Yii2",
                level: "40%"
            },
            {
                title: "jQuery",
                level: "80%"
            },
            {
                title: "Photoshop",
                level: "50%"
            },
            {
                title: "Bootstrap",
                level: "80%"
            },
        ],
        languages:[
            {
                title: "Russian",
                level: "95%"
            },
            {
                title: "Azerbaijani",
                level: "100%"
            },
            {
                title: "Turkish",
                level: "90%"
            },
            {
                title: "English",
                level: "40%"
            }
        ]
    }),
    components:{
        VButton
    }
}
</script>
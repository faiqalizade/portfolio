<template>
    <div class="about page">
        <h1>Обо <span class="bluetext" >мне</span></h1>
        <div class="about-me-content-wrapper">
            <div class="about-me-desc">
                <h3>Я Фаиг и <span class="bluetext">я веб-разработчик</span></h3>
                <div class="about-me-content">
                    Привет меня зовут Ализаде Фаиг и я Full-stack веб разработчик. С моим более {{experience}} летним опытом в этой сфере.
                    У меня есть достаточно опыта чтобы создать сайт, веб-приложение с нуля под ключ. С этим опытом мне приходилось увидеть разные дизайны сайтов.
                    И я могу сделать современный дизайн сайта. Свяжитесь со мной чтобы обсудить все.
                    Я родом из Азербайджана и работаю только удаленно.
                </div>
            </div>
            <div class="about-me-personal-info">
                <div class="about-me-personal-info-labels">
                    <div class="bluetext">Birthday:</div>
                    <div class="bluetext">Age:</div>
                    <div class="bluetext">Email:</div>
                    <div class="bluetext">Phone:</div>
                    <div class="bluetext">Website:</div>
                </div>
                <div class="about-me-personal-info-contents">
                    <div>09.12.2000</div>
                    <div>{{ age }}</div>
                    <div>{{email}}</div>
                    <div>{{phone}}</div>
                    <div>{{website}}</div>
                </div>
            </div>
        </div>
        <section class="about-me-section">
            <!--<div class="section-header-wrapper">
                <div class="section-header">
                    Что я умею
                </div>
            </div> -->
            <div class="section-content-from-db" v-html="aboutHtml" >

            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data: () =>({
        age: 20,
        experience: 3,
        aboutHtml: '',
        email: "",
        phone: "",
        website: "",
    }),
    mounted() {
        this.getAge();
        this.getAbout();
    },
    methods:{
        getAge: function(){
            var date = new Date();
            var currentAge = date.getFullYear() - 2001;
            this.age = currentAge;
            this.experience = date.getFullYear() - 2018;
        },
        getAbout: function(){
            axios({
                method: 'get',
                url: '/api/site/',
                transformResponse: [(data) => {
                    var response = JSON.parse(data);
                    this.aboutHtml = response.about;
                    this.email = response.email;
                    this.phone = response.phone;
                    this.website = response.website;
                    // console.log(data);
                }]
            })
        }
    }
}
</script>
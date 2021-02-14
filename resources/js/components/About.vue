<template>
    <div class="about page">
        <h1>About <span class="bluetext" >me</span></h1>
        <div class="about-me-content-wrapper">
            <div class="about-me-desc">
                <h3>I'm Faig and <span class="bluetext">web developer</span></h3>
                <div class="about-me-content">
                    Hi! My name is Martin Peterson. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration from discussion and collaboration.
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
                    <div>faiq.alizade.00@mail.ru</div>
                    <div>+994 51 368 88 89</div>
                    <div>https://faigalizade.com</div>
                </div>
            </div>
        </div>
        <section class="about-me-section">
            <div class="section-header-wrapper">
                <div class="section-header">
                    What I do
                </div>
            </div>
        </section>

    </div>
</template>
<script>
export default {
    data: () =>({
        age: 20
    }),
    mounted() {
        this.getAge();
    },
    methods:{
        getAge: function(){
            var date = new Date();
            var currentAge = date.getFullYear() - 2001;
            this.age = currentAge;
        }
    }
}
</script>
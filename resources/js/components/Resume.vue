<template>
    <div class="page">
        <h1>Faig<span class="bluetext">'s Resume</span></h1>
        <section class="work-experience">
            <div class="section-header-wrapper">
                <div class="section-header">
                    Work experience
                </div>
            </div>
                <div class="work-experience-wrapper">
                    <div class="work-experience-item">
                        <div class="work-experience-date">
                            2014 - 2016
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at veniam non excepturi, voluptates delectus.
                        </div>
                    </div>
                    <div class="work-experience-item">
                        <div class="work-experience-date">
                            2014 - 2016
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at veniam non excepturi, voluptates delectus.
                        </div>
                    </div>
                </div>
        </section>
        <div style="display:flex" >
            <div style="float:left" >
                <VButton text="Download CV" />
            </div>
        </div>
        <section class="skills">
            <div class="section-header-wrapper">
                <div class="section-header">
                    Skills
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-title">
                    Laravel
                    <div class="skill-percent">
                        {{bar}}
                    </div>
                </div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar" :style="{width: bar}" ></div>
                    </div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-title">
                    Laravel
                    <div class="skill-percent">
                        {{bar}}
                    </div>
                </div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar" :style="{width: bar}" ></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import VButton from './Button'
export default {
    data: () => ({
        bar: "10%"
    }),
    components:{
        VButton
    }
}
</script>
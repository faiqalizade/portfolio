<template>
    <div class="contacts">
        <h1>Свяжитесь</h1>
        <div class="contacts-wrapper">
            <div class="contact-info">
                <div class="contact-info-item contact-info-item_phone">
                    <div class="contact-info-item-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <a href="tel:+994513688889">+994 (51) 368-88-89</a>
                </div>
                <div class="contact-info-item contact-info-item_mail">
                    <div class="contact-info-item-icon">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=994513688889">+994 (51) 368-88-89</a>
                </div>
                <div class="contact-info-item contact-info-item_mail">
                    <div class="contact-info-item-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <a href="mailto:faiq.alizade.00@mail.ru">faiq.alizade.00@mail.ru</a>
                </div>
                <div class="contact-info-item contact-info-item_mail">
                    <div class="contact-info-item-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <a target="_blank" href="https://github.com/faiqalizade">Github/faiqalizade</a>
                </div>
            </div>
            <form class="contact-form" >
                <input v-model="name" type="text" placeholder="Name">
                <input v-model="email" type="email" placeholder="Email">
                <textarea v-model="message" name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                <VButton v-on:click.native="sendMessage" :text="buttonText" />
            </form>
        </div>
    </div>
</template>
<style>

</style>
<script>
import VButton from './Button';
import axios from "axios";
export default {
    components:{
        VButton
    },
    data() {
        return {
            name: null,
            email: null,
            message: null,
            buttonText: "Send"
        }
    },
    methods: {
        sendMessage: function(){
            this.buttonText = 'Sending....';
            // console.log('asd');
            if (this.name && this.email && this.message) {
                axios({
                    method: "post",
                    url: "/api/sendMail/",
                    data: {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    },
                    transformResponse: [(data) => {
                        setTimeout(() => {
                            this.buttonText = 'Sent';
                            setTimeout(() => {
                                this.buttonText = 'Send';
                                this.name = "";
                                this.email = "";
                                this.message = "";
                            }, 1000);
                        }, 1000);
                    }]
                });
            }
        }
    },
}
</script>
<template>
    <div class="contacts">
        <h1>Get in Touch</h1>
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
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <textarea name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                <VButton text="Send Message" />
            </form>
        </div>
    </div>
</template>
<script>
import VButton from './Button'
export default {
    components:{
        VButton
    }
}
</script>
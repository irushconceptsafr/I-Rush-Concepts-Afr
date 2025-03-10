<script setup>
import MapView from '@/components/MapView.vue'; // Import the Map component
</script>

<template>
    <div class="contact">
        <div class="half">
            <h1>CONTACT US</h1>
            <div class="major">
                <button><img src="../components/icons/icon-mail.svg" alt="">Email Us Today <img src="../components/icons/icon-arrow.svg" alt=""></button>
                <button><img src="../components/icons/icon-phones.svg" alt="">Call Us Today <img src="../components/icons/icon-arrow.svg" alt=""></button>
                <button><img src="../components/icons/icon-message.svg" alt="">Message Us Today <img src="../components/icons/icon-arrow.svg" alt=""></button>
                <button><img src="../components/icons/icon-whatsapp.svg" alt="">Whatsapp Us Today <img src="../components/icons/icon-arrow.svg" alt=""></button>
                <button><img src="../components/icons/icon-map.svg" alt="">Visit Our Offices Today <img src="../components/icons/icon-arrow.svg" alt=""></button>
            </div>
            <div class="minor">
                <h3>FOLLOW US</h3>
                <ul>
                    <li><img src="../components/icons/icon-facebook.svg" alt=""></li>
                    <li><img src="../components/icons/icon-instagram.svg" alt=""></li>
                    <li><img src="../components/icons/icon-linkedin.svg" alt=""></li>
                    <li><img src="../components/icons/icon-pinterest.svg" alt=""></li>
                    <li><img src="../components/icons/icon-tiktok.svg" alt=""></li>
                    <li><img src="../components/icons/icon-twitter.svg" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="half illustration">
            <!-- <MapView /> -->
             <!-- <img src="../assets/Contact.svg" alt=""> -->
        </div>
    </div>
</template>

<style scoped>
.contact{
    height: 100%;
    width: 100%;
    display: flex;
}

.half{
    width: 50%;
}

button{
    height: 56px;
    width: 80%;
    padding: 16px 32px;
    margin: 10px;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #eee;
    animation: none;
    box-shadow: none;
}

button img{
    height: 50px;
}

.minor ul{
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;
}

.minor ul img{
    height: 40px;
}

.illustration{
    background-image: url('../assets/Contact.svg');
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
<script setup>
import {ref} from "vue";

const screenSize = window.innerWidth
</script>

<template>
    <nav v-if="screenSize > 425">
        <div class="logo">
            <span>
                <img src="../assets/I-Rush-Logo-Dark.svg" alt="">
            </span>
        </div>
        <div class="links">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/about">ABOUT</RouterLink>
            <RouterLink to="/services">SERVICES</RouterLink>
            <RouterLink to="/contact">CONTACT</RouterLink>
        </div>
    </nav>
    <nav v-else>
        <RouterLink to="/"><img src="./icons/Icon-Home.svg" alt=""></RouterLink>
        <RouterLink to="/about"><img src="./icons/Icon-About.svg" alt=""></RouterLink>
        <RouterLink to="/services"><img src="./icons/Icon-Service.svg" alt=""></RouterLink>
        <RouterLink to="/contact"><img src="./icons/icon-phone.svg" alt=""></RouterLink>
    </nav>
</template>

<style>
nav{
    /* height: 100%; */
    display: grid;
    grid: "logo nav"1fr
    / 5fr 5fr;
    z-index: 1000;
}

.logo{
    background: linear-gradient(90deg, #494949, #494949, transparent);
    /* border: 2px solid; */
}

.logo span{
    position: relative;
    height: 10vh;
}

img{
    height: 10vh;
    background: radial-gradient(#fff);
}

.links{
    /* width: 70%; */
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: center;
}

.links img{
    width: 40px;
}

@media only screen and (max-width: 425px) {
    nav{
        position: fixed;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        height: 60px;
        display:  flex;
        justify-content: space-evenly;
        background: linear-gradient(3600deg, #292929,#292929,#494949, transparent);
        backdrop-filter: blur(5px);
    }

    nav img{
        height: 40px;
    }
}
</style>
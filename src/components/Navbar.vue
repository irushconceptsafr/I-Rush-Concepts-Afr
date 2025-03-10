<script setup>
import {ref} from "vue";


</script>

<template>
    <nav>
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
</template>

<style>
nav{
    /* height: 100%; */
    display: grid;
    grid: "logo nav"1fr
    / 5fr 5fr;
}

/* .logo{
    background: radial-gradient(#999, transparent);
} */

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
</style>
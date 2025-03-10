<script setup>
import {ref} from "vue";
</script>

<template>
    <nav>
        <div class="logo"></div>
        <div class="links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </nav>
</template>

<style>
nav{
    height: 100%;
}

.logo{
    height: 30%;
}

.links{
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>
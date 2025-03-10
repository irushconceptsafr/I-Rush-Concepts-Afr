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
            <RouterLink to="/Contact">Contact</RouterLink>
        </div>
    </nav>
</template>
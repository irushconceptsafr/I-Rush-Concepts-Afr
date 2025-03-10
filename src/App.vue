<script setup>
import Navbar from './components/Navbar.vue';

</script>

<template>
  <header>
    <nav>
        <div class="logo"></div>
        <div class="links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
template{
  height: 100vh;
}

header{
  position: fixed;
  right: 0;
  height: 100vh;
  width: 80px;
  border: 2px solid;
}

main{
  width: calc(100vw - 100px);
  border: 2px solid #aaa;
  height: 100vh;
}
</style>

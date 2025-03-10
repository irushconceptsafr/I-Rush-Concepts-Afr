<script setup>
import Navbar from './components/Navbar.vue';

</script>

<template>
  <header>
    <Navbar />
    <!-- <nav>
        <div class="logo"></div>
        <div class="links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </nav> -->
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
body{
  height: 100vh;
  display: grid;
  grid:
  "header"1fr
  "main"9fr
  /1fr;
}

header{
  grid-area: header;
  position: fixed;
  top: 0;
  /* right: 0; */
  height: 10vh;
  width: 100vw;
  /* border: 2px solid; */
}

main{
  grid-area: main;
  /* width: calc(100vw - 100px); */
  /* border: 2px solid #aaa; */
  margin-top: 10vh;
  height: 90vh;
}
</style>

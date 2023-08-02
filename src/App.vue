<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  component: {
    Navbar
  },

 components: { Navbar }
    }
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
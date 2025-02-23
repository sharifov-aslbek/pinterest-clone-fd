<script setup>
import { ref , onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Home/Navigation.vue';
import { NNotificationProvider } from "naive-ui";
import NavbarHome from './components/Home/NavbarHome.vue';
const showComponents = ref(true);

onMounted(() => {
  if (localStorage.getItem('tokenPinterest')) {
    showComponents.value = false;
  }
});
</script>

<template>
  <NNotificationProvider>
    <Navigation />
    <NavbarHome />
    <RouterView />
  </NNotificationProvider>
</template>

<style scoped>

</style>

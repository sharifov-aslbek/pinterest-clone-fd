<script setup>
import { ref, onMounted } from 'vue';
import AuthSelection from '@/components/DefaultHome/AuthSelection.vue';
import Navbar from '@/components/DefaultHome/Navbar.vue';

const showComponents = ref(true);

onMounted(() => {
  if (localStorage.getItem('tokenPinterest')) {
    showComponents.value = false;
  }
});
</script>

<template>
    <Navbar />
    <AuthSelection />
</template>

<style scoped>
</style>

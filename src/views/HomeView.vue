<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navigation from '@/components/Home/Navigation.vue';
import NavbarHome from '@/components/Home/NavbarHome.vue';
import HomePosts from '@/components/Home/HomePosts.vue';

const showComponents = ref(true);
const route = useRoute();

onMounted(() => {
  if (localStorage.getItem('tokenPinterest')) {
    showComponents.value = false;
  }
});
</script>

<template>
  <div>
      <Navigation />
      <NavbarHome />
      <HomePosts />
  </div>
</template>

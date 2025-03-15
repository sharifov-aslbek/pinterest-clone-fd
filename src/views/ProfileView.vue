<template>
    <div class="container">
        <div class="top">
            <h3>Your Posts</h3>

            <div v-if="store.userData" class="user">
                    <img class="img" :src="store.userData.image" alt="">
                    <p>{{ store.userData.name }}</p>
                </div>
        </div>

        <Posts />
    </div>
</template>

<script setup>
import { onMounted , ref } from 'vue';
import Posts from '@/components/Profile/Posts.vue';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();
onMounted(() => {
    store.getProfileData();
})
</script>

<style scoped>
.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 20px;
}

h3 {
    font-size: 30px;
}

.user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user img {
    width: 40px;
    border-radius: 50%;
}
</style>
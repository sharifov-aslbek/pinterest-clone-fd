<template>
    <div class="container">
        <div v-if="store.onePost" class="card">
            <div>
                <img class="img" :src="store.onePost.image" :alt="store.onePost.title">
            </div>

            <div class="right">
                <div @click="addLikes(store.onePost.id)" class="like">
                    <Heart />
                    <p>{{ store.onePost.like_count }}</p>
                </div>

                <h2>{{ store.onePost.title }}</h2>    

                <div class="user">
                    <img class="img" :src="`http://127.0.0.1:8000/storage/${authStore.userData.image}`" alt="">
                    <p>{{ authStore.userData.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next';
import { onMounted , ref , watch } from 'vue';
import { usePostStore } from '@/stores/post';
import { useNotification } from 'naive-ui';
import { useAuthStore } from '@/stores/auth';
import { useLikeStore } from '@/stores/like';
import { useRoute } from 'vue-router';
const store = usePostStore();
const authStore = useAuthStore();
const likeStore = useLikeStore();
const notification = useNotification();
const route = useRoute();
onMounted(() => {
    store.getOnePosts(route.params.id)
})

const addLikes = (id) => {
    likeStore.addLike(id)
    notification.success({
    content: "Like added",
    duration: 2500, // 2.5 sekund davomida ko'rinadi
  });
}

watch(
  () => store.onePost, 
  (newVal) => {
    if (newVal && newVal.user_id) {
      authStore.getUserData(newVal.user_id);
    }
  },
  { immediate: true, deep: true } // immediate true bo‘lsa, komponent yuklanganda ham ishlaydi
);
</script> 

<style scoped>
.img {
    width: 400px;
}

.like {
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
}

.card {
    display: flex;
    margin: 30px 0px;
    border-radius: 20px;
    padding: 20px;
    gap: 20px;
    background-color: ghostwhite;
}

.card .user {
    display: flex; 
    align-items: center;
    gap: 10px;
}

.card .user .img {
    width: 40px;
    border-radius: 50%;
}
</style>
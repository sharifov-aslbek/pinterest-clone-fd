<template>
    <div class="container">
        <div v-if="store.postsData" class="cards">
            <div @click="navigateCard(post.id)" class="card" v-for="post in store.postsData">
                <img :src="post.image" alt="">

                <div class="text">
                    <p>{{ post.title }}</p>
                    <button>Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post';
import { onMounted , ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateCard = (id) => {
    router.push(`/card/${id}`)
}
onMounted(() => {
    store.getAllPosts();
})
const store = usePostStore();
</script>

<style scoped>
.cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px;
    align-items: center;
}
.card {
    cursor: pointer;
    /* background: red; */
    width: 20%;
    /* height: 20%; */
}

.card:hover img {
    transform: scale(1.);
    transition: 0.3s;
}
img {
    transition: 0.3s;
    width: 100%;
    height: 20%;
    border-radius: 12px;
}

button {
    cursor: pointer;
  font-family: "Inter" , sans-serif;
        border: none;
        outline: none;
        background: red;
        color: #fff;
        /* margin: 10px 0px; */
        padding: 5px 10px;
        border-radius: 12px;
    }

.text {
    display: flex;
    justify-content: space-between;
}
</style>
<template>
    <div class="container">
        <div v-if="store.postsData" class="cards">
            <div @click="navigateCard(post.id)" class="card" v-for="post in store.postsData">
                <img :src="`http://127.0.0.1:8000/storage/${post.image}`"alt="">

                <div class="text">
                    <p>{{ post.title }}</p>
                    <button @click.stop>
                        <RouterLink :to="`/post/edit/${post.id}`">
                            Edit
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>

        <div v-else class="not-found">
            <img style="width: 200px;" src="https://s.pinimg.com/webapp/boards-cf40ced5.svg" alt="Not Found">

            <h3>Post not found</h3>
            <p>Доски помогают упорядочивать сохраненные пины в коллекции</p>

            <NButton @click="navigatePost" type="error">
                Create Post
            </NButton>
        </div>
    </div>
</template>

<script setup>
import { NButton } from 'naive-ui';
import { usePostStore } from '@/stores/post';
import { onMounted , ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateCard = (id) => {
    router.push(`/card/${id}`)
}
onMounted(() => {
    store.getUserPosts();
})
const store = usePostStore();
</script>

<style scoped>
.cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap ;
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


.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
}
</style>
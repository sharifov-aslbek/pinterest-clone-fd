<template>
    <div class="container">
        <h2>Your Liked Posts</h2>
      <div v-if="store.likedPosts" class="cards">
        <div 
          @click="navigateCard(post.id)" 
          class="card" 
          v-for="post in store.likedPosts" 
          :key="post.id"
        >
          <div class="card-image-container">
            <img class="card-image" :src="`http://127.0.0.1:8000/storage/${post.image}`" alt="">
            <div class="card-overlay">
              <button class="save-button">Save</button>
            </div>
          </div>
          <div class="card-content">
            <p class="card-title">{{ post.title }}</p>
          </div>
        </div>
      </div>
  
      <div v-if="!store.likedPosts" class="not-found">
        <img class="not-found-image" src="https://s.pinimg.com/webapp/boards-cf40ced5.svg" alt="Not Found">
        <h3 class="not-found-title">Post not found</h3>
        <p class="not-found-text">Доски помогают упорядочивать сохраненные пины в коллекции</p>
        <NButton @click="navigatePost" type="error" class="create-button">
          Create Post
        </NButton>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useLikeStore } from '@/stores/like';
import { NButton } from 'naive-ui';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navigateCard = (id) => {
    router.push(`/card/${id}`)
  }
  
  const navigatePost = () => {
    router.push('/post/create')
  }
  
  onMounted(() => {
    store.getUserLikedPost();
  })
  
  const store = useLikeStore();
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 24px;
    margin-top: 20px;
  }
  
  .card {
    cursor: pointer;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 16px 16px 0 0;
  }
  
  .card-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .card:hover .card-image {
    transform: scale(1.05);
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    opacity: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 16px;
    transition: opacity 0.3s ease;
  }
  
  .card:hover .card-overlay {
    opacity: 1;
  }
  
  .save-button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
    border: none;
    outline: none;
    background: #e60023;
    color: #fff;
    padding: 8px 16px;
    border-radius: 24px;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 8px rgba(230, 0, 35, 0.3);
  }
  
  .save-button:hover {
    background: #ad081b;
  }
  
  .card-content {
    padding: 12px 16px;
  }
  
  .card-title {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: #333;
    line-height: 1.4;
  }
  
  /* Not found styling */
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 40px 20px;
    text-align: center;
  }
  
  .not-found-image {
    width: 200px;
    margin-bottom: 16px;
  }
  
  .not-found-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
  
  .not-found-text {
    font-size: 16px;
    color: #5f5f5f;
    max-width: 400px;
    margin: 0;
  }
  
  .create-button {
    margin-top: 16px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .cards {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 16px;
    }
  }
  
  @media (max-width: 480px) {
    .cards {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 12px;
    }
    
    .card-content {
      padding: 8px 12px;
    }
    
    .card-title {
      font-size: 14px;
    }
  }
  </style>
<template>
    <div class="hero-section">
      <h1 class="main-heading">Find fresh ideas:</h1>
      <h2 class="sub-heading">Stylish look inspiration</h2>
      
      <swiper
        :modules="[Autoplay, Pagination]"
        :slides-per-view="3.5"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination'
        }"
        class="image-swiper"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-content" :style="{ backgroundColor: slide.bgColor }">
            <img :src="slide.image" :alt="slide.alt" class="slide-image" />
          </div>
        </swiper-slide>
        
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  
  const slides = [
    {
      image: 'https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg',
      bgColor: '#FFB800',
      alt: 'Fashion model in pink against yellow background'
    },
    {
      image: 'https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg',
      bgColor: '#E9D5FF',
      alt: 'Street style fashion shot'
    },
    {
      image: 'https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg',
      bgColor: '#BFDBFE',
      alt: 'Casual wear inspiration'
    },
    {
      image: 'https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg',
      bgColor: '#86EFAC',
      alt: 'Summer fashion look'
    },
    {
      image: 'https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg',
      bgColor: '#FDA4AF',
      alt: 'Urban style photography'
    }
  ]
  </script>
  
  <style scoped>
  .hero-section {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  
  .main-heading {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
    color: #111827;
  }
  
  .sub-heading {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: red;
  }
  
  .image-swiper {
    position: relative;
    padding-bottom: 3rem;
  }
  
  .slide-content {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    aspect-ratio: 2/3;
  }
  
  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .slide-content:hover .slide-image {
    transform: scale(1.05);
  }
  
  :deep(.swiper-pagination) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
  }
  
  :deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    background: #D1D5DB;
    opacity: 1;
    transition: all 0.3s ease;
  }
  
  :deep(.swiper-pagination-bullet-active) {
    background: #2563EB;
    width: 24px;
    border-radius: 4px;
  }
  
  @media (max-width: 768px) {
    .main-heading {
      font-size: 2rem;
    }
    
    .sub-heading {
      font-size: 1.75rem;
    }
    
    :deep(.swiper) {
      padding: 0 1rem;
    }
  }
  </style>
<template>
    <nav class="sidebar">
      <!-- Pinterest Logo -->
      <div class="logo">
        <!-- <LogoIcon /> -->
      </div>
  
      <!-- Navigation Items -->
      <div class="nav-items">
        <RouterLink to="/" class="nav-button">
          <HomeIcon />
        </RouterLink>
  
        <button class="nav-button">
          <SearchIcon />
        </button>

        <RouterLink to="/post/create" class="nav-button">
          <BadgePlusIcon />
        </RouterLink>
  
        <div class="notification-wrapper">
          <button class="nav-button">
            <BellIcon />
            <span class="notification-badge">99+</span>
          </button>
        </div>
  
        <button class="nav-button">
          <MessageCircleIcon />
        </button>
  
        <button class="nav-button">
          <CameraIcon />
        </button>
  
        <button class="nav-button">
          <CameraIcon />
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { 
    Home as HomeIcon,
    Search as SearchIcon,
    Bell as BellIcon,
    MessageCircle as MessageCircleIcon,
    Camera as CameraIcon,
    BadgePlus as BadgePlusIcon,

    // QuestionMark as QuestionMarkIcon,
  } from 'lucide-vue-next'
  
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 72px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
    z-index: 1000;
  }
  
  .logo {
    margin-bottom: 16px;
  }
  
  .logo-icon {
    width: 24px;
    height: 24px;
    color: #E60023;
  }
  
  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  
  .nav-button {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
    position: relative;
  }
  
  .nav-button:hover {
    background-color: #f0f0f0;
  }
  
  .nav-button svg {
    width: 24px;
    height: 24px;
    color: #111111;
  }
  
  .notification-wrapper {
    position: relative;
  }
  
  .notification-badge {
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: #E60023;
    color: white;
    font-size: 12px;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    font-weight: 600;
  }
  
  /* Optional: Add focus styles for accessibility */
  .nav-button:focus {
    outline: none;
    background-color: #f0f0f0;
  }
  
  .nav-button:focus-visible {
    outline: 2px solid #0066ff;
    outline-offset: 2px;
  }
  </style>
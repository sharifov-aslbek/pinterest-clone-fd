<template>
    <div class="profile-settings">
      <!-- Sidebar Navigation -->
      <nav class="sidebar">
        <ul class="nav-list">
          <li class="nav-item active">Изменение профиля</li>
          <li class="nav-item">Управление аккаунтом</li>
          <li class="nav-item">Видимость профиля</li>
          <li class="nav-item">Настроить ленту</li>
          <li class="nav-item">Подтвержденные аккаунты</li>
          <li class="nav-item">Разрешения для сообщества</li>
          <li class="nav-item">Уведомления</li>
          <li class="nav-item">Конфиденциальность и данные</li>
          <li class="nav-item">Безопасность</li>
          <li class="nav-item">Контент бренда</li>
        </ul>
      </nav>
  
      <!-- Main Content -->
      <main class="main-content">
        <h1 class="title">Изменение профиля</h1>
        <p class="subtitle">
          Позаботьтесь о конфиденциальности личных данных. Добавляемая вами информация видна всем, кто может просматривать ваш профиль.
        </p>
  
        <div class="profile-form">
          <!-- Avatar Section -->
          <div class="avatar-section">
            <p class="label">Фотография</p>
            <div class="avatar-wrapper">
              <div class="avatar">
                <img style="width: 40px;" :src="data.image" alt="">
              </div>
              <label for="fileInput" class="change-btn">Изменить</label>
<input type="file" id="fileInput"  @change="handleFileUpload" accept="image/*" style="display: none;">

            </div>
          </div>
  
          <!-- Form Fields -->
          <div class="form-group">
            <div class="input-row">
              <div class="input-group">
                <label>Имя</label>
                <input type="text" v-model="data.name" placeholder="aslbek" />
              </div>
              <div class="input-group">
                <label>Login</label>
                <input type="text" v-model="data.login" placeholder="sharifov" />
              </div>
              
            </div>
            <NButton @click="store.updateProfile(data.name , data.login)" type="error" >Save</NButton>

          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref , onMounted , watch } from 'vue'
  import { NButton } from 'naive-ui';
  import { useAuthStore } from '@/stores/auth';

  const store = useAuthStore();
  const selectedFile = ref(null);
  const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
  console.log(event.target.files[0] , 'file on vue');
  store.handleUpload(selectedFile.value);
  // store.file.value = event.target.files[0];
};

  onMounted(() => {
    store.getProfileData();
  })

  const form = ref({
    firstName: 'aslbek',
    lastName: 'sharifov',
    description: '',
    website: '',
    username: 'aslbeksharifov'
  })

  const data = ref(null); // data boshlang‘ich qiymati null

watch(
  () => store.userData, // Kuzatish uchun target
  (newVal) => {
    if (newVal) { 
      data.value = newVal; // Faqat qiymat mavjud bo‘lganda o‘zgartiramiz
    }
  },
  { immediate: true } // Agar store.onePost allaqachon mavjud bo‘lsa, darhol ishlashi uchun
);
  </script>
  
  <style scoped>
  .profile-settings {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  }
  
  .sidebar {
    width: 250px;
    flex-shrink: 0;
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-item {
    padding: 0.75rem 1rem;
    color: #4a4a4a;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .nav-item:hover {
    background-color: #f5f5f5;
  }
  
  .nav-item.active {
    font-weight: 600;
    background-color: #f5f5f5;
  }
  
  .main-content {
    flex: 1;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }
  
  .subtitle {
    color: #666;
    margin-bottom: 2rem;
  }
  
  .avatar-section {
    margin-bottom: 2rem;
  }
  
  .label {
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  .avatar-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    text-transform: lowercase;
  }
  
  .change-btn {
    padding: 0.5rem 1rem;
    background-color: #f5f5f5;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .change-btn:hover {
    background-color: #e8e8e8;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .input-row {
    display: flex;
    gap: 1rem;
  }
  
  .input-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .input-group label {
    font-weight: 500;
  }
  
  .input-group input,
  .input-group textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  .input-group textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .input-group small {
    color: #666;
    font-size: 0.875rem;
  }
  
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #666;
  }
  </style>
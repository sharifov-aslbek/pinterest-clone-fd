<script setup>
import axios from 'axios'
import { ref, computed, watchEffect, onMounted } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NTreeSelect
} from 'naive-ui'

import { usePostStore } from '@/stores/post'
import { useCategoryStore } from '@/stores/category'
const formRef = ref(null)
const store = usePostStore();
const categoryStore = useCategoryStore();
const value = ref([]);
const selectedValues = [...value.value];
const options = computed(() => [
  // Avvalgi options massivini qo'shamiz
  ...[
  ],
  // Agar categoryData mavjud bo'lsa, map qilamiz, aks holda bo'sh array qo'shamiz
  ...(Array.isArray(categoryStore.categoryData) ? 
    categoryStore.categoryData.map(category => ({
      label: category.name, // name ni label sifatida olish
      key: category.id // id ni value sifatida olish
    })) 
    : []
  )
]);

const selectedFile = ref(null);
const form = ref({
  title: '',
  description: '',
  image: null,
  category: value.value,
})

onMounted(() => {
  categoryStore.getAllCategory();
})

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
  console.log(event.target.files[0], 'file on vue');
  // store.handleUpload(selectedFile.value);
  // store.file.value = event.target.files[0];
};


const handleSubmit = (e) => {
  e.preventDefault()
  createPost();
}

const createPost = async () => {
  const token = localStorage.getItem('tokenPinterest');

  console.log('Selected categories:', form.value.category);

  const formData = new FormData();
  formData.append('title', form.value.title);
  formData.append('description', form.value.description);
  
  if (selectedFile.value) {
    formData.append('image', selectedFile.value);
  }
  
  formData.append('categories', JSON.stringify(value.value));

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/user/post', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Create post response', response.data);
    router.push('/profile');
  } catch (err) {
    console.error('API Error:', err);
  } finally {
    file.value = null;
  }
};
</script>

<template>
  <div class="create-pin-container">
    <h1>Create Post</h1>
    <NForm ref="formRef" :model="form" :rules="rules" @submit="handleSubmit">
      <div class="form-layout">
        <div class="image-section">
          <img
            src="data:image/jpeg;base64,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"
            alt="">
        </div>
        

        <div class="form-section">
          <NFormItem label="Title" path="title">
            <NInput v-model:value="form.title" placeholder="Add your title" type="text" />
          </NFormItem>

          <NFormItem label="Description" path="description">
            <NInput v-model:value="form.description" type="textarea"
              placeholder="Tell everyone what your Pin is about" :rows="4" />
          </NFormItem>


          <NTreeSelect
    multiple
    v-model:value="value"
    :options="options"
  />


          <input style="margin: 20px 0px;" type="file" @change="handleFileUpload" accept="image/*">


          <NButton type="primary" attr-type="submit" block>
            Create Post
          </NButton>
        </div>
      </div>
    </NForm>
  </div>
</template>

<style scoped>
.create-pin-container {
  max-width: 880px;
  margin: 20px auto;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 24px;
  color: #111;
}

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.image-section {
  height: 100%;
}

.upload-area {
  width: 100%;
  height: 450px;
  border: 2px dashed #e0e0e0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f9f9f9;
  overflow: hidden;
}

.upload-area:hover {
  border-color: #666;
  background: #f5f5f5;
}

.upload-area.has-image {
  border: none;
  background: none;
}

.upload-placeholder {
  text-align: center;
  color: #666;
}

.upload-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.upload-hint {
  font-size: 12px;
  color: #999;
  margin-top: 8px;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.form-section {
  padding: 16px 0;
}

@media (max-width: 768px) {
  .form-layout {
    grid-template-columns: 1fr;
  }

  .upload-area {
    height: 300px;
  }
}
</style>
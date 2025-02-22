<script setup>
import { ref , watch } from 'vue'
import { 
  NForm, 
  NFormItem, 
  NInput, 
  NUpload, 
  NButton, 
  useMessage 
} from 'naive-ui'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { usePostStore } from '@/stores/post'

const formRef = ref(null)
const route = useRoute();
const message = useMessage()
const store = usePostStore();
const selectedFile = ref(null);
const formData = ref({
  title: '',
  description: '',
  image: null
})
const data = ref(null); // data boshlang‘ich qiymati null

watch(
  () => store.onePost, // Kuzatish uchun target
  (newVal) => {
    if (newVal) { 
      data.value = newVal; // Faqat qiymat mavjud bo‘lganda o‘zgartiramiz
    }
  },
  { immediate: true } // Agar store.onePost allaqachon mavjud bo‘lsa, darhol ishlashi uchun
);

onMounted(() => {
  store.getOnePosts(route.params.id)
})

// const imageUrl = ref('')

// const handleImageUpload = (options) => {
//     console.log(options.file , 'file upload');
    
//     store.handleUpload(options.file)

//     formData.value.image = options.file
// }

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
  console.log(event.target.files[0] , 'file on vue');
  store.handleUpload(selectedFile.value);
  // store.file.value = event.target.files[0];
};

const rules = {
  title: [
    { required: true, message: 'Please enter a title', trigger: 'blur' }
  ],
  description: [
    { required: true, message: 'Please enter a description', trigger: 'blur' }
  ]
}

const handleSubmit = (e) => {
  e.preventDefault()
store.updatePost(data.value , data.value.id)
}
</script>

<template>
  <div v-if="store.onePost" class="create-pin-container">
    <h1>Update Post</h1>
    <NForm
      ref="formRef"
      @submit="handleSubmit"
    >
      <div class="form-layout">
        <div class="image-section">
          <img :src="store.onePost.image" alt="">
        </div>
        <!-- <div class="image-section">
          <NUpload
            accept="image/*"
            :max="1"
            :show-file-list="false"
            @change="handleImageUpload"
          >
            <div class="upload-area" :class="{ 'has-image': imageUrl }">
              <template v-if="!imageUrl">
                <div class="upload-placeholder">
                  <i class="upload-icon">↑</i>
                  <p>Click to upload</p>
                  <p class="upload-hint">Recommendation: Use high-quality .jpg files</p>
                </div>
              </template>
              <img v-else :src="imageUrl" alt="Pin preview" class="preview-image" />
            </div>
          </NUpload>
        </div> -->

        <div class="form-section">
          <NFormItem label="Title" path="title">
            <NInput
              v-model:value="data.title"
              placeholder="Add your title"
              type="text"
            />
          </NFormItem>

          <NFormItem label="Description" path="description">
            <NInput
              v-model:value="data.description"
              type="textarea"
              placeholder="Tell everyone what your Pin is about"
              :rows="4"
            />
          </NFormItem>

          <input style="margin: 20px 0px;" type="file"  @change="handleFileUpload" accept="image/*">


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
<script setup>
import { ref } from 'vue'
import { 
  NForm, 
  NFormItem, 
  NInput, 
  NUpload, 
  NButton, 
  useMessage 
} from 'naive-ui'

import { useAuthStore } from '@/stores/auth'

const formRef = ref(null)
const message = useMessage()
const store = useAuthStore();
const selectedFile = ref(null);
const oldPassword = ref(null);
const newPassword = ref(null);
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
store.createPost(formData.value)
}
</script>

<template>
  <div class="create-pin-container">
    <h1>Change Password</h1>
    <NForm
      ref="formRef"
      @submit="handleSubmit"
    >
      <div class="form-layout">
        <div class="image-section">
          <img src="data:image/png;base64,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" alt="">
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
          <NFormItem label="Old Password" path="title">
            <NInput
              v-model:value="oldPassword"
              placeholder="Enter your old password"
              type="password"
            />
          </NFormItem>

          <NFormItem label="New password" path="description">
            <NInput
              v-model:value="newPassword"
              type="password"
              placeholder="Enter your new password"
              :rows="4"
            />
          </NFormItem>



          <NButton @click="store.changepassword(oldPassword , newPassword)"  type="error" attr-type="submit" block>
            Change Password
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
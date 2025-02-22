import { ref, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import router from '@/router';

export const useAuthStore = defineStore('auth', () => {

  const file = ref(null);
  const profileData = ref(null);
  const userData = ref(null);
  const token = ref(null);

  async function handleUpload(filelist) {
    try {
      file.value = filelist
      console.log('File on parametr' , filelist);
      console.log('File on const' , file.value)        
    } catch (err) {
    }
  }


  async function register(name, login, password) {
    const encodedPassword = encodeURIComponent(password)
    const formData = new FormData()
  
    formData.append('name', name)
    formData.append('login', login)
    formData.append('password', encodedPassword)
    formData.append('image', file.value) // Assuming you're uploading only one image
    
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      localStorage.setItem('tokenPinterest' , response.data.token)
  
      console.log('Register response', response.data)
      router.push('/')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    } finally {
      file.value = null;
    }
  }

  async function loginHandler(login, password) {
    // const encodedPassword = encodeURIComponent(password)
    const formData = new FormData()
  
    formData.append('login', login)
    formData.append('password', password)
    
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData)

      token.value = response.data.data.token
      localStorage.setItem('tokenPinterest' , token.value)
  
      console.log('login response', response.data.data.token)
      router.push('/')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function getProfileData() {
    
    const token = localStorage.getItem('tokenPinterest')
  
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // token.value = response.data.data.token
      // localStorage.setItem('tokenPinterest' , token.value)
  
      console.log('profile response', response.data)
      profileData.value = response.data.data
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function getUserData(id) {
    
    const token = localStorage.getItem('tokenPinterest')
  
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/getUser/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // token.value = response.data.data.token
      // localStorage.setItem('tokenPinterest' , token.value)
  
      console.log('user response', response.data)
      userData.value = response.data.data
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function getProfileData() {
    
    const token = localStorage.getItem('tokenPinterest')
  
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // token.value = response.data.data.token
      // localStorage.setItem('tokenPinterest' , token.value)
  
      console.log('user response', response.data)
      userData.value = response.data.data
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function updateProfile(name , login) {
    const token = localStorage.getItem('tokenPinterest')
    
    
    const formData = new FormData()
    
    formData.append('name', name)
    formData.append('login' , login)
    formData.append('image', file.value) // Assuming you're uploading only one image
    
  
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/user/update`, formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' }
      })

  
      console.log('Update post response', response.data)
      router.push('/profile/info')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    } finally {
      file.value = null;
    }
  }

  async function changepassword(oldpass , newpass) {
    const token = localStorage.getItem('tokenPinterest')
    
    
    const formData = new FormData()
    
    formData.append('old-password', oldpass)
    formData.append('new-password' , newpass)
    
  
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/changePass`, formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
         }
      })

  
      console.log('Change pass response', response.data)
      router.push('/profile/info')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    } finally {
      file.value = null;
    }
  }

  async function logout() {
    
    const token = localStorage.getItem('tokenPinterest')
  
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // token.value = response.data.data.token
      // localStorage.setItem('tokenPinterest' , token.value)
  
      console.log('logout response', response.data)
      localStorage.removeItem('tokenPinterest')
      router.push('/home')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }


  return {register , handleUpload , loginHandler , getProfileData , profileData , getUserData , userData , getProfileData , updateProfile , logout , changepassword }
})

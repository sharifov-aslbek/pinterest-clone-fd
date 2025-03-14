import { ref, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
export const usePostStore = defineStore('post', () => {

  const file = ref(null);
  const postsData = ref(null);
  const onePost = ref(null);
  const categoryData = ref(null);
  const token = ref(null);
  const router = useRouter();


  async function getAllPosts() {
    try {
    const token = localStorage.getItem('tokenPinterest')
      const response = await axios.get('http://127.0.0.1:8000/api/posts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(response.data.data.length > 0) {
        postsData.value = response.data.data;
      }
      console.log('all posts', response.data)
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function getOnePosts(id) {
    try {
    const token = localStorage.getItem('tokenPinterest')
      const response = await axios.get(`http://127.0.0.1:8000/api/user/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      onePost.value = response.data;
      categoryData.value = response.data.categories;
      console.log('one posts', response.data)
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function getUserPosts(id) {
    try {
    const token = localStorage.getItem('tokenPinterest')
      const response = await axios.get(`http://127.0.0.1:8000/api/user/allposts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(response.data.data) {
        postsData.value = response.data.data;
      }
      console.log('one posts', response.data)
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function handleUpload(filelist) {
    try {
      file.value = filelist
      console.log('File on parametr' , filelist);
      console.log('File on const' , file.value)        
    } catch (err) {
    }
  }

  async function createPost(form) {
    const token = localStorage.getItem('tokenPinterest')
    
    console.log(form.category);
    
    const formData = new FormData()
    
    formData.append('title', form.title)
    formData.append('description' , form.description)
    formData.append('image', file.value)
    formData.append('categories' , JSON.stringify(form.category))
    
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/post', formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' }
      })

  
      console.log('Create post response', response.data)
      router.push('/profile')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    } finally {
      file.value = null;
    }
  }

  async function updatePost(form , id) {
    const token = localStorage.getItem('tokenPinterest')
    
    console.log(form);
    
    const formData = new FormData()
    
    formData.append('title', form.title)
    formData.append('description' , form.description)
    formData.append('image', file.value) // Assuming you're uploading only one image
    
  
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/user/post/update/${id}`, formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' }
      })

  
      console.log('Update post response', response.data)
      router.push('/profile')
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    } finally {
      file.value = null;
    }
  }



  return {getAllPosts , postsData , getOnePosts , onePost , getUserPosts , createPost , handleUpload , updatePost , categoryData}
})

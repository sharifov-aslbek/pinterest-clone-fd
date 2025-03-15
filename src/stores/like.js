import { ref, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useLikeStore = defineStore('like', () => {

  const file = ref(null);
  const postsData = ref(null);
  const onePost = ref(null);
  const likedPosts = ref(null);
  const token = ref(null);



  async function addLike(id) {
    try {
    const token = localStorage.getItem('tokenPinterest')
    const response = await axios.post('http://127.0.0.1:8000/api/user/post/like', 
      {
        post_id: id // postId bu o'zgaruvchi bo'lishi mumkin
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log('Like response' , response.data);
    window.location.reload();
    

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

      onePost.value = response.data.data;
      console.log('one posts', response.data)
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function getUserLikedPost(id) {
    try {
    const token = localStorage.getItem('tokenPinterest')
      const response = await axios.get(`http://127.0.0.1:8000/api/getUserLikedPosts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      likedPosts.value = response.data.data;
      console.log('one posts', response.data)
      // if (response.status === 200) {
      //   await loginToRegister(email, password)
      // }
    } catch (err) {
      console.error('API Error:', err)
    }
  }

  return {postsData , getOnePosts , onePost , addLike , likedPosts , getUserLikedPost}
})

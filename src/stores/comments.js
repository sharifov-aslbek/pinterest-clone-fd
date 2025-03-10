import { ref, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', () => {

  const file = ref(null);
  const postsData = ref(null);
  const onePost = ref(null);
  const token = ref(null);



  async function addComment(id , textComment) {
    
    try {
    const token = localStorage.getItem('tokenPinterest')
    const response = await axios.post('http://127.0.0.1:8000/api/post/comments/store', 
      {
        post_id: id,
        text: textComment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    window.location.reload();
    

    } catch (err) {
      console.error('API Error:', err)
    }
  }

  async function replyComment(id , textComment , parentId , userId) {
    
    try {
    const token = localStorage.getItem('tokenPinterest')
    const response = await axios.post('http://127.0.0.1:8000/api/post/comments/reply', 
      {
        post_id: id,
        text: textComment,
        parent_id: parentId,
        user_id: userId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log(response.data);
    
    // window.location.reload();
    

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

  return {postsData , getOnePosts , onePost , addComment , replyComment}
})

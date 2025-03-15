import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultHome from '@/views/DefaultHome.vue'
import OneCard from '@/components/Home/Post/OneCard.vue'
import ProfileView from '@/views/ProfileView.vue'
import FormCreate from '@/components/Home/Post/FormCreate.vue'
import PostEdit from '@/components/Home/Post/PostEdit.vue'
import ProfileInfo from '@/components/Profile/ProfileInfo.vue'
import ChangePassword from '@/components/Profile/ChangePassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/home',
      name: 'homea',
      component: DefaultHome,
    },
    {
      path: '/card/:id',
      name: 'card',
      component: OneCard,
    },
    {
      path: '/post/edit/:id',
      name: 'postEdit',
      component: PostEdit,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/profile/info',
      name: 'profileinfo',
      component: ProfileInfo,
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePassword,
    },
    {
      path: '/likedposts',
      name: 'likedposts',
      component: import('../components/Like/UserLikedPosts.vue')
    },
    {
      path: '/post/create',
      name: 'postcreate',
      component: FormCreate ,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('tokenPinterest');

  // **Agar token mavjud bo'lmasa yoki bo'sh bo'lsa, /home ga qayta yuborish**
  if (!token) {
    if (to.path !== '/home') {
      return next('/home'); 
    }
  }
  
  next();
});

export default router

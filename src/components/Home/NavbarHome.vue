<script setup>
    import { Search } from 'lucide-vue-next';
    import { NInput } from 'naive-ui';
    import { onMounted , ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
import Button from '../Profile/Button.vue';
    const store = useAuthStore();

    onMounted(() => {
        store.getProfileData();
    })
</script>


<template>
    <section class="section">
        <!-- <form action="">
            <NInput class="input" />
        </form> -->

        <!-- <div v-if="store.profileData" class="account-detail">
            <img class="img" :src="store.profileData.image" alt="">
        </div> -->

        <Button /> 
    </section>
</template>

<style scoped>
    .section {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 94%;
        /* background: red; */
        position: fixed;
        left: 5%;
        top: 1%;
    }

    form {
        width: 90%;
    }

    .img {
        width: 50px;
        border-radius: 50%;
    }
    
    .input {
        width: 100%;
    }
</style>
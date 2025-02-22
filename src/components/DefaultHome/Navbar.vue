<script setup>
    import Login from '../Auth/Login.vue';
    import Register from '../Auth/Register.vue';
    import { useCounterStore } from '@/stores/counter';
    import { ref } from 'vue';

    const store = useCounterStore();
    const login = ref(false)
    const register = ref(false)
    const showLogin = () => {
        login.value = !login.value
    }

    const showRegister = () => {
        register.value = !register.value
    }
</script>

<template>
    <div class="container">
        <div class="left">
            <img src="data:image/png;base64,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" alt="err">
            <h3>View</h3>
        </div>

        <div class="right">
            <ul>
                <li>Описание</li>
                <li>
                    Бизнес
                </li>
                <li>Блог</li>
            </ul>

            <div class="btns">
                <button @click="store.login = !store.login">Login</button>

                <button @click="store.register = !store.register">Register</button>
            </div>
        </div>
    </div>

    <Transition>
        <Login v-if="store.login" />    
    </Transition>

    <Transition>
        <Register v-if="store.register" />  
    </Transition>

</template>
 

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left img {
        width: 40%;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .right ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin-right: 10px;
    }

    .right ul li {
        list-style: none;
    }

    .right .btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .right .btns button:first-child {
  font-family: "Inter" , sans-serif;
        border: none;
        outline: none;
        background: red;
        color: #fff;
        padding: 10px 20px;
        border-radius: 12px;
    }

    .right .btns button:last-child {
  font-family: "Inter" , sans-serif;
        border: none;
        outline: none;
        background: gray;
        color: #fff;
        padding: 10px 20px;
        border-radius: 12px;
    }

    .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
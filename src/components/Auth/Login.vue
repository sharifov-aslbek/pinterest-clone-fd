<script setup>
import { X } from "lucide-vue-next";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useAuthStore } from "@/stores/auth";
const store = useCounterStore();
const authStore = useAuthStore();

const login = ref(null);
const password = ref(null);
// const login = ref(true);
</script>

<template>
    <section v-if="store.login" class="login">
        <div class="card">
            <div class="x-mark">
                <X @click="store.login = !store.login" />
            </div>
            <img src="data:image/png;base64,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" alt="Error">
            <h3>Welcome to Pinterest Clone</h3>

            <form @submit.prevent="authStore.loginHandler(login , password)">
                <p>Login</p>
                <input v-model="login" type="text" placeholder="Your login">


                <p>Password</p>
                <input v-model="password" type="password" placeholder="Your password">

                <br>
                <a href="">Forgot password ?</a>
                <br>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped>
    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); /* Orqa fonni biroz xiralashtiradi */
    }

    .card {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        width: 30%;
        margin: 0 auto;
        border-radius: 15px;
        background: white;
        padding: 20px;
    }

    .card img {
        width: 40px;
    }

    .card h3 {
        padding: 10px 0px;
        font-size: 30px;
    }

    .card .x-mark {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    input {
        border: 1px gray solid;
        border-radius: 10px;
        outline: none;
        padding: 5px;
        width: 100%;
        margin: 10px 0px;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 14px;
    }

    button {
  font-family: "Inter" , sans-serif;
        border: none;
        outline: none;
        background: red;
        color: #fff;
        margin: 10px 0px;
        padding: 10px 20px;
        border-radius: 12px;
    }
</style>
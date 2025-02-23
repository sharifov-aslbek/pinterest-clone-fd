<template>
  <n-dropdown v-if="isTokenAvailable" :options="options" @select="handleSelect">
    <n-button>Profile</n-button>
  </n-dropdown>
</template>

<script setup>
import { h , ref , onMounted } from "vue";
import { useRouter } from "vue-router";
import { NIcon, NButton, NDropdown } from "naive-ui";
import { useAuthStore } from '@/stores/auth';

const isTokenAvailable = ref(false);

onMounted(() => {
  isTokenAvailable.value = !!localStorage.getItem("tokenPinterest");
});
const store = useAuthStore();
const router = useRouter();

import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
  HelpCircle as HelpCircleIcon,
} from "@vicons/ionicons5";

const renderIcon = (icon) => () => h(NIcon, null, { default: () => h(icon) });

const options = [
  {
    label: "Profile",
    key: "profile",
    icon: renderIcon(UserIcon)
  },
  {
    label: "Edit Profile",
    key: "editProfile",
    icon: renderIcon(EditIcon)
  },
  {
    label: "Change Password",
    key: "changePass",
    icon: renderIcon(HelpCircleIcon)
  },
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon(LogoutIcon)
  }
];

const handleSelect = (key) => {
  if (key === "profile") {
    router.push("/profile");
  } else if (key === "editProfile") {
    router.push("/profile/info");
  }  else if (key === "changePass") {
    router.push("/changepassword");
  }
   else if (key === "logout") {
    store.logout();
    // Logout funksiyasini shu joyda chaqirish mumkin
    console.log("Logout qilindi");
  }
};
</script>

<style scoped>
.img {
  width: 50px;
  border-radius: 50%;
}
</style>

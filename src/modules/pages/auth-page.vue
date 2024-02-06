<script setup lang="ts">
import { useRouter } from "vue-router";
import authBg from "@/assets/images/auth-bg.png";
import { MainButton, MainInput } from "@/components/ui";
import { computed, onMounted, reactive, watch } from "vue";
import { useUserStore } from "@/store/modules/user";

interface IState {
  logVaalue: string;
  passValue: string;
}
const router = useRouter();
const userStore = useUserStore();
const state = reactive<IState>({
  logVaalue: "",
  passValue: "",
});
const isAuthenticated = computed(() => userStore.$state.isAuth);
function setLog(log: string) {
  state.logVaalue = log;
}
function setPass(pass: string) {
  state.passValue = pass;
}
function login() {
  if (!state.logVaalue && !state.passValue) {
    return;
  }
  userStore.login(state.logVaalue, state.passValue);
}
watch(isAuthenticated, () => {
  if (isAuthenticated) {
    router.push("/applications-for-training");
  }
});
onMounted(() => {
  if (localStorage.getItem("token")) {
    userStore.setIsAuth(true);
  }
});
</script>

<template>
  <div class="flex w-full items-center justify-between overflow-hidden dark:bg-[#191D23]">
    <img :src="authBg" alt="Культура Вождения" class="hidden h-screen desktop:block" />
    <div class="flex h-screen flex-1 flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-start gap-[10px]">
        <h3 class="text-[26px] font-bold text-textprimary dark:text-[#E4E4E4]">Автошкола</h3>
        <h4 class="text-[18px] font-normal text-textprimary dark:text-[#E4E4E4]">Культура Вождения</h4>
      </div>
      <div class="mt-[26px] flex flex-col gap-[15px]">
        <main-input placeholder="Введите логин" @input="({ value }) => setLog(value)" @submit="login" />
        <main-input placeholder="Введите пароль" @input="({ value }) => setPass(value)" @submit="login" />
        <main-button class="border border-greyprimary bg-purpl" text-content="Войти" @click="login"></main-button>
        <!-- <button class="text-grey">Забыли пароль ?</button> -->
      </div>
    </div>
  </div>
</template>

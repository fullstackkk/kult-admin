<script setup lang="ts">
import authBg from "@/assets/images/auth-bg.png";
import { MainButton, MainInput } from "@/components/ui";
import { reactive } from "vue";

interface IState {
  logVaalue: string;
  passValue: string;
}
const state = reactive<IState>({
  logVaalue: "",
  passValue: "",
});
function setLog(log: string) {
  state.logVaalue = log;
}
function setPass(pass: string) {
  state.passValue = pass;
}
</script>

<template>
  <div class="flex w-full items-center justify-between overflow-hidden">
    <img
      :src="authBg"
      alt="Культура Вождения"
      class="hidden h-screen desktop:block"
    />
    <div class="flex h-screen flex-1 flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-start gap-[10px]">
        <h3 class="text-[26px] font-bold text-textprimary">Автошкола</h3>
        <h4 class="text-[18px] font-normal text-textprimary">
          Культура Вождения
        </h4>
      </div>
      <div class="mt-[26px] flex flex-col gap-[15px]">
        <main-input
          placeholder="Введите логин"
          @input="({ value }) => setLog(value)"
        />
        <main-input
          placeholder="Введите пароль"
          @input="({ value }) => setPass(value)"
        />
        <main-button
          class="border border-greyprimary bg-purpl"
          text-content="Войти"
        ></main-button>
        <!-- <button class="text-grey">Забыли пароль ?</button> -->
      </div>
    </div>
  </div>
</template>

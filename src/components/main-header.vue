<script setup lang="ts">
import logo from "@/assets/svg/logo.svg";
import avatar from "@/assets/images/avatar.png";
import { computed, ref } from "vue";
import iconConstructor from "@/components/icon-constructor.vue";
import moonIcon from "@/assets/svg/moon-icon.vue";
import { MainSidebar } from "@/components";

import bellIcon from "@/assets/svg/bell-icon.vue";

const click = ref(false);
const userName = computed(() => "Константин Константинопольский");
const userPosition = computed(() => "Администратор");

const toogleTheme = () => {
  document.documentElement.classList.toggle("dark");
};
</script>
<template>
  <MainSidebar
    @click="click = !click"
    :class="click ? 'left-[0]' : 'left-[100%]'"
    class="fixed duration-[400ms] tablet:hidden"
  />
  <div
    class="flex w-full items-center justify-between mobile:h-[80px] mobile:bg-[#ffffff00] tablet:mb-[32px]"
  >
    <img :src="logo" alt="на главную" class="mobile:w-[30px] tablet:w-[50px]" />
    <div class="flex gap-[20px]">
      <button class="group/icon mobile:hidden tablet:flex">
        <icon-constructor width="48" height="48" @click="toogleTheme()">
          <moon-icon class="dark:text-[#E4E4E4]" />
        </icon-constructor>
      </button>

      <button
        class="items-center justify-between gap-[20px] mobile:hidden tablet:flex"
      >
        <img class="size-[56px]" :src="avatar" alt="пользователь" />
        <p class="flex flex-col items-start justify-center gap-[4px]">
          <span class="dark:text-[#E4E4E4]">{{ userName }}</span>
          <span class="dark:text-[#A5A5A5]">{{ userPosition }}</span>
        </p>
      </button>
      <button class="mobile:hidden tablet:flex">
        <icon-constructor>
          <bell-icon class="dark:text-[#E4E4E4]" />
        </icon-constructor>
      </button>
      <span
        @click="click = !click"
        class="hidden flex-col gap-[2px] mobile:flex tablet:hidden"
      >
        <span
          v-for="i in 3"
          class="h-[2px] w-[18px] bg-[#000] dark:bg-[#fff]"
        />
      </span>
    </div>
  </div>
</template>

<style module scoped></style>

<script setup lang="ts">
import logo from "@/assets/svg/logo.svg";
import bell from "@/assets/svg/bell.svg";
import avatar from "@/assets/images/avatar.png";
import moon from "@/assets/images/moon.png";
</script>

<template>
  <div class="flex h-[140px] w-full items-center justify-between">
    <img :src="logo" alt="на главную" />
    <div class="flex gap-[20px]">
      <button>
        <img :src="bell" alt="уведомления" />
      </button>
      <button class="flex items-center justify-between gap-[20px]">
        <img class="h-[56px] w-[56px]" :src="avatar" alt="пользователь" />
        <p class="flex flex-col items-start justify-center gap-[4px]">
          <span> Константин Константинопольский</span>
          <span>Администратор</span>
        </p>
      </button>
      <button>
        <img :src="moon" alt="сменить тему" />
      </button>
    </div>
  </div>
  <div class="flex h-auto w-full gap-[20px]">
    <div class="h-full w-[290px]">
      <img class="h-[100px] w-[100px]" :src="avatar" alt="пользователь" />
      <p class="">Константин Константинопольский</p>
    </div>
  </div>
</template>

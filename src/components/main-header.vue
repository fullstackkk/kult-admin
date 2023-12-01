<script setup lang="ts">
import logo from "@/assets/svg/logo.svg";
import avatar from "@/assets/images/avatar.png";
import { computed } from "vue";
import iconConstructor from "@/components/icon-constructor.vue";
import moonIcon from "@/assets/svg/moon-icon.vue";

import bellIcon from "@/assets/svg/bell-icon.vue";

const userName = computed(() => "Константин Константинопольский");
const userPosition = computed(() => "Администратор");
</script>
<template>
  <div class="flex h-[140px] w-full items-center justify-between">
    <img :src="logo" alt="на главную" />
    <div class="flex gap-[20px]">
      <button>
        <icon-constructor width="48" height="48">
          <moon-icon />
        </icon-constructor>
      </button>

      <button class="flex items-center justify-between gap-[20px]">
        <img class="h-[56px] w-[56px]" :src="avatar" alt="пользователь" />
        <p class="flex flex-col items-start justify-center gap-[4px]">
          <span>{{ userName }}</span>
          <span>{{ userPosition }}</span>
        </p>
      </button>
      <button>
        <icon-constructor>
          <bell-icon />
        </icon-constructor>
      </button>
    </div>
  </div>
</template>

<style module scoped></style>

<script setup lang="ts">
import { IconConstructor } from "@/components";
import { arrowDownIcon } from "@/assets/svg";
</script>

<template>
  <div class="flex justify-center gap-[5px] dark:text-[#E4E4E4]">
    <IconConstructor :width="24" :height="24" class="rotate-90 cursor-pointer">
      <arrowDownIcon/>
    </IconConstructor>
    <p
      class="flex size-[32px] cursor-pointer items-center justify-center rounded-[5px] bg-[#E2DEFF] text-[#7B57E0]"
    >
      1
    </p>
    <p class="flex size-[32px] cursor-pointer items-center justify-center">2</p>
    <p class="flex size-[32px] cursor-pointer items-center justify-center">3</p>
    <p class="flex size-[32px] cursor-pointer items-center justify-center">...</p>
    <p class="flex size-[32px] cursor-pointer items-center justify-center">15</p>
    <IconConstructor :width="24" :height="24" class="rotate-[-90deg]">
      <arrowDownIcon/>
    </IconConstructor>
  </div>
</template>

<style scoped></style>
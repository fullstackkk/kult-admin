<script setup lang="ts">
import filterIcon from "@/assets/svg/filter-icon.vue";

import iconConstructor from "@/components/icon-constructor.vue";
</script>
<template>
  <button
    class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] px-[16px] py-[8px]"
  >
    <icon-constructor :height="24" :width="24">
      <filter-icon />
    </icon-constructor>
    Фильтр
  </button>
</template>

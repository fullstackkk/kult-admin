<script setup lang="ts">
import { PageWrapper } from "@/components";
import filterIcon from "@/assets/svg/filter-icon.vue";
import searchIcon from "@/assets/svg/search-icon.vue";

import iconConstructor from "@/components/icon-constructor.vue";
</script>

<template>
  <page-wrapper>
    <template #header-title>Заявки на обучение</template>
    <template #filters-place>
      <div class="flex items-center justify-start gap-[20px]">
        <button
          class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] px-[16px] py-[8px]"
        >
          <icon-constructor :height="24" :width="24">
            <filter-icon />
          </icon-constructor>
          Фильтр
        </button>
        <label class="relative">
          <icon-constructor
            class="absolute left-[16px] top-[8px]"
            :height="24"
            :width="24"
          >
            <search-icon />
          </icon-constructor>
          <input
            type="text"
            class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px]"
            placeholder="Поиск клиента..."
          />
        </label>
      </div>
    </template>
  </page-wrapper>
</template>

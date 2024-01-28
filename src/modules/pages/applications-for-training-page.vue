<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon } from "@/assets/svg";

import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";

import { useApplicationStore } from "@/store/modules/application";
import { onMounted } from "vue";
const applicationStore = useApplicationStore();
// import { useInstructorService } from "@/store/modules/instructor";
// import { onMounted } from "vue";

// const instructor = useInstructorService();

// const instructorList = storeToRefs(instructor);

onMounted(() => applicationStore.getApplications());
</script>

<template>
  <page-wrapper>
    <template #header-title>Заявки на обучение</template>
    <template #filters-place>
      <div class="flex items-center justify-start gap-[20px]">
        <main-button text-content="Фильтр" left-icon="filterIcon"></main-button>
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
        <main-button
          text-content="Добавить заявку"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
  </page-wrapper>
</template>

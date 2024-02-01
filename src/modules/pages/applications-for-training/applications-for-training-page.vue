<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon } from "@/assets/svg";
// import { storeToRefs } from "pinia";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";

import { useApplicationStore } from "@/store/modules/application";
import { default as Table } from "./applications-for-training-table.vue";
import { default as Popup } from "./applications-for-training-popup.vue";
import { Ref, onMounted, ref } from "vue";
const applicationStore = useApplicationStore();
// import { useInstructorService } from "@/store/modules/instructor";
// import { onMounted } from "vue";

// const instructor = useInstructorService();

// const instructorList = storeToRefs(instructor);

let data: Ref<any> = ref();
let click = ref(false);
const getClickedData = (dataInfo: any) => {
  data.value = dataInfo;
  click.value = !click.value;
};

onMounted(() => applicationStore.getApplications());
</script>

<template>
  <page-wrapper>
    <template #header-title><p class="dark:text-[#FAFAFA]">Заявки на обучение</p></template>
    <template #filters-place>
      <div class="flex justify-between">
        <div class="flex gap-[20px]">
          <main-button
            class="dark:bg-[#191D23] dark:border-[#262C36] dark:text-[#E4E4E4]"
            text-content="Фильтр"
            left-icon="filterIcon"
          ></main-button>
          <label class="relative">
            <icon-constructor class="absolute left-[16px] top-[8px]" :height="24" :width="24">
              <search-icon class="dark:text-[#A5A5A5]" />
            </icon-constructor>
            <input
              type="text"
              class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px] dark:bg-[#262C36] dark:border-[#576776] dark:placeholder:text-[#A5A5A5]"
              placeholder="Поиск клиента..."
            />
          </label>
        </div>
        <main-button
          class="dark:bg-[#191D23] dark:border-[#262C36] dark:text-[#E4E4E4]"
          text-content="Добавить заявку"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <Table @click="getClickedData" />
      <Popup @click="getClickedData" :click="click" :data="data" />
    </template>
  </page-wrapper>
</template>

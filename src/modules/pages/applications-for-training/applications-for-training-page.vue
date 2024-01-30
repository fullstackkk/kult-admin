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
    <template #header-title>Заявки на обучение</template>
    <template #filters-place>
      <div class="flex justify-between">
        <div class="flex gap-[20px]">
          <main-button text-content="Фильтр" left-icon="filterIcon"></main-button>
          <label class="relative">
            <icon-constructor class="absolute left-[16px] top-[8px]" :height="24" :width="24">
              <search-icon />
            </icon-constructor>
            <input
              type="text"
              class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px]"
              placeholder="Поиск клиента..."
            />
          </label>
        </div>
        <main-button text-content="Добавить заявку" leftIcon="plusIcon" rightIcon="plusIcon"></main-button>
      </div>
    </template>
    <template #main-content
      ><Table @click="getClickedData" />
      <Popup @click="getClickedData" :click="click" :data="data" />
    </template>
  </page-wrapper>
</template>

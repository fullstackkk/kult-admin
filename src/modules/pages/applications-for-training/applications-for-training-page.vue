<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";

import { useApplicationStore } from "@/store/modules/application";
import Table from "./applications-for-training-table.vue";
import Popup from "./applications-for-training-popup.vue";
import { Ref, computed, onMounted, ref } from "vue";
import {
  IApplication,
  IApplicationGetListFilter,
} from "@/models/response/ApllicationsResponse";

const applicationStore = useApplicationStore();

let data: Ref<any> = ref();
let click = ref(false);
const getClickedData = (dataInfo: any) => {
  data.value = dataInfo;
  click.value = !click.value;
};
const applicationList = computed(() => applicationStore.$state.applications);

function createApplication() {
  // моковая функция что бы создать заявку
  applicationStore.createApplication();
}
onMounted(() => applicationStore.getApplications());
</script>

<template>
  <page-wrapper>
    <template #header-title>Заявки на обучение</template>
    <template #filters-place>
      <div class="flex justify-between">
        <div class="flex gap-[20px]">
          <main-button
            text-content="Фильтр"
            left-icon="filterIcon"
          ></main-button>
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
        <main-button
          text-content="Добавить заявку"
          leftIcon="plusIcon"
          rightIcon="plusIcon"
          @click="createApplication()"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <Table @click="getClickedData" :data="applicationList" />
      <Popup @click="getClickedData" :click="click" :data="data" />
    </template>
  </page-wrapper>
</template>

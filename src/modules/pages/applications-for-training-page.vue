<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";
import { useApplicationStore } from "@/store/modules/application";
import {
  TableConstructor,
  StandardCell,
  modalWindowConstructor,
} from "../reused-models";

import { IHeaders } from "@/models/table/Headers";
import { computed, onMounted, ref } from "vue";
import { IApplication } from "@/models/response/ApllicationsResponse";

const applicationStore = useApplicationStore();

const applications = computed<IApplication[]>(
  () => applicationStore.applications
);

const headers: IHeaders[] = [
  {
    title: "Операция",
    slot_name: "operation",
    classes: " w-[102px]",
  },
  {
    title: "ФИО",
    slot_name: "fio",
    classes: " w-[138px]",
  },
  {
    title: "Номер",
    slot_name: "phone-number",
    classes: "w-[138px]",
  },
  {
    title: "Филиал",
    slot_name: "branch",
    classes: "w-[138px]",
  },
  {
    title: "Курс",
    slot_name: "well",
    classes: "w-[150px]",
  },
  {
    title: "Статус",
    slot_name: "status",
    classes: "w-[100px]",
  },
  {
    title: "Дата оформления",
    slot_name: "issue-date",
    classes: "w-[95px]",
  },
  {
    title: "Доход ₽",
    slot_name: "income",
    classes: "w-[155px]",
  },
];

function createApplication() {
  // моковая функция что бы создать заявку
  applicationStore.createApplication();
}

let showModal = ref(false)

onMounted(() => applicationStore.getApplications());
</script>
<template>
  <teleport to="body">
    <modalWindowConstructor
      :title-name="'Добавить ученика'"
      :addDelBtn="false"
      :click="showModal"
      @click="showModal = !showModal"
    >
      <template #title-text/>
      <template #main-info/>
      <template #education-info/>
      <template #other/>
      <template #financial-info></template>
      <template #btns/>
    </modalWindowConstructor>
  </teleport>
  <page-wrapper>
    <template #header-title
      ><p class="dark:text-[#FAFAFA] mobile:text-2xl tablet:text-[27px]">
        Заявки на обучение
      </p>
    </template>
    <template #filters-place>
      <div
        class="justify-between mobile:flex mobile:flex-col tablet:flex-row tablet:items-center tabletXl:flex"
      >
        <div
          class="mobile:mb-[10px] mobile:flex mobile:w-full mobile:flex-col mobile:gap-[10px] tablet:mb-[0px] tablet:w-[115px] tablet:gap-[20px] tabletXl:w-auto tabletXl:flex-row"
        >
          <main-button
            class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4] mobile:flex mobile:justify-start tablet:justify-center"
            text-content="Фильтр"
            left-icon="filterIcon"
          ></main-button>
          <label class="relative">
            <icon-constructor
              class="absolute left-[16px] top-[8px]"
              :height="24"
              :width="24"
            >
              <search-icon class="dark:text-[#A5A5A5]" />
            </icon-constructor>
            <input
              type="text"
              class="flex items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder:text-[#A5A5A5] mobile:w-full tablet:w-[170px] tabletXl:w-auto"
              placeholder="Поиск клиента..."
            />
          </label>
        </div>
        <main-button
          @click="showModal = !showModal"
          class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4] tablet:h-[40px] tablet:leading-5"
          text-content="Добавить заявку"
          rightIcon="plusIcon"
          @click="createApplication"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <table-constructor :headers="headers" :resize="false">
        <template #operation="{ index }">
          <!-- <p class="text">{{ applications[index] ? applications[index].fio : "" }}</p> -->
          <standard-cell :double="true">
            <p class="font-normal mobile:text-xs tablet:text-sm">
              {{ "17.09.23 16:02" }}
            </p>
            <p class="text">
              {{ "Заявка №80" }}
            </p>
          </standard-cell>
        </template>
        <template #fio
          ><p class="text font-'Manrope'">Ивановский И.И.</p></template
        >
        <template #phone-number
          ><p class="text font-'Manrope'">+7 (999) 999-99-99</p></template
        >
        <template #branch
          ><p class="text font-'Manrope'">Международная</p></template
        >
        <template #well
          ><p class="text font-'Manrope'">Название_курса</p></template
        >
        <template #status><p class="text font-'Manrope'">Записан</p></template>
        <template #issue-date
          ><p class="text font-'Manrope'">17.09.23</p></template
        >
        <template #income><p class="text font-'Manrope'">9 900,00</p></template>
      </table-constructor>
    </template>
  </page-wrapper>
</template>
<style scoped>
.text {
  @apply truncate w-[142.67px] h-[24px] tablet:w-[121px] tablet:text-[17px] tablet:font-normal leading-[20px] mobile:text-sm  mobile:font-normal desktopXl:w-[140px];
}
</style>

<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";
import { useApplicationStore } from "@/store/modules/application";
import { useAppStateStore } from "@/store/modules/app-state";
import { TableConstructor, StandardCell, Pagination } from "@/components/table";
import CreateApplicationPopup from "@/modules/popups/create-application-popup.vue";

import { ITableHeaders } from "@/components/table/utils/TableHeaders";
import { computed, onMounted, reactive, ref } from "vue";
import { IApplication } from "@/models/response/ApllicationsResponse";

const applicationStore = useApplicationStore();
const appStateStore = useAppStateStore();
const applications = computed<IApplication[]>(
  () => applicationStore.applications
);
interface IState {
  isOpenCreateApplicationPopup: boolean;
}
const state = reactive<IState>({
  isOpenCreateApplicationPopup: false,
});
const pageTitle = "Заявки на обучение";
const headers: ITableHeaders[] = [
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

function toggleCreateApplicationPopup(showPopup: boolean) {
  state.isOpenCreateApplicationPopup = showPopup;
  state.isOpenCreateApplicationPopup
    ? `${(document.body.style.overflow = "hidden")}`
    : `${(document.body.style.overflow = "auto")}`;
}

onMounted(() => {
  applicationStore.getApplications();
  appStateStore.setPageTitle(pageTitle);
});
</script>
<template>
  <teleport to="body">
    <create-application-popup
      :popup-title="'Добавить ученика'"
      @close-popup="toggleCreateApplicationPopup(false)"
      v-if="state.isOpenCreateApplicationPopup"
    />
  </teleport>
  <page-wrapper>
    <template #header-title
      ><p class="dark:text-[#FAFAFA] mobile:text-2xl tablet:text-[27px]">
        {{ pageTitle }}
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
          @click="toggleCreateApplicationPopup(true)"
          class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4] tablet:h-[40px] tablet:leading-5"
          text-content="Добавить заявку"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <table-constructor :headers="headers" :resize="false">
        <template #operation="{ index }">
          <!-- <p class="text">{{ applications }}</p> -->
          <standard-cell :classes="'h-[44px]'">
            <p class=" mobile:text-xs tablet:text-sm">
              {{ "17.09.23 16:02" }}
            </p>
            <p class="text">
              {{ "Заявка №80" }}
            </p>
          </standard-cell>
        </template>
        <template #fio><p class="text">Ивановский И.И.</p></template>
        <template #phone-number
          ><p class="text">+7 (999) 999-99-99</p></template
        >
        <template #branch
          ><standard-cell>Международная</standard-cell></template
        >
        <template #well><standard-cell>Название_курса</standard-cell></template>
        <template #status><standard-cell>Записан</standard-cell></template>
        <template #issue-date><standard-cell>17.09.23</standard-cell></template>
        <template #income><standard-cell>9 900,00</standard-cell></template>
      </table-constructor>
    </template>
    <template #pagination-palce>
      <pagination/>
    </template>
  </page-wrapper>
</template>
<style scoped>
.text {
  @apply truncate w-[142.67px] h-[24px] tablet:w-[121px] tablet:text-[17px] leading-[20px] mobile:text-sm  desktopXl:w-[140px];
}
</style>

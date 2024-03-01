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
import { computed, onMounted, reactive } from "vue";
import { IApplication } from "@/models/response/ApllicationsResponse";

const applicationStore = useApplicationStore();
const appStateStore = useAppStateStore();
const applications = computed<IApplication[]>(
  () => applicationStore.applications
);
interface IState {
  isOpenCreateApplicationPopup: boolean;
}

interface IFio {
  firstname: string;
  lastname: string;
  patronomic: string;
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


function toogleState(showPopup: boolean){
  state.isOpenCreateApplicationPopup = showPopup
}
function convertTimestampToDateTime(timestamp: number | undefined) {
  if (!timestamp) {
    return "";
  }
  var date = new Date(timestamp * 1000); // Умножаем на 1000, чтобы преобразовать секунды в миллисекунды
  return `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
function convertFioToString(fio: IFio) {
  return `${fio.lastname} ${fio.firstname}:${fio.patronomic}`;
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
      @show-popup="toogleState"
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
          @click="toogleState(true)"
          class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4] tablet:h-[40px] tablet:leading-5"
          text-content="Добавить заявку"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <table-constructor
        :headers="headers"
        :resize="false"
        :dataLength="applications.length"
      >
        <template #operation="{ index }">
          <standard-cell>
            <div class="flex-col justify-start">
              <p class="text-[12px] leading-[14px]">
                {{
                  convertTimestampToDateTime(applications[index]?.creationDate)
                }}
              </p>
              <p class="text-[14px] leading-[16px]">
                Заявка №{{ applications[index]?.number }}
              </p>
            </div>
          </standard-cell>
        </template>
        <template #fio="{ index }">
          <standard-cell>
            {{ convertFioToString(applications[index].fio as unknown as IFio) }}
          </standard-cell>
        </template>
        <template #phone-number="{ index }"
          ><standard-cell>{{ index }}</standard-cell></template
        >
        <template #branch="{ index }"
          ><standard-cell>Международная</standard-cell></template
        >
        <template #well="{ index }"
          ><standard-cell>Название_курса</standard-cell></template
        >
        <template #status="{ index }"
          ><standard-cell>Записан</standard-cell></template
        >
        <template #issue-date="{ index }"
          ><standard-cell>17.09.23</standard-cell></template
        >
        <template #income="{ index }"
          ><standard-cell>9 900,00</standard-cell></template
        >
      </table-constructor>
    </template>
    <template #pagination-palce>
      <pagination />
    </template>
  </page-wrapper>
</template>
<style scoped>
.text {
  @apply truncate w-[142.67px] h-[24px] tablet:w-[121px] tablet:text-[17px] leading-[20px] mobile:text-sm  desktopXl:w-[140px];
}
</style>

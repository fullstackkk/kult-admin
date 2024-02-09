<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";
import { TableConstructor, StandardCell } from "../reused-models/table";
import { useApplicationStore } from "@/store/modules/application";
import { default as Table } from "../reused-models/table/table.vue";
import { default as TableBody } from "../reused-models/table/table-body.vue";
import { default as Popup } from "../reused-models/popup/popup.vue";

import { IHeaders } from "@/models/table/Headers";
import { Ref, computed, onMounted, ref } from "vue";
import {
  IApplication,
  IApplicationGetListFilter,
} from "@/models/response/ApllicationsResponse";

const applicationStore = useApplicationStore();

const applications = computed<IApplication[]>(
  () => applicationStore.applications
);

let clickedData: Ref<any> = ref();
let showPopup = ref(false);
const getClickedData = (clickData: any) => {
  clickedData.value = clickData;
  showPopup.value = !showPopup.value;
};

// const tableHeadData = {
//   option1: { name: "", width: 24 },
//   option2: { name: "Операция", width: 102 },
//   option3: { name: "ФИО", width: 138 },
//   option4: { name: "Номер", width: 138 },
//   option5: { name: "Филиал", width: 138 },
//   option6: { name: "Курс", width: 150 },
//   option7: { name: "Статус", width: 100 },
//   option8: { name: "Дата оформления", width: 55 },
//   option9: { name: "Доход, ₽", width: 115 },
//   option10: { name: "", width: 40 },
// };
const headers: IHeaders[] = [
  {
    title: "Операция",
    slot_name: "operation",
    classes: " w-[56px]  2xlmin:w-[65px]",
  },
  {
    title: "ФИО",
    slot_name: "fio",
    classes: " w-[112px]  2xlmin:w-[160px]",
  },
  {
    title: "Номер",
    slot_name: "phone-number",
    classes: " w-[92px]  2xlmin:w-[100px]",
  },
  {
    title: "Клиент",
    slot_name: "client",
    classes: "w-[110px]  2xlmin:w-[200px]",
  },
  {
    title: "Специалист",
    slot_name: "user",
    classes: "w-[110px]  2xlmin:w-[180px]",
  },
  {
    title: "Услуги и товары",
    slot_name: "service",
    classes: "w-[198px]  2xlmin:w-[327px]",
  },
  {
    title: "Сумма, ₽",
    slot_name: "cost",
    classes: "w-[100px]  2xlmin:w-[120px]",
  },
  {
    title: "Оплата, ₽",
    slot_name: "payment",
    classes: "w-[100px]  2xlmin:w-[160px]",
  },
  {
    title: "Автор/Источник",
    slot_name: "source",
    classes: "w-[100px]  2xlmin:w-[160px]",
  },
];
// function getTableBodyData(applicationData: Idata) {
//   let tableBodyData: ItableBody = {
//     id: applicationData.id,
//     body: {
//       option1: {
//         text: "<input class='scale-[1.85]' type='checkbox' />",
//         style: "max-w-[24px] pl-[10px] ",
//       },
//       option2: {
//         text: `<p class='w-fit'>${applicationData.operationTime} Заявка №${applicationData.operationNumber}</p>`,
//         style: "max-w-[102px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option3: {
//         click: applicationData,
//         text: `<p class="w-fit cursor-pointer truncate">${applicationData.name}</p>`,
//         style: "max-w-[138px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option4: {
//         text: `<p class="w-fit truncate">${applicationData.phoneNumber}</p>`,
//         style: "max-w-[138px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option5: {
//         text: `<span class="flex items-center gap-[5px]">
//               <p class="size-[8px] rounded-[2px] bg-[#702785]"></p>
//               <p class="w-fit truncate">${applicationData.branch}</p>
//             </span>`,
//         style: "max-w-[138px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option6: {
//         text: `<p class="w-fit truncate">${applicationData.clas}</p>`,
//         style: "max-w-[150px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option7: {
//         text: `<p class="w-fit truncate">${applicationData.status}</p>`,
//         style: "max-w-[100px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option8: {
//         text: `<p class="w-fit truncate">${applicationData.dateRegistration}</p>`,
//         style: "max-w-[95px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option9: {
//         text: `<icon-constructor class="absolute left-[8px] top-[50%] translate-y-[-50%]" :height="24" :width="24">
//               <cardIcon class="dark:fill-[#E4E4E4]" />
//             </icon-constructor>
//             <p class="w-fit truncate pl-[27px]">${applicationData.income},00</p>`,
//         style: "relative max-w-[115px] pl-[10px] dark:text-[#E4E4E4]",
//       },
//       option10: {
//         text: `<svg fill="none" class="w-[24px] h-[24px]" :viewBox="'0 0 24 24'">
//             <path
//               d="M4 15.9999V19.9999L8 19.9998L18.8686 9.13122C19.2646 8.7352 19.4627 8.53716 19.5369 8.30883C19.6021 8.10799 19.6021 7.89172 19.5369 7.69088C19.4627 7.46255 19.2646 7.26449 18.8686 6.86848L17.1313 5.13122L17.1307 5.13055C16.7351 4.73498 16.5373 4.53715 16.3091 4.46301C16.1082 4.39775 15.8919 4.39775 15.691 4.46301C15.4627 4.53719 15.2646 4.7352 14.8686 5.13122L4 15.9999Z"
//               stroke="#B9B9B9"
//               stroke-width="0.666667"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>`,
//         style: "relative max-w-[40px]",
//       },
//     },
//   };
//   return tableBodyData;
// }

function createApplication() {
  // моковая функция что бы создать заявку
  applicationStore.createApplication();
}
onMounted(() => applicationStore.getApplications());
</script>

<template>
  <page-wrapper>
    <template #header-title
      ><p class="dark:text-[#FAFAFA]">Заявки на обучение</p></template
    >
    <template #filters-place>
      <div class="flex justify-between">
        <div class="flex gap-[20px]">
          <main-button
            class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4]"
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
              class="flex items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder:text-[#A5A5A5]"
              placeholder="Поиск клиента..."
            />
          </label>
        </div>
        <main-button
          class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4]"
          text-content="Добавить заявку"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <!-- <Table :tableHeadData="tableHeadData">
        <template #table-stroke>
          <TableBody
            :key="item.id"
            @click="getClickedData"
            v-for="item in applicationData"
            :tableBody="getTableBodyData(item)"
          />
        </template>
      </Table>
      <Popup @click="getClickedData" :click="showPopup" :data="clickedData" /> -->
      <table-constructor :headers="headers" :resize="false">
        <template #operation="{ index }">
          <standard-cell>
            <p>{{ applications[index].creationDate }}</p>
            <p>
              {{ applications[index].number ? applications[index].number : "" }}
            </p>
          </standard-cell>
        </template>
        <template #fio>123 </template>
        <template #phone-number="{}">123 </template>
      </table-constructor>
    </template>
  </page-wrapper>
</template>

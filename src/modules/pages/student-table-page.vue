<script lang="ts" setup>
import { mapActions, storeToRefs } from "pinia";
import { Ref, onMounted, ref } from "vue";
// import Hello from "@/components/Hello.vue";
import { useCounterStore } from "@/store/modules/example";
// import { usePokemonStore } from "@/store/modules/pokemon";
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";
import { PageWrapper } from "@/components";
import { default as Table } from "../reused-models/table/table.vue";
import { default as TableBody } from "../reused-models/table/table-body.vue";
import { default as Popup } from "../reused-models/popup/popup.vue";
import { ItableBody } from "@/models/table/tableBodyTempate";

const welcome = ref("Boilerplate Vue 3 + Vite + TypeScript + Pinia");

// Instance to store
const main = useCounterStore();
// const pokemon = usePokemonStore();
// Make data reactive
const { counter, doubleCounter } = storeToRefs(main);
// const { pokemonsName } = storeToRefs(pokemon);
// Mapping actions
const { increment } = mapActions(useCounterStore, ["increment"]);
// Reset store data
const reset = () => main.$reset();
// Call action from store to get pokemons on mounted lifecycle
// onMounted(() => pokemon.getPokemons());

let clickedData: Ref<any> = ref();
let showPopup = ref(false);
const getClickedData = (clickData: any) => {
  clickedData.value = clickData;
  showPopup.value = !showPopup.value;
};
interface Idata {
  id: number;
  operationTime: string;
  operationNumber: number;
  name: string;
  phoneNumber: string;
  branch: string;
  clas: string;
  status: string;
  dateRegistration: string;
  income: number;
}
// использовать интрефейс из @/models/respons
let applicationData: Idata[] = [
  {
    id: 0,
    operationTime: "17.09.23 16:01",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 1,
    operationTime: "17.09.23 16:02",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 2,
    operationTime: "17.09.23 16:03",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 3,
    operationTime: "17.09.23 16:04",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 4,
    operationTime: "17.09.23 16:05",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 5,
    operationTime: "17.09.23 16:06",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 6,
    operationTime: "17.09.23 16:07",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 7,
    operationTime: "17.09.23 16:08",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 8,
    operationTime: "17.09.23 16:09",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 9,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 10,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 11,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 12,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 13,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 14,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
  {
    id: 15,
    operationTime: "17.09.23 16:10",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    clas: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
];

const tableHeadData = {
  option1: { name: "", width: 24 },
  option2: { name: "Номер", width: 150 },
  option3: { name: "ФИО", width: 200 },
  option4: { name: "Номер", width: 175 },
  option5: { name: "Филиал", width: 175 },
  option6: { name: "Курс", width: 150 },
  option7: { name: "Статус", width: 100 },
  option8: { name: "", width: 40 },
};

const reternTableBodyData = (applicationData: any) => {
  let tableBodyData: ItableBody = {
    id: applicationData.id,
    body: {
      option1: {
        text: "<input class='scale-[1.85]' type='checkbox' />",
        style: "max-w-[24px] pl-[10px] ",
      },
      option2: {
        text: `<p class='w-fit'>Заявка №${applicationData.operationNumber}</p>`,
        style: "max-w-[102px] pl-[10px] dark:text-[#E4E4E4]",
      },
      option3: {
        click: applicationData,
        text: `<p class="w-fit cursor-pointer truncate">${applicationData.name}</p>`,
        style: "max-w-[138px] pl-[10px] dark:text-[#E4E4E4]",
      },
      option4: {
        text: `<p class="w-fit truncate">${applicationData.phoneNumber}</p>`,
        style: "max-w-[138px] pl-[10px] dark:text-[#E4E4E4]",
      },
      option5: {
        text: `<span class="flex items-center gap-[5px]">
              <p class="size-[8px] rounded-[2px] bg-[#702785]"></p>
              <p class="w-fit truncate">${applicationData.branch}</p>
            </span>`,
        style: "max-w-[138px] pl-[10px] dark:text-[#E4E4E4]",
      },
      option6: {
        text: `<p class="w-fit truncate">${applicationData.clas}</p>`,
        style: "max-w-[150px] pl-[10px] dark:text-[#E4E4E4]",
      },
      option7: {
        text: `<p class="w-fit truncate">${applicationData.status}</p>`,
        style: "max-w-[100px] pl-[10px] dark:text-[#E4E4E4]",
      },
      option8: {
        text: `<icon-constructor class="absolute left-[8px] top-[50%] translate-y-[-50%]" :height="24" :width="24">
              <editIcon />
            </icon-constructor>`,
        style: "relative max-w-[40px]",
      },
    },
  };
  return tableBodyData;
};
</script>

<template>
  <page-wrapper>
    <template #header-title><p class="dark:text-[#FAFAFA]">Таблица учеников</p></template>
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
              class="flex items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px] dark:bg-[#262C36] dark:border-[#576776] dark:placeholder:text-[#A5A5A5]"
              placeholder="Поиск клиента..."
            />
          </label>
        </div>
        <main-button
          class="dark:bg-[#191D23] dark:border-[#262C36] dark:text-[#E4E4E4]"
          text-content="Добавить ученика"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
    <template #main-content>
      <Table :tableHeadData="tableHeadData">
        <template #table-stroke>
          <TableBody @click="getClickedData" v-for="item in applicationData" :tableBody="reternTableBodyData(item)" />
        </template>
      </Table>
      <Popup @click="getClickedData" :click="showPopup" :data="clickedData" />
    </template>
  </page-wrapper>
</template>

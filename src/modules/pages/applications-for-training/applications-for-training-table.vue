<script setup lang="ts">
import { IconConstructor } from "@/components";
import { cardIcon, editIcon } from "@/assets/svg";
import { ref } from "vue";

interface Idata {
  id: number;
  operationTime: string;
  operationNumber: number;
  name: string;
  phoneNumber: string;
  branch: string;
  class: string;
  status: string;
  dateRegistration: string;
  income: number;
}
let data: Idata[] = [
  {
    id: 0,
    operationTime: "17.09.23 16:01",
    operationNumber: 80,
    name: "Ивановский И.И.",
    phoneNumber: "+7 (999) 999-99-99",
    branch: "Международная",
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
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
    class: "Название_курса",
    status: "Записан",
    dateRegistration: "17.09.23",
    income: 9900.0,
  },
];

const emit = defineEmits(["click"]);

let togglePopup = ref(false);
let popupData = ref([{}]);
let openModalWindow = (item: any) => {
  togglePopup.value = !togglePopup.value;
  popupData.value.splice(0, 1);
  popupData.value.push(item);
};
</script>

<template>
  <div class="h-auto overflow-hidden rounded-[20px] border border-[#303030]">
    <table width="100%">
      <thead class="bg-[#FAFAFA] dark:bg-[#262C36]">
        <tr class="dark:text-[#757575]">
          <th class="w-[24px]"></th>
          <th :align="'left'" class="w-[102px] pl-[10px]">Операция</th>
          <th :align="'left'" class="w-[138px] pl-[10px]">ФИО</th>
          <th :align="'left'" class="w-[138px] pl-[10px]">Номер</th>
          <th :align="'left'" class="w-[138px] pl-[10px]">Филиал</th>
          <th :align="'left'" class="w-[150px] pl-[10px]">Курс</th>
          <th :align="'left'" class="w-[100px] pl-[10px]">Статус</th>
          <th :align="'left'" class="w-[95px] pl-[10px]">Дата<br />оформления</th>
          <th :align="'left'" class="w-[115px] pl-[10px]">Доход, ₽</th>
          <th class="w-[40px]"></th>
        </tr>
      </thead>
      <tbody v-for="item in data" :class="item.id % 2 == 0 ? 'dark:bg-[#191D23] bg-[#FFFFFF]' : 'dark:bg-[#262C36] bg-[#F1F3F4]'">
        <tr class="">
          <td :align="'center'" class="max-w-[24px] pl-[10px]">
            <input class="scale-[1.85] cursor-pointer" type="checkbox" />
          </td>
          <td :align="'left'" class="max-w-[102px] cursor-pointer pl-[10px]">
            <p class="w-[102px] cursor-pointer dark:text-[#E4E4E4]">{{ item.operationTime }}</p>
            <p class="w-[89px] cursor-pointer dark:text-[#E4E4E4]">Заявка №{{ item.operationNumber }}</p>
          </td>
          <td @click="openModalWindow(item), emit('click', { item })" :align="'left'" class="max-w-[138px] pl-[10px]">
            <p class="w-[120px] cursor-pointer truncate dark:text-[#E4E4E4]">{{ item.name }}</p>
          </td>
          <td :align="'left'" class="pl-[10px]cursor-pointer max-w-[138px]">
            <p class="w-[114px] cursor-pointer truncate dark:text-[#E4E4E4]">{{ item.phoneNumber }}</p>
          </td>
          <td :align="'left'" class="max-w-[138px] pl-[10px]">
            <span class="flex items-center gap-[5px]">
              <p class="size-[8px] rounded-[2px] bg-[#702785]"></p>
              <p class="w-[105px] cursor-pointer truncate dark:text-[#E4E4E4]">{{ item.branch }}</p>
            </span>
          </td>
          <td :align="'left'" class="max-w-[150px] pl-[10px]">
            <p class="w-[128px] cursor-pointer truncate dark:text-[#E4E4E4]">{{ item.class }}</p>
          </td>
          <td :align="'left'" class="max-w-[100px] pl-[10px]">
            <p class="w-[64px] cursor-pointer truncate dark:text-[#E4E4E4]">{{ item.status }}</p>
          </td>
          <td :align="'left'" class="max-w-[95px] pl-[10px]">
            <p class="w-[59px] cursor-pointer truncate dark:text-[#E4E4E4]">{{ item.dateRegistration }}</p>
          </td>
          <td :align="'left'" class="relative max-w-[115px] pl-[10px]">
            <icon-constructor class="absolute left-[8px] top-[13px] cursor-pointer" :height="24" :width="24">
              <cardIcon />
            </icon-constructor>
            <p class="w-[96px] cursor-pointer truncate pl-[27px] dark:text-[#E4E4E4]">{{ item.income }},00</p>
          </td>
          <td class="relative max-w-[40px]">
            <icon-constructor class="absolute left-[8px] top-[13px] cursor-pointer" :height="24" :width="24">
              <editIcon />
            </icon-constructor>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

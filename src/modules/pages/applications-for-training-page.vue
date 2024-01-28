<script setup lang="ts">
import { PageWrapper } from "@/components";
import { searchIcon, cardIcon, editIcon } from "@/assets/svg";
// import { storeToRefs } from "pinia";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";
// import { useInstructorService } from "@/store/modules/instructor";
// import { onMounted } from "vue";

// const instructor = useInstructorService();

// const instructorList = storeToRefs(instructor);

// onMounted(() => instructor.getInstructorList());
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
    <template #main-content>
      <div class="h-auto overflow-hidden border border-[#303030] rounded-[20px]">
        <table width="100%">
          <thead :bgcolor="'#FAFAFA'">
            <tr>
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
          <tbody :bgcolor="'#FFFFFF'">
            <tr>
              <td :align="'center'" class="max-w-[24px] pl-[10px]"><input class="scale-[1.85]" type="checkbox" /></td>
              <td :align="'left'" class="max-w-[102px] pl-[10px]">
                <p class="w-[102px]">17.09.23 16:02</p>
                <p class="w-[89px]">Заявка №80</p>
              </td>
              <td :align="'left'" class="max-w-[138px] pl-[10px]">
                <p class="w-[120px] whitespace-nowrap overflow-hidden text-ellipsis">Ивановский Иван Иванович</p>
              </td>
              <td :align="'left'" class="max-w-[138px] pl-[10px]">
                <p class="w-[114px] whitespace-nowrap overflow-hidden text-ellipsis">+7 (999) 999-99-99</p>
              </td>
              <td :align="'left'" class="max-w-[138px] pl-[10px]">
                <span class="flex items-center gap-[5px]">
                  <p class="w-[8px] h-[8px] rounded-[2px] bg-[#702785]"></p>
                  <p class="w-[105px] whitespace-nowrap overflow-hidden text-ellipsis">Международная</p>
                </span>
              </td>
              <td :align="'left'" class="max-w-[150px] pl-[10px]">
                <p class="w-[128px] whitespace-nowrap overflow-hidden text-ellipsis">Название_курса</p>
              </td>
              <td :align="'left'" class="max-w-[100px] pl-[10px]">
                <p class="w-[64px] whitespace-nowrap overflow-hidden text-ellipsis">Записан</p>
              </td>
              <td :align="'left'" class="max-w-[95px] pl-[10px]">
                <p class="w-[59px] whitespace-nowrap overflow-hidden text-ellipsis">17.09.23</p>
              </td>
              <td :align="'left'" class="relative max-w-[115px] pl-[10px]">
                <icon-constructor class="absolute left-[8px] top-[13px]" :height="24" :width="24">
                  <cardIcon />
                </icon-constructor>
                <p class="w-[96px] pl-[27px] whitespace-nowrap overflow-hidden text-ellipsis">9 900,00</p>
              </td>
              <td class="relative max-w-[40px]">
                <icon-constructor class="absolute left-[8px] top-[13px]" :height="24" :width="24">
                  <editIcon />
                </icon-constructor>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </page-wrapper>
</template>

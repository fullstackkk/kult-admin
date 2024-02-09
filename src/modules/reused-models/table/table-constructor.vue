<!-- eslint-disable prettier/prettier -->
<script lang="ts" setup>
// import { Checkbox, GreyLine, ColumnSettings, SettingsBtn } from "@estelink/ui";
// import { type Iheaders } from "./types";
// import {
//   mouseAddEventSync,
//   mouseRemoveEventSync,
//   initialSync,
//   scrollSync,
// } from "./utils";
import { IHeaders } from "@/models/table/Headers";

import { onUnmounted, ref, watch, Ref, onUpdated } from "vue";
import { useWindowSize } from "@vueuse/core";
/**
 * @param dataLength - количество записей в таблице
 * @param headers - заголовки таблицы
 * @param resize - отключает возможность ресайза колонок  по умолчанию true
 * @param id - id таблицы по умолчанию catalog__table
 * @param tableRowMarker - класс для строк таблицы по умолчанию table--row
 * @param alignCellTop - убирает вертикальное выравнивание контента по центру и даёт возможность его поднять
 * @param hideHeaderForMobile - убирает заголовки таблицы у мобилок
 * @param disabledSlots - массив с названиями слотов которые нужно отключить (по умолчанию пустой)
 *   варианты по умолчанию , но так же можно отключить колонку передав ее имя
 *   | "settings"
 *   | "header_check"
 *   | "header_settings"
 *   | "check"
 *   | "settings";
 */

interface IProps {
  dataLength?: number;
  headers: IHeaders[];
  resize?: boolean;
  id?: string;
  tableRowMarker?: string;
  alignCellTop?: boolean;
  hideHeaderForMobile?: boolean;
  disabledSlots?: string[];
}
const props = withDefaults(defineProps<IProps>(), {
    dataLength:10,
    resize: true,
    id: "catalog__table",
    tableRowMarker: "table--row",
    alignCellTop: false,
    hideHeaderForMobile: false,
});

const emits = defineEmits<{
  (e: "update:check", checkedList: number[]): number[];
}>();

let isLoading = ref(true);
let isCheckedRecord = ref<number[]>([]);
let isHeaderChecked = ref(false);

const { width } = useWindowSize();
const hoverColumn: Ref<number> = ref(-1);

let hoverIndex = ref(-1);
let columnCount = ref(props.headers.length);

function isShowSlot(slotName: string): boolean {
  if (!props.disabledSlots) return true;
  return !props.disabledSlots.includes(slotName);
}
function checkHandler(index: number, value: boolean) {
  if (value) {
    isCheckedRecord.value = [...isCheckedRecord.value, index];
  } else {
    // isHeaderChecked.value = false;
    isCheckedRecord.value = isCheckedRecord.value.filter((item) => {
      return item !== index;
    });
  }
  emits("update:check", isCheckedRecord.value);
}
function allCheckHandler(value: boolean) {
  if (value) {
    isHeaderChecked.value = true;
    isCheckedRecord.value = [];
    for (let i = 0; i < props.dataLength; i++) {
      isCheckedRecord.value = [...isCheckedRecord.value, i];
    }
  } else {
    isCheckedRecord.value = [];
    isHeaderChecked.value = false;
  }
  emits("update:check", isCheckedRecord.value);
}
watch(props, () => {
  isLoading.value = false;
});
// watch(isLoading, () => {
//   setTimeout(() => {
//     initialSync(columnCount.value, props.id);
//     mouseAddEventSync(columnCount.value, props.id);
//     scrollSync(props.tableRowMarker);
//   }, 100);
// });
// onUpdated(() => {
//   initialSync(columnCount.value, props.id);
// });
// onUnmounted(() => {
//   mouseRemoveEventSync(columnCount.value, props.id);
// });
</script>

<template>
  <div class="table-scrollbar h-full overflow-y-auto" :id="id">
    <!-- Шапка -->
    <div
      v-if="width > 768"
      class="table-head-bg 2xlmin:h-[48px] sticky top-0 z-[2] flex h-[40px] w-full overflow-y-hidden rounded-[16px]"
      :class="{
        'pl-4': !isShowSlot('header_check'),
      }"
    >
      <slot v-if="isShowSlot('header_check')" name="header_check">
        <div
          class="2xlmin:h-[50px] flex h-[40px] min-w-[40px] items-center justify-center"
        >
          <input type="checkbox" />
          <!-- <Checkbox
            @click="allCheckHandler(!isHeaderChecked)"
            :checked="isHeaderChecked"
            size="md"
          /> -->
        </div>
      </slot>

      <div
        class="header scrollbar-hidden table-head-bg flex w-full overflow-y-auto"
        :class="tableRowMarker"
      >
        <div
          v-for="({ title, classes }, index) in headers"
          class="table-head-bg header-border first-letter: group relative flex items-center justify-start"
          :key="index"
        >
          <div :id="`generate_${index}`" class="relative">
            <div
              class="icons-1-color 2xlmin:text-[14px] min-w-[8px] overflow-hidden whitespace-nowrap pl-2 text-[12px] font-semibold"
              :class="[
                classes,
                {
                  'resize-x': index < headers.length - 1 && props.resize,
                },
              ]"
            >
              {{ title }}
            </div>
          </div>
          <div
            v-if="index < headers.length - 1 && props.resize"
            @mouseenter="hoverColumn = index"
            @mouseleave="hoverColumn = -1"
            class="frames 2xlmin:h-[40px] h-[32px] w-[2px] opacity-0 transition-all before:bg-[#E5E5E5] group-hover:opacity-100"
          ></div>
        </div>
      </div>
      <!-- gear -->
      <slot v-if="isShowSlot('header_settings')" name="header_settings">
        <!-- <ColumnSettings /> -->
      </slot>
    </div>
    <!-- Масив -->
    <template v-if="width > 768">
      <div v-for="(item, index) in dataLength" :key="index" class="group">
        <div
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = -1"
          class="hover:input-bg 2xlmin:min-h-[66px] flex min-h-[54px] w-full max-w-full overflow-y-visible rounded-[16px] transition-all"
          :class="{
            'pl-4': !isShowSlot('check'),
            'items-center': !props.alignCellTop,
          }"
        >
          <slot name="check" v-bind="{ index }">
            <div
              v-if="isShowSlot('check')"
              class="flex min-w-[40px] items-center justify-center"
            >
              <input type="checkbox" />
              <!-- <Checkbox
                size="md"
                :checked="isCheckedRecord.includes(index)"
                @update:checked="(bool) => checkHandler(index, bool)"
              /> -->
            </div>
          </slot>

          <div
            class="header scrollbar-hidden flex size-full overflow-auto"
            :class="tableRowMarker"
          >
            <!-- Cell -->
            <div
              class="relative flex justify-start"
              v-for="({ slot_name }, i) in headers"
              :class="slot_name"
              :key="slot_name"
            >
              <div
                :class="[alignCellTop ? 'block' : 'flex', `row_col_${i}`]"
                class="items-center"
              >
                <slot
                  v-if="isShowSlot(slot_name)"
                  :name="slot_name"
                  v-bind="{ index }"
                />
              </div>
              <div
                v-if="i < headers.length - 1 && props.resize"
                class="flex items-center opacity-0 transition-all"
                :class="{
                  'opacity-100': hoverColumn == i,
                }"
              >
                <span class="input-bg 2xlmin:h-[40px] h-[32px] w-[2px]"></span>
              </div>
            </div>

            <!-- settings -->
          </div>
          <slot
            v-if="isShowSlot('settings')"
            name="settings"
            v-bind="{ index }"
          >
            <div
              class="relative ml-auto flex w-[50px] min-w-[50px] items-center justify-center"
            >
              <!-- <SettingsBtn /> -->
            </div>
          </slot>
        </div>

        <!-- <GreyLine
          class="group-hover:opacity-0"
          :class="{
            'opacity-0': index == dataLength - 1 || index == hoverIndex - 1,
          }"
        /> -->
      </div>
    </template>
    <!-- мобильная таблица -->
    <template v-if="width <= 768">
      <div v-for="(item, index) in dataLength" :key="index">
        <slot v-bind="{ index }" name="smtable"></slot>
        <!-- <GreyLine
          class="group-hover:opacity-0"
          :class="{
            'opacity-0': index == dataLength - 1 || index == hoverIndex - 1,
          }"
        /> -->
      </div>
    </template>
  </div>
</template>
<style scoped module>
.header_title {
  position: relative;
}

.header_title::before {
  content: "";
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 20px;
  background-color: #000;
}
</style>

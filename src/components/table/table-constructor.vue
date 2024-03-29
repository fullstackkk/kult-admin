<script lang="ts" setup>
import { ITableHeaders } from "./utils/TableHeaders";
import { IconConstructor } from "@/components";
import { editIcon } from "@/assets/svg";
import { CustomCheckbox } from "@/components/ui";

interface IProps {
  dataLength?: number;
  headers: ITableHeaders[];
  resize?: boolean;
  id?: string;
  tableRowMarker?: string;
  alignCellTop?: boolean;
  hideHeaderForMobile?: boolean;
  disabledSlots?: string[];
}
const props = withDefaults(defineProps<IProps>(), {
  dataLength: 50,
  resize: true,
  id: "catalog__table",
  tableRowMarker: "table--row",
  alignCellTop: false,
  hideHeaderForMobile: false,
});
</script>

<template>
  <div class="table_" :id="id">
    <!-- Шапка -->
    <div
      class="flex w-full min-w-[1110px] justify-start bg-[#FAFAFA] dark:bg-[#262C36]"
      :class="tableRowMarker"
    >
      <slot name="check-header">
        <CustomCheckbox />
      </slot>
      <div
        v-for="({ title, classes }, index) in headers"
        class="relative flex items-center justify-start"
        :class="classes"
        :key="index"
      >
        <div
          :id="`generate_${index}`"
          class="relative w-full py-[10px] text-xs leading-3 text-[#303030] dark:text-[#757575]"
        >
          {{ title }}
        </div>
      </div>
      <slot name="settings-header">
        <div
          class="relative ml-auto flex w-[50px] min-w-[50px] items-center justify-center"
        >
          <IconConstructor>
            <editIcon class="cursor-pointer hover:stroke-[#7B57E0]" />
          </IconConstructor>
        </div>
      </slot>
    </div>
    <!-- Масив -->
    <div
      v-for="(item, index) in dataLength"
      :key="index"
      class="flex min-h-[44px] w-full min-w-[1110px] items-center hover:bg-[#E2DEFF] dark:hover:bg-[#504C6A]"
      :class="
        index % 2 == 0
          ? 'bg-white dark:bg-[#191D23]'
          : 'bg-[#F1F3F4] dark:bg-[#262C36]'
      "
    >
      <div>
        <slot name="check" v-bind="{ index }">
          <CustomCheckbox />
        </slot>
      </div>
      <div class="flex w-full">
        <!-- Cell -->
        <div
          class="relative"
          v-for="({ slot_name, classes }, i) in headers"
          :key="slot_name"
          :class="classes"
        >
          <div
            class="inline-flex h-11 w-full flex-col items-start justify-center gap-[5px] text-[#303030] dark:text-[#E4E4E4]"
          >
            <slot :name="slot_name" v-bind="{ index }" />
          </div>
        </div>
        <!-- settings -->
      </div>
      <slot name="settings" v-bind="{ index }">
        <div
          class="relative ml-auto flex w-[50px] min-w-[50px] items-center justify-center"
        >
          <IconConstructor>
            <editIcon class="cursor-pointer hover:stroke-[#7B57E0]" />
          </IconConstructor>
        </div>
      </slot>
    </div>
  </div>
</template>
<style scoped>
.table_ {
  @apply overflow-auto w-full  border border-[#A5A5A5] tablet:rounded-[20px] dark:bg-[#262C36] mobile:rounded-[10px]  h-full;
}
.table_::-webkit-scrollbar {
  @apply w-[10px] h-[10px] tablet:h-[20px];
}
.table_::-webkit-scrollbar-track {
  @apply bg-[#E2DEFF] dark:bg-[#262C36]  rounded-bl-[170px] rounded-tr-[170px] tablet:rounded-tr-[0px] tablet:rounded-br-[150px];
}
.table_::-webkit-scrollbar-thumb {
  @apply bg-[#D5D1FF] dark:bg-[#576776] rounded-bl-[170px] rounded-tr-[170px] tablet:rounded-tr-[0px] tablet:rounded-br-[150px];
}
</style>
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

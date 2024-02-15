<script lang="ts" setup>
import { IHeaders } from "@/models/table/Headers";
import { IconConstructor } from "@/components";
import { editIcon } from "@/assets/svg";
import  { Checkboxs }  from "@/modules/reused-models";


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
  dataLength: 10,
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
      class="flex w-[95.5%] justify-between pl-[32px]"
      :class="tableRowMarker"
    >
      <div
        v-for="({ title, classes }, index) in headers"
        class="relative flex items-center justify-start"
        :key="index"
      >
        <div
          :id="`generate_${index}`"
          class="relative min-w-[8px] py-[10px] pl-[10px] font-'Manrope' text-xs font-normal leading-3 text-[#303030] dark:text-[#757575]"
          :class="[
            classes,
            {
              'resize-x': index < headers.length - 1 && props.resize,
            },
          ]">
          {{ title }}
        </div>
      </div>
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
      ">
      <div>
        <slot name="check" v-bind="{ index }">
          <Checkboxs/>
        </slot>
      </div>
      <div class="flex w-full justify-between">
        <!-- Cell -->
        <div
          class="relative"
          v-for="({ slot_name, classes }, i) in headers"
          :key="slot_name"
        >
          <div
            :class="classes"
            class="inline-flex h-11 flex-col items-start justify-center gap-[5px] pl-[5px] text-[#303030] dark:text-[#E4E4E4]"
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
.table_{
  @apply overflow-auto tablet:h-full border border-[#A5A5A5] tablet:rounded-[20px] dark:bg-[#262C36] mobile:rounded-[10px] mobile:h-[405px]
}
.table_::-webkit-scrollbar{
  @apply w-[10px] h-[10px] tablet:h-[20px]
}
.table_::-webkit-scrollbar-track{
  @apply bg-[#E2DEFF] dark:bg-[#262C36]  rounded-bl-[170px] rounded-tr-[170px] tablet:rounded-tr-[0px] tablet:rounded-br-[150px]
}
.table_::-webkit-scrollbar-thumb{
  @apply bg-[#D5D1FF] dark:bg-[#576776] rounded-bl-[170px] rounded-tr-[170px] tablet:rounded-tr-[0px] tablet:rounded-br-[150px]
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

<script setup lang="ts">
interface Iprops {
  tableHeadData?: {
    option1?: { name: string | number; width: number };
    option2?: { name: string | number; width: number };
    option3?: { name: string | number; width: number };
    option4?: { name: string | number; width: number };
    option7?: { name: string | number; width: number };
    option8?: { name: string | number; width: number };
    option9?: { name: string | number; width: number };
    option10?: { name: string | number; width: number };
  };
}

const props = defineProps<Iprops>();
</script>

<template>
  <!-- <div class="h-[550px] overflow-y-scroll rounded-[20px] border border-[#303030]">
    <table class="w-full">
      <thead class="bg-[#FAFAFA] dark:bg-[#262C36]">
        <tr class="dark:text-[#757575]">
          <th
            v-for="item in props.tableHeadData"
            :align="'left'"
            :class="`w-[${item!.width}px]`"
            class="pl-[10px] pt-[16px] pb-[16px]"
          >
            {{ item?.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="table-stroke"></slot>
      </tbody>
    </table>
  </div> -->
  <div></div>
</template>

<style scoped></style>

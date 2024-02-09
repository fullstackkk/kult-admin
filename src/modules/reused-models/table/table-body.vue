<script setup lang="ts">
import { ItableBody } from "@/models/table/tableBodyTempate";
import { ref } from "vue";

interface Iprops {
  tableBody: ItableBody;
}
const emit = defineEmits(["click"]);

let popupData = ref([{}]);
let openPopup = (item: any) => {
  popupData.value.splice(0, 1);
  popupData.value.push(item);
};
const props = defineProps<Iprops>();
</script>

<template>
  <tr
    class="h-[44px]"
    :class="
      props.tableBody.id % 2 == 0
        ? 'bg-[#FFFFFF] dark:bg-[#191D23]'
        : 'bg-[#F1F3F4] dark:bg-[#262C36]'
    "
  >
    <td
      v-for="item in props.tableBody.body"
      @click="openPopup(item?.click), emit('click', popupData[0])"
      v-html="item?.text"
      :class="item?.style"
      :key="item?.text"
    ></td>
  </tr>
</template>

<style scoped></style>

<script setup lang="ts">
import {
  arrowDownIcon,
  bellIcon,
  calendarIcon,
  cardIcon,
  closeIcon,
  editIcon,
  filterIcon,
  logOutIcon,
  mapPinIcon,
  moonIcon,
  notebookIcon,
  plusIcon,
  searchIcon,
  userIcon,
  usersIcon,
} from "@/assets/svg";

import iconConstructor from "@/components/icon-constructor.vue";
import { computed, ref } from "vue";

interface IIcons {
  [key: string]: any;
}

const icons: IIcons = {
  arrowDownIcon: arrowDownIcon,
  bellIcon: bellIcon,
  calendarIcon: calendarIcon,
  cardIcon: cardIcon,
  closeIcon: closeIcon,
  editIcon: editIcon,
  filterIcon: filterIcon,
  logOutIcon: logOutIcon,
  mapPinIcon: mapPinIcon,
  moonIcon: moonIcon,
  notebookIcon: notebookIcon,
  plusIcon: plusIcon,
  searchIcon: searchIcon,
  userIcon: userIcon,
  usersIcon: usersIcon,
};

interface IProps {
  textContent: string;
  leftIcon: string;
  rightIcon: string;
}

const props = withDefaults(defineProps<IProps>(), {
  textContent: "",
  leftIcon: "",
  rightIcon: "",
});
interface IEmits {
  (e: "click"): void;
}
const emit = defineEmits<IEmits>();

function click() {
  emit("click");
}
</script>

<template>
  <button
    class="relative flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] px-[16px] py-[8px] hover:bg-purpl dark:hover:hover:bg-[#7B57E0]"
    @click="click"
  >
    <icon-constructor v-if="leftIcon" :height="24" :width="24">
      <component :is="icons[leftIcon]" />
    </icon-constructor>
    {{ textContent }}
    <icon-constructor v-if="rightIcon" :height="24" :width="24" >
      <component :is="icons[rightIcon]" />
    </icon-constructor>
  </button>
</template>

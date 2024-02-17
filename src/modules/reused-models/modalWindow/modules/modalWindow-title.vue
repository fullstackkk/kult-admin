<script setup lang="ts">
import IconConstructor from "@/components/icon-constructor.vue"
import { closeIcon } from "@/assets/svg";

interface IProps {
  click?: boolean;
  titleName?: string
}

const props = defineProps<IProps>()
const emit = defineEmits(["click"]);
</script>

<template>
  <div class="mb-[16px] flex justify-between">
    <div class="flex flex-col dark:text-[#E4E4E4]">
      <p class="font-'Manrope' tablet:text-[32px] font-semibold mobile:text-2xl">{{ props.titleName }}</p>
    </div>
    <div>
      <IconConstructor class="cursor-pointer" @click="emit('click')">
        <closeIcon class="dark:text-[#E4E4E4]" />
      </IconConstructor>
      </div>
  </div>
</template>

<style scoped></style>
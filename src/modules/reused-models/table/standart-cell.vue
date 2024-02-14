<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    double?: boolean;
  }>(),
  {
    double: false,
  }
);

const classes = computed(() => ({
  "flex-col justify-center gap-[1px] items-start": props.double,
  "justify-start items-center": !props.double,
}));
const emits = defineEmits<{
  (e: "click"): void;
}>();
</script>
<template>
  <div
    class="text-primary-color 2xlmin:text-[14px] 2xlmin:leading-[16px] flex h-full gap-[4px] truncate px-2 text-[12px] font-normal leading-[14px]"
    :class="classes"
  >
    <slot @click="emits('click')"></slot>
  </div>
</template>

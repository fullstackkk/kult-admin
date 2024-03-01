<script setup lang="ts">
interface IProps {
  classes?: string;
}
interface IEmits {
  (e: "click"): void;
}

const props = withDefaults(defineProps<IProps>(), {
  classes: "",
});

const emits = defineEmits<IEmits>();
function onClickCell() {
  emits("click");
}
</script>
<template>
  <p
    class="flex h-[44px] w-full items-center justify-start truncate text-[16px] leading-[18px]"
    :class="props.classes"
  >
    <slot @click="onClickCell"></slot>
  </p>
</template>

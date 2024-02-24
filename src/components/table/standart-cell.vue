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
    class="h-[24px] w-[142.67px] truncate leading-[20px] mobile:text-sm tablet:w-[121px] tablet:text-[17px] desktopXl:w-[140px]"
    :class="props.classes"
  >
    <slot @click="onClickCell"></slot>
  </p>
</template>

<script setup lang="ts">
interface IProps {
  iconName: string;
  width: number | string;
  height: number | string;
  iconColor: string;
}

const props = withDefaults(defineProps<IProps>(), {
  iconName: "plus-icon",
  width: 32,
  height: 32,
  iconColor: "currentColor",
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${props.width} ${props.height}`"
    :aria-labelledby="iconName"
    fill="rgba(0,0,0,0)"
    :stroke="props.iconColor"
  >
    <slot />
  </svg>
</template>
<style>
.svg-icon {
  font-size: 1.2em;
  display: inline-block;
  vertical-align: top;
  fill: red;
  transform: translateX(0);
  backface-visibility: hidden;
  position: relative;
}
</style>

<script setup lang="ts">
interface IProps {
  selectValues: string[] | string;
  descriptionText?: string;
}
interface IEmits {
  (e: "changeValue", selectedOption: any): string;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

function getChangeValue(event: any) {
  emit("changeValue", props.selectValues[event.target.value]);
}
</script>

<template>
  <div class="select__wrapper">
    <p v-if="descriptionText" class="pl-[12px] text-base font-normal">
      {{ descriptionText }}
    </p>
    <select
      @change="getChangeValue($event)"
      name="select"
      class="custom__select"
    >
      <option
        v-for="(item, index) in props.selectValues"
        :value="index"
        :key="index"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.custom__select {
  @apply relative appearance-none w-full rounded-[20px] border border-[#CCC8F4] px-[16px] bg-[#fafafa] cursor-pointer py-[7px] border-solid dark:border-[#576776] dark:bg-[#262C36];
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
}
.custom__select::-ms-expand {
  @apply hidden;
}

.select__wrapper {
  @apply relative;
}
.select__wrapper::before {
  z-index: 1;
  content: "";
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  background-image: url("@/assets/svg/select_arrow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  right: 8px;
  bottom: 8px;
}
</style>

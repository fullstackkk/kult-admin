<script setup lang="ts">
interface IProps {
  selectValues: Array<string>
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="select__wrapper">
    <select name="select" class="custom__select">
      <option
        selected="true"
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
  @apply appearance-none w-full rounded-[20px] border border-[#CCC8F4] px-[16px] bg-[#fafafa] cursor-pointer py-[7px] border-solid dark:border-[#576776] dark:bg-[#262C36];
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
}
.custom__select::-ms-expand {
  @apply hidden;
}

.select__wrapper {
  @apply relative before:content-[""] before:absolute before:-translate-x-2/4 before:block before:w-6 before:h-6 before:bg-[url("@/assets/svg/select_arrow.svg")] before:bg-contain before:bg-no-repeat before:cursor-pointer before:right-2 before:top-[20%] before:dark:invert;
}
</style>
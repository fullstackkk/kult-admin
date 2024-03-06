<script setup lang="ts"></script>

<template>
  <input
    class="relative size-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
    type="date"
  />
</template>

<style scoped>
::-webkit-calendar-picker-indicator {
  background: url("../../assets/svg/calendar-icon.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-right: 22px;
  padding-top: 5px;
  width: 22px;
  height: 25px;
}
</style>
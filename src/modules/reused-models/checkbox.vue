<script setup lang="ts"></script>

<template>
  <label class="relative flex min-w-[40px] items-center justify-center">
    <input class="real_checkbox z-[-1] w-[0px]" type="checkbox" />
    <span
      class="custom_checkbox border border-[#303030] dark:border-[#E4E4E4] before:dark:invert"
    />
  </label>
</template>

<style scoped>
.custom_checkbox{
  display: inline-block;
  width: 18px;
  height: 18px;
  background: rgba(0, 0, 0, 0);
  border-radius: 3px;
  vertical-align: sub;
  position: relative;
  cursor: pointer;
}
.custom_checkbox::before{
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url("@/assets/svg/check-mark.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  margin-top: 1px;
  transition: 0.1s ease-in;
  cursor: pointer;
}
.real_checkbox:checked + .custom_checkbox::before{
  transform: translate(-50%, -50%) scale(1);
}
</style>
<script setup lang="ts">
import {
  modalWindowBtns,
  modalWindowEducationInfo,
  modalWindowFinancialInfo,
  modalWindowMainInfo,
  modalWindowOther,
  modalWindowTitle,
} from "./modules";

interface Iprops {
  click?: boolean;
  titleName?: string
  addDelBtn?: boolean
}

const props = defineProps<Iprops>();
const emit = defineEmits(["click"]);
</script>

<template>
  <div
    v-if="props.click"
    @click="emit('click')"
    class="absolute left-0 top-0 z-[1] tablet:h-screen w-[100%] cursor-pointer bg-[#0000006c] mobile:h-[1599px]"
  ></div>
  <div
    v-if="props.click"  
    class="absolute inset-[50%] z-[2] tabletXl:h-[800px] desktop:w-[1305px] translate-x-[-50%] translate-y-[-50%] rounded-[15px] bg-[#ffffff] tablet:px-[96px] dark:bg-[#262C36] mobile:w-[320px] mobile:p-[15px] mobile:top-[97%] mobile:h-[1485px] tablet:w-[600px] tabletXl:w-[1000px] tabletXl:p-[30px] tabletXl:top-[50%]"
  >
    <slot name="title-text">
      <modalWindowTitle
        @click="emit('click')"
        :click="props.click"
        :titleName="props.titleName"
      />
    </slot>
    <div class="mb-[30px] gap-[10px] flex justify-between mobile:flex-col tabletXl:flex-row">
      <div>
        <div class="mb-[10px] flex gap-[10px] mobile:flex-col tabletXl:flex-row">
          <slot name="main-info">
            <modalWindowMainInfo />
          </slot>
          <slot name="education-info">
            <modalWindowEducationInfo />
          </slot>
        </div>
        <slot name="other">
          <modalWindowOther class="hidden tabletXl:block" />
        </slot> 
      </div>
      <slot name="financial-info">
        <modalWindowFinancialInfo />
      </slot>
      <modalWindowOther class="mt-[10px] tabletXl:mt-[0] tabletXl:hidden"/>
    </div>
    <div class="flex gap-[10px] dark:text-[#E4E4E4]">
      <slot name="btns">
        <modalWindowBtns :addDelBtn="props.addDelBtn" />
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
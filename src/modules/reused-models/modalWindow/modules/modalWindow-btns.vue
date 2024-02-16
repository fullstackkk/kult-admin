<script setup lang="ts">

interface IProps {
  addDelBtn?: boolean;
}
const props = defineProps<IProps>()
</script>

<template>
  <div class="flex gap-[10px] dark:text-[#E4E4E4] tablet:mx-auto tabletXl:mx-[0]">
    <button
      class="font-'Manrope' h-[38px] tabletXl:w-[398px] rounded-[50px] border border-[#DCDCDD] bg-[#E2DEFF] dark:border-[#576776] dark:bg-[#504C6A] mobile:w-[290px]"
    >
      Сохранить
    </button>
    <button
      v-if="props.addDelBtn"
      class="h-[38px] w-[398px] rounded-[50px] bg-[#FFFFFF] dark:border-[#576776] dark:bg-[#262C36]"
    >
      Удалить заявку
    </button>
  </div>
</template>

<style scoped></style>
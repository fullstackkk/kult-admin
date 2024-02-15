<script setup lang="ts"></script>

<template>
  <div
    class="h-[290px] desktop:w-[827px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px] tabletXl:w-[620px]">
    <p class="font-'Manrope' text-xl font-medium mb-[15px] mobile:mb-[20px] tablet:mb-[0]">Прочее</p>
    <p class="font-'Manrope' text-base font-normal mb-[5px]">Откуда узнали?
      <input
        class="mb-[10px] h-[40px] w-full rounded-[20px] border bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
        placeholder="Например: от друзей..."
        type="text"
      />
    </p>
    <p class="font-'Manrope' text-base font-normal mb-[5px]">Комментарий
      <textarea
        class="font-'Manrope' h-[120px] w-full resize-none rounded-[20px] border border-[#BBC1CD] pl-[16px] pt-[8px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
        placeholder="Введите текст..."
      ></textarea>
    </p>
  </div>
</template>

<style scoped></style>
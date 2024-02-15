<script setup lang="ts"></script>

<template>
  <div
    class="h-[273px] desktop:w-[408px] rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px] tabletXl:w-[305px]">
    <p class="font-'Manrope' text-xl font-medium mt-[10px] mobile:mb-[20px] tablet:mb-[0]">Об обучении</p>
    <div>
      <p class="font-'Manrope' text-base font-normal mb-[5px]">Выбранный курс
        <select
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
        >
          <option class="pr-[10px]">Экспресс</option>
        </select>
      </p>
    </div>
    <div class="mt-[10px]">
      <p class="font-'Manrope' text-base font-normal mb-[5px]">КПП
        <select
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]">
          <option class="pr-[10px]">Механическая КПП</option>
        </select>
      </p>
    </div>
    <div class="mt-[10px]">
      <p class="font-'Manrope' text-base font-normal mb-[5px]">Тип обучения
        <select
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]">
          <option class="pr-[10px]">Очное обучение</option>
        </select>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
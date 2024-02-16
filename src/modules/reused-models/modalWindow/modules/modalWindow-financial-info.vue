<script setup lang="ts">
const emit = defineEmits(["click"]);
</script>

<template>
  <div
    class="h-[419px] w-[408px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px]"
  >
    <p class="font-'Manrope' text-xl font-medium mb-[10px] mobile:mb-[20px] tablet:mb-[0]">
      Финансовая информация
    </p>
    <div>
      <p class="font-'Manrope' text-base font-normal mb-[5px]">Статус
        <select
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
        >
          <option class="font-'Manrope' text-base font-normal">
            Записался на обучение
          </option>
        </select>
      </p>
    </div>

    <div class="relative pt-[5px]">
      <p class="font-'Manrope' mb-[5px] text-base font-normal">
        Дата оформления
        <input
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
          type="text"
        />
        <IconConstructor
          class="absolute left-[345px] top-[40px]"
          @click="emit('click')"
        >
          <calendarIcon />
        </IconConstructor>
      </p>
    </div>

    <div class="mt-[5px]">
      <p class="font-'Manrope' mb-[5px]">Тип оплаты
        <select
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
        >
          <option class="font-'Manrope'">Безналичная оплата</option>
        </select>
      </p>
    </div>
    <div class="mt-[5px]">
      <p class="font-'Manrope' mb-[5px]">Доход
        <input
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
          type="text"
        />
      </p>
    </div>
    <div class="mt-[5px]">
      <p class="font-'Manrope' mb-[5px]">Скидка
        <input
          class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
          value="0 ₽"
          type="text"
        />
      </p>
    </div>
  </div>
</template>

<style scoped></style>
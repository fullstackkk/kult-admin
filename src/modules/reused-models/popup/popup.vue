<script setup lang="ts">
import { IconConstructor } from "@/components";
import { closeIcon, calendarIcon } from "@/assets/svg";

interface Iprops {
  click: boolean;
  data: {
    id: number;
    operationTime: string;
    operationNumber: number;
    name: string;
    phoneNumber: string;
    branch: string;
    class: string;
    status: string;
    dateRegistration: string;
    income: number;
  };
}

const props = defineProps<Iprops>();
const emit = defineEmits(["click"]);
</script>

<template>
  <div
    v-if="props.click"
    @click="emit('click')"
    class="absolute left-0 top-0 z-[1] h-[100vh] w-[100%] cursor-pointer bg-[#0000006c]"
  ></div>
  <div
    v-if="props.click"
    class="absolute inset-[50%] z-[2] h-[800px] w-[1305px] translate-x-[-50%] translate-y-[-50%] rounded-[15px] bg-[#ffffff] p-[30px] dark:bg-[#262C36]"
  >
    <div class="mb-[16px] flex justify-between">
      <div class="flex flex-col dark:text-[#E4E4E4]">
        <p>Константинопольский Константин Константинович</p>
        <p>Рейтинг 4,56</p>
      </div>
      <div>
        <IconConstructor class="cursor-pointer" @click="emit('click')">
          <closeIcon class="dark:text-[#E4E4E4]" />
        </IconConstructor>
      </div>
    </div>
    <div class="mb-[30px] flex justify-between">
      <div>
        <div class="mb-[10px] flex gap-[10px]">
          <div
            class="h-[273px] w-[408px] rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4]"
          >
            <p class="mt-[10px]">Главная информация</p>
            <div>
              <p class="mb-[5px]">Фамилия Имя Отчество</p>
              <input
                class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                :value="props.data.name"
                type="text"
              />
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">Номер</p>
              <input
                class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                :value="props.data.phoneNumber"
                type="text"
              />
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">Филиал</p>
              <select
                class="select h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              >
                <option class="pr-[10px]">{{ props.data.branch }}</option>
              </select>
            </div>
          </div>
          <div
            class="h-[273px] w-[408px] rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4]"
          >
            <p class="mt-[10px]">Об обучении</p>
            <div>
              <p class="mb-[5px]">Выбранный курс</p>
              <select
                class="select h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              >
                <option class="pr-[10px]">Экспресс</option>
              </select>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">КПП</p>
              <select
                class="select h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              >
                <option class="pr-[10px]">Механическая КПП</option>
              </select>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">Тип обучения</p>
              <select
                class="select h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              >
                <option class="pr-[10px]">Очное обучение</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="h-[284px] w-[827px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4]"
        >
          <p class="mb-[15px]">Прочее</p>
          <p class="mb-[5px]">Откуда узнали?</p>
          <input
            class="mb-[10px] h-[40px] w-[388px] rounded-[20px] border bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
            placeholder="Например: от друзей..."
            type="text"
          />
          <p class="mb-[5px]">Комментарий</p>
          <textarea
            class="h-[120px] w-[807px] resize-none rounded-[20px] border border-[#BBC1CD] pl-[16px] pt-[8px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
            placeholder="Введите текст..."
          ></textarea>
        </div>
      </div>
      <div>
        <div
          class="h-[419px] w-[408px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4]"
        >
          <p class="mb-[10px]">Финансовая информация</p>
          <div>
            <p class="mb-[5px]">Статус</p>
            <select
              class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
            >
              <option>Записался на обучение</option>
            </select>
          </div>

          <div class="relative pt-[5px]">
            <p class="mb-[5px]">Дата оформления</p>
            <input
              class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              :value="props.data.dateRegistration"
              type="text"
            />
            <IconConstructor
              class="absolute left-[345px] top-[40px]"
              @click="emit('click')"
            >
              <calendarIcon />
            </IconConstructor>
          </div>
          <div class="mt-[5px]">
            <p class="mb-[5px]">Тип оплаты</p>
            <select
              class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
            >
              <option>Безналичная оплата</option>
            </select>
          </div>
          <div class="mt-[5px]">
            <p class="mb-[5px]">Доход</p>
            <input
              class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              :value="props.data.income + ',00 ₽'"
              type="text"
            />
          </div>
          <div class="mt-[5px]">
            <p class="mb-[5px]">Скидка</p>
            <input
              class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              value="0 ₽"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-[10px] dark:text-[#E4E4E4]">
      <button
        class="h-[38px] w-[398px] rounded-[50px] border border-[#DCDCDD] bg-[#E2DEFF] dark:border-[#576776] dark:bg-[#504C6A]"
      >
        Сохранить
      </button>
      <button
        class="h-[38px] w-[398px] rounded-[50px] bg-[#FFFFFF] dark:border-[#576776] dark:bg-[#262C36]"
      >
        Удалить заявку
      </button>
    </div>
  </div>
</template>

<style scoped></style>

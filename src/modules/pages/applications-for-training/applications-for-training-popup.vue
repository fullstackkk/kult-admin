<script setup lang="ts">
import { IconConstructor } from "@/components";
import { closeIcon, calendarIcon } from "@/assets/svg";

interface Iprops {
  click: boolean;
  data: {
    item: {
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
  };
}

const props = defineProps<Iprops>();
const emit = defineEmits(["click"]);
</script>

<template>
  <div
    v-if="props.click"
    @click="emit('click')"
    class="absolute left-0 top-0 z-[1] h-[100vh] w-[100%] bg-[#0000006c] cursor-pointer"
  ></div>
  <div
    v-if="props.click"
    class="absolute inset-[50%] z-[2] h-[800px] w-[1305px] translate-x-[-50%] translate-y-[-50%] bg-[#ffffff] p-[30px]"
  >
    <div class="flex justify-between mb-[16px]">
      <div class="flex flex-col">
        <p>Константинопольский Константин Константинович</p>
        <p>Рейтинг 4,56</p>
      </div>
      <div>
        <IconConstructor class="cursor-pointer" @click="emit('click')">
          <closeIcon />
        </IconConstructor>
      </div>
    </div>
    <div class="flex justify-between mb-[30px]">
      <div>
        <div class="flex gap-[10px] mb-[10px]">
          <div class="w-[408px] h-[273px] bg-[#E2DEFF] rounded-[10px] pl-[10px] pr-[10px]">
            <p class="mt-[10px]">Главная информация</p>
            <div>
              <p class="mb-[5px]">Фамилия Имя Отчество</p>
              <input
                class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] border border-[#CCC8F4]"
                :placeholder="props.data.item.name"
                type="text"
              />
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">Номер</p>
              <input
                class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] border border-[#CCC8F4]"
                :placeholder="props.data.item.phoneNumber"
                type="text"
              />
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">Филиал</p>
              <select class="select w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] pr-[16px] border border-[#CCC8F4]">
                <option class="pr-[10px]">{{ props.data.item.branch }}</option>
              </select>
            </div>
          </div>
          <div class="w-[408px] h-[273px] bg-[#E2DEFF] rounded-[10px] pl-[10px] pr-[10px]">
            <p class="mt-[10px]">Об обучении</p>
            <div>
              <p class="mb-[5px]">Выбранный курс</p>
              <select class="select w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] pr-[16px] border border-[#CCC8F4]">
                <option class="pr-[10px]">Экспресс</option>
              </select>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">КПП</p>
              <select class="select w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] pr-[16px] border border-[#CCC8F4]">
                <option class="pr-[10px]">Механическая КПП</option>
              </select>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px]">Тип обучения</p>
              <select class="select w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] pr-[16px] border border-[#CCC8F4]">
                <option class="pr-[10px]">Очное обучение</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-[827px] h-[284px] bg-[#E2DEFF] rounded-[10px] p-[10px]">
          <p class="mb-[15px]">Прочее</p>
          <p class="mb-[5px]">Откуда узнали?</p>
          <input
            class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] mb-[10px] border border-[#CCC8F4]"
            placeholder="Например: от друзей..."
            type="text"
          />
          <p class="mb-[5px]">Комментарий</p>
          <textarea
            class="w-[807px] h-[120px] resize-none rounded-[20px] pl-[16px] pt-[8px] border border-[#BBC1CD]"
            placeholder="Введите текст..."
          ></textarea>
        </div>
      </div>
      <div>
        <div class="w-[408px] h-[419px] bg-[#E2DEFF] rounded-[10px] p-[10px]">
          <p class="mb-[10px]">Финансовая информация</p>
          <div>
            <p class="mb-[5px]">Статус</p>
            <select class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] border border-[#CCC8F4]">
              <option>Записался на обучение</option>
            </select>
          </div>

          <div class="pt-[5px] relative">
            <p class="mb-[5px]">Дата оформления</p>
            <input
              class="h-[40px] w-[388px] rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px]"
              placeholder="17.09.2023"
              type="text"
            />
            <IconConstructor class="absolute top-[40px] left-[345px]" @click="emit('click')">
              <calendarIcon />
            </IconConstructor>
          </div>
          <div class="mt-[5px]">
            <p class="mb-[5px]">Тип оплаты</p>
            <select class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] border border-[#CCC8F4]">
              <option>Безналичная оплата</option>
            </select>
          </div>
          <div class="mt-[5px]">
            <p class="mb-[5px]">Доход</p>
            <input
              class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] border border-[#CCC8F4]"
              placeholder="28 900,00 ₽"
              type="text"
            />
          </div>
          <div class="mt-[5px]">
            <p class="mb-[5px]">Скидка</p>
            <input
              class="w-[388px] h-[40px] bg-[#FFFF] rounded-[20px] pl-[16px] border border-[#CCC8F4]"
              placeholder="0 ₽"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-[10px]">
      <button class="w-[398px] h-[38px] bg-[#E2DEFF] rounded-[50px] border border-[#DCDCDD]">Сохранить</button>
      <button class="w-[398px] h-[38px] bg-[#FFFFFF] rounded-[50px]">Удалить заявку</button>
    </div>
  </div>
</template>

<style scoped></style>

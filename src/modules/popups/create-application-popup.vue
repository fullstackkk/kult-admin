<script setup lang="ts">
import { PopupConstructor } from "@/components";
import { useApplicationStore } from "@/store/modules/application";

interface IProps {
  popupTitle?: string;
}
interface IEmits {
  (e: "close-popup"): void;
}
const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const applicationStore = useApplicationStore();
function closePopup() {
  emit("close-popup");
}
function createApplication() {
  // моковая функция что бы создать заявку
  applicationStore.createApplication();
}
</script>

<template>
  <popup-constructor @close-popup="closePopup" :popup-title="props.popupTitle">
    <!-- <div
      class="mb-[30px] flex justify-between gap-[10px] mobile:flex-col tabletXl:flex-row"
    >
      <div>
        <div
          class="mb-[10px] flex gap-[10px] mobile:flex-col tabletXl:flex-row"
        >
          <div
            class="h-[273px] rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px] tabletXl:w-[305px] desktop:w-[408px]"
          >
            <p
              class="font-'Manrope' mt-[10px] text-xl font-medium mobile:mb-[20px] tablet:mb-[0]"
            >
              Главная информация
            </p>
            <div>
              <p class="font-'Manrope' mb-[5px] text-base font-normal">
                Фамилия Имя Отчество
                <input
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="font-'Manrope' mb-[5px] text-base font-normal">
                Номер
                <input
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="font-'Manrope' mb-[5px] text-base font-normal">
                Филиал
                <select
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                >
                  <option class="pr-[10px]"></option>
                </select>
              </p>
            </div>
          </div>
          <div
            class="h-[273px] rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px] tabletXl:w-[305px] desktop:w-[408px]"
          >
            <p
              class="font-'Manrope' mt-[10px] text-xl font-medium mobile:mb-[20px] tablet:mb-[0]"
            >
              Об обучении
            </p>
            <div>
              <p class="font-'Manrope' mb-[5px] text-base font-normal">
                Выбранный курс
                <select
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                >
                  <option class="pr-[10px]">Экспресс</option>
                </select>
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="font-'Manrope' mb-[5px] text-base font-normal">
                КПП
                <select
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                >
                  <option class="pr-[10px]">Механическая КПП</option>
                </select>
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="font-'Manrope' mb-[5px] text-base font-normal">
                Тип обучения
                <select
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] px-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                >
                  <option class="pr-[10px]">Очное обучение</option>
                </select>
              </p>
            </div>
          </div>
        </div>
        <div
          class="h-[290px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px] tabletXl:w-[620px] desktop:w-[827px]"
        >
          <p
            class="font-'Manrope' mb-[15px] text-xl font-medium mobile:mb-[20px] tablet:mb-[0]"
          >
            Прочее
          </p>
          <p class="font-'Manrope' mb-[5px] text-base font-normal">
            Откуда узнали?
            <input
              class="mb-[10px] h-[40px] w-full rounded-[20px] border bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
              placeholder="Например: от друзей..."
              type="text"
            />
          </p>
          <p class="font-'Manrope' mb-[5px] text-base font-normal">
            Комментарий
            <textarea
              class="font-'Manrope' h-[120px] w-full resize-none rounded-[20px] border border-[#BBC1CD] pl-[16px] pt-[8px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
              placeholder="Введите текст..."
            ></textarea>
          </p>
        </div>
      </div>
      <div
        class="h-[419px] w-[408px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] mobile:w-[290px] tablet:w-[408px]"
      >
        <p
          class="font-'Manrope' mb-[10px] text-xl font-medium mobile:mb-[20px] tablet:mb-[0]"
        >
          Финансовая информация
        </p>
        <div>
          <p class="font-'Manrope' mb-[5px] text-base font-normal">
            Статус
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
          <p class="font-'Manrope' mb-[5px]">
            Тип оплаты
            <select
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
            >
              <option class="font-'Manrope'">Безналичная оплата</option>
            </select>
          </p>
        </div>
        <div class="mt-[5px]">
          <p class="font-'Manrope' mb-[5px]">
            Доход
            <input
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
          </p>
        </div>
        <div class="mt-[5px]">
          <p class="font-'Manrope' mb-[5px]">
            Скидка
            <input
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#FFFF] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              value="0 ₽"
              type="text"
            />
          </p>
        </div>
      </div>
      <modalWindowOther class="mt-[10px] tabletXl:mt-[0] tabletXl:hidden" />
    </div> -->
  </popup-constructor>
</template>

<style scoped></style>

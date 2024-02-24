<script setup lang="ts">
import { PopupConstructor } from "@/components/popup";
import { useApplicationStore } from "@/store/modules/application";
import { validationMainInfoFullName,validationMainInfoPhoneNumber,validationFinancialInfoIncome } from "@/components/popup/popup-input-validation";
import { CustomSelect } from "@/components/ui";
import { IconConstructor } from "@/components";
import { calendarIcon } from "@/assets/svg";
import { ref } from "vue";

interface IProps {
  popupTitle?: string;
}
interface IEmits {
  (e: "close-popup"): void;
}
const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const applicationStore = useApplicationStore();

const arr = ["asd", "fd", "f4"];
let fullName = ref()
let phoneNumber = ref()
let income = ref()
let discount = ref()

function closePopup() {
  emit("close-popup");
}
function createApplication() {
  // моковая функция что бы создать заявку
  applicationStore.createApplication();
}
</script>

<template>
  <popup-constructor
    :addPopupDeleteButton="false"
    @close-popup="closePopup"
    :popup-title="props.popupTitle"
  >
    <div
      class="mb-[30px] flex justify-between gap-[10px] mobile:flex-col mobile:items-center tablet:items-start tabletXl:flex-row"
    >
      <div class=" mobile:size-full tablet:size-auto">
        <div
          class="mb-[10px] flex gap-[10px] mobile:flex-col tabletXl:flex-row"
        >
          <div
            class="size-full rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px] tabletXl:w-[305px] desktop:w-[408px]"
          >
            <p
              class="mt-[10px] text-xl font-medium mb-[20px]"
            >
              Главная информация
            </p>
            <div>
              <div class="flex gap-[10px]">
                <p class=" text-base font-normal">Фамилия Имя Отчество</p>
                <p class=" text-base text-[#f33939]">{{ validationMainInfoFullName(fullName) }}</p>
              </div>
                <input
                  v-model="fullName"
                  placeholder="Фамилия Имя Отчество"
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
            </div>
            <div class="mt-[10px]">
              <div class="flex gap-[10px]">
                <p class="mb-[5px] text-base font-normal">Номер</p>
                <p class=" text-base text-[#f33939]">{{ validationMainInfoPhoneNumber(phoneNumber) }}</p>
              </div>
                <input
                  v-model="phoneNumber"
                  placeholder="+7 (999) 999-99-99"
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                Филиал
                <CustomSelect :selectValues="arr" />
              </p>
            </div>
          </div>
          <div
            class="size-full rounded-[10px] bg-[#E2DEFF] px-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px] tabletXl:w-[305px] desktop:w-[408px]"
          >
            <p
              class="mb-[20px] mt-[10px] text-xl font-medium"
            >
              Об обучении
            </p>
            <div>
              <p class="mb-[5px] text-base font-normal">
                Выбранный курс
                <CustomSelect :selectValues="arr" />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                КПП
                <CustomSelect :selectValues="arr" />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                Тип обучения
                <CustomSelect :selectValues="arr" />
              </p>
            </div>
          </div>
        </div>
        <div
          class="size-full rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px] tabletXl:w-[620px] desktop:w-[827px]"
        >
          <p
            class="mb-[20px] text-xl font-medium"
          >
            Прочее
          </p>
          <p class="mb-[5px] text-base font-normal">
            Откуда узнали?
            <input
              class="mb-[10px] h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
              placeholder="Например: от друзей..."
              type="text"
            />
          </p>
          <p class=" mb-[5px] text-base font-normal">
            Комментарий
            <textarea
              class="h-[120px] w-full resize-none rounded-[20px] border border-[#BBC1CD] pl-[16px] pt-[8px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
              placeholder="Введите текст..."
            ></textarea>
          </p>
        </div>
      </div>
      <div
        class="size-full rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px]"
      >
        <p class="mb-[20px] text-xl font-medium">
          Финансовая информация
        </p>
        <div>
          <p class=" mb-[5px] text-base font-normal">
            Статус
            <CustomSelect :selectValues="arr" />
          </p>
        </div>

        <div class="pt-[5px]">
          <p class="mb-[5px] text-base font-normal">
            Дата оформления
            <div class="relative h-[40px]">
              <input
              value="17.09.23"
              class="relative size-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
            <IconConstructor class="absolute right-[16px] top-[5px]">
              <!-- @click="emit('click')" -->
              <calendarIcon/>
            </IconConstructor>
            </div>
          </p>
        </div>

        <div class="mt-[5px]">
          <p class=" mb-[5px]">
            Тип оплаты
            <CustomSelect :selectValues="arr" />
          </p>
        </div>
        <div class="mt-[5px]">
          <p class="mb-[5px]">Доход</p>
          <p class=" text-base text-[#f33939]">{{ validationFinancialInfoIncome(income) }}</p>
            <input
              v-model="income"
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
        </div>
        <div class="mt-[5px]">
          <p class=" mb-[5px]">Скидка</p>
            <p class=" text-base text-[#f33939]">{{ validationFinancialInfoIncome(discount) }}</p>
            <input
              v-model="discount"
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
        </div>
      </div>
      <modalWindowOther class="mt-[10px] tabletXl:mt-[0] tabletXl:hidden" />
    </div>
  </popup-constructor>
</template>

<style scoped></style>

<script setup lang="ts">
import { PopupConstructor } from "@/components/popup";
import { useApplicationStore } from "@/store/modules/application";
import { validationMainInfoFullName,validationMainInfoPhoneNumber,validationFinancialInfoIncome } from "@/components/popup/popup-input-validation";
import { CustomSelect } from "@/components/ui";
import { IconConstructor } from "@/components";
import { calendarIcon } from "@/assets/svg";
import { reactive } from "vue";
import { IApplication } from "@/models/response/ApllicationsResponse";

interface IApplicationSelectOptions{
  filial: ["Межда","Озерки"]
  chosenCourse: ["Мото A","A+B","Профи","Оптима","Экспресс","Эконом"]
  cpp: ["МКПП","АКПП"]
  typeOfTraining:["Онлайн","Очно"]
  offerStatus:["Новая заявка","В обработке","Не отвечает","Думает","Скоро придет","Записался(ась) на обучение","Завершил обучение"]
  paymentType: ["Наличка","Безнал"] | "Наличка" | "Безнал"
}
interface IProps {
  popupTitle?: string;
}
interface IEmits {
  (e: "show-popup", value: boolean):boolean
}


const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const applicationStore = useApplicationStore();

const applicationSelectOptions:IApplicationSelectOptions = ({
  filial: ["Межда","Озерки"],
  chosenCourse: ["Мото A","A+B","Профи","Оптима","Экспресс","Эконом"],
  cpp: ["МКПП","АКПП"],
  typeOfTraining: ["Онлайн","Очно"],
  offerStatus: ["Новая заявка","В обработке","Не отвечает","Думает","Скоро придет","Записался(ась) на обучение","Завершил обучение"],
  paymentType: ["Наличка","Безнал"],
});
const applicationData = reactive<IApplication>({
  number: 89103232323,
  fio: {
    firstname: "",
    lastname: "",
    patronomic: "",
  },
  phone: 89999999999,
  filial: "Межда",
  chosenCourse: "Мото A",
  cpp: "МКПП",
  typeOfTraining: "Онлайн",
  offerStatus: "Новая заявка",
  paymentType: "Наличка",
  income: 0,
  discount: 0,
  comment: "",
});


function showPopup(showPopup: boolean) {
  emit("show-popup", showPopup)
  showPopup
    ? `${(document.body.style.overflow = "hidden")}`
    : `${(document.body.style.overflow = "auto")}`;
}

function createApplication() {
  // моковая функция что бы создать заявку
  applicationStore.createApplication();
}

function recordFilial(selectedOption: "Межда" | "Озерки"){
  applicationData.filial = selectedOption
  console.log(applicationData)
}
function recordChosenCourse(selectedOption: "Мото A" | "A+B" | "Профи" | "Оптима" | "Экспресс" | "Эконом"){
  applicationData.chosenCourse = selectedOption
}
function recordCpp(selectedOption: "МКПП" | "АКПП"){
  applicationData.cpp = selectedOption
}
function recordTypeOfTraining(selectedOption: "Онлайн" | "Очно"){
  applicationData.typeOfTraining = selectedOption
}
function recordOfferStatus(selectedOption: "Новая заявка"| "В обработке"| "Не отвечает"| "Думает"| "Скоро придет"| "Записался(ась) на обучение"| "Завершил обучение"){
  applicationData.offerStatus = selectedOption
}
function recordPaymentType(selectedOption:"Наличка" | "Безнал"){
  applicationData.paymentType = selectedOption
}
</script>

<template>
  <popup-constructor
    :addPopupDeleteButton="false"
    @close-popup="showPopup(false)"
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
              class="mb-[20px] mt-[10px] text-xl font-medium"
            >
              Главная информация
            </p>
            <div>
              <div class="flex gap-[10px]">
                <p class=" text-base font-normal">Фамилия Имя Отчество</p>
                <p class=" text-base text-[#f33939]">{{ validationMainInfoFullName(applicationData.fio.firstname) }}</p>
              </div>
                <input
                  v-model="applicationData.fio.firstname"
                  placeholder="Фамилия Имя Отчество"
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
            </div>
            <div class="mt-[10px]">
              <div class="flex gap-[10px]">
                <p class="mb-[5px] text-base font-normal">Номер</p>
                <p class=" text-base text-[#f33939]">{{ validationMainInfoPhoneNumber(applicationData.phone) }}</p>
              </div>
                <input
                  v-model="applicationData.phone"
                  placeholder="+7 (999) 999-99-99"
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                Филиал
                <CustomSelect @changeValue="recordFilial" :selectValues="applicationSelectOptions.filial" />
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
                <CustomSelect @changeValue="recordChosenCourse" :selectValues="applicationSelectOptions.chosenCourse" />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                КПП
                <CustomSelect @changeValue="recordCpp" :selectValues="applicationSelectOptions.cpp" />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                Тип обучения
                <CustomSelect @changeValue="recordTypeOfTraining" :selectValues="applicationSelectOptions.typeOfTraining" />
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
              class=" mb-[10px] h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
              placeholder="Например: от друзей..."
              type="text"
            />
          </p>
          <p class=" mb-[5px] text-base font-normal">
            Комментарий
            <textarea
              v-model="applicationData.comment"
              class=" h-[120px] w-full resize-none rounded-[20px] border border-[#BBC1CD] pl-[16px] pt-[8px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
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
            <CustomSelect @changeValue="recordOfferStatus" :selectValues="applicationSelectOptions.offerStatus" />
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
            <CustomSelect @changeValue="recordPaymentType" :selectValues="applicationSelectOptions.paymentType" />
          </p>
        </div>
        <div class="mt-[5px]">
          <p class="mb-[5px]">Доход</p>
          <p class=" text-base text-[#f33939]">{{ validationFinancialInfoIncome(applicationData.income) }}</p>
            <input
              v-model="applicationData.income"
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
        </div>
        <div class="mt-[5px]">
          <p class=" mb-[5px]">Скидка</p>
            <p class=" text-base text-[#f33939]">{{ validationFinancialInfoIncome(applicationData.discount) }}</p>
            <input
              v-model="applicationData.discount"
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
        </div>
      </div>
    </div>
  </popup-constructor>
</template>

<style scoped></style>

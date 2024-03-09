<script setup lang="ts">
import { PopupConstructor } from "@/components/popup";
import { useApplicationStore } from "@/store/modules/application";
import {
  validation,
  checkStringHasOnlyNumber,
  checkStringOnPhone,
  checkStringHasOnlyRussianWord,
} from "@/components/popup/popup-input-validation";
import { CustomSelect, CustomDateInput, MainInput } from "@/components/ui";
import { reactive, ref, watchEffect } from "vue";
import {
  IApplication,
  chosenCourse,
  cpp,
  filial,
  offerStatus,
  paymentType,
  typeOfTraining,
} from "@/models/response/ApllicationsResponse";
import { enumToString } from "@/utils/enum-to-string";

interface IProps {
  popupTitle?: string;
}
interface IEmits {
  (e: "show-popup", value: boolean): boolean;
  (e: "show-error-popup", value: boolean): boolean;
  (e: "give-an-create-application-error", value: string): string;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const applicationStore = useApplicationStore();

let fullValidation = ref();

const applicationData = reactive<IApplication>({
  isActive: true,
  fio: {
    firstname: "",
    lastname: "",
    patronomic: "",
  },
  phone: 0,
  filial: filial.mezda,
  chosenCourse: chosenCourse.ekonm,
  cpp: cpp.AKPP,
  typeOfTraining: typeOfTraining.ofline,
  offerStatus: offerStatus.newAplication,
  paymentType: paymentType.onlinePayment,
  income: 0, // доход
  discount: 0, // скидка
  comment: "", // коментарий
});
const applicationErrors = reactive({
  fio: "",
  phone: "",
  income: "",
  discount: "",
});

function showPopup(showPopup: boolean) {
  emit("show-popup", showPopup);
}

async function createApplication() {
  const serverResponse = await applicationStore.createApplication(
    applicationData
  );
  console.log(serverResponse);
  if (!serverResponse == true) {
    emit("show-error-popup", true),
      emit("give-an-create-application-error", String(serverResponse));
  }
  showPopup(false);
}
function addFulValidation() {
  // fullValidation.value =
  //   validation(applicationData.fio.firstname, "fullName") +
  //   validation(applicationData.phone, "phoneNumber") +
  //   validation(applicationData.income, "infoIncome") +
  //   validation(applicationData.discount, "infoDiscount");
}
function setFio(fullFio: string) {
  const fioArr = fullFio.split(" ").filter((w) => w !== "");

  console.log(fioArr);
  if (fioArr.length !== 3) {
    applicationErrors.fio = "Введите полное ФИО";
    return;
  }

  let checkOnlyRussinWord = true;
  fioArr.forEach((word) => {
    if (!checkStringHasOnlyRussianWord(word)) {
      checkOnlyRussinWord = false;
    }
  });
  console.log(checkOnlyRussinWord);
  if (!checkOnlyRussinWord) {
    applicationErrors.fio = "Используйте киррилицу";
    return;
  }
  applicationErrors.fio = "";
  applicationData.fio.firstname = fullFio.split(" ")[0];
  applicationData.fio.lastname = fullFio.split(" ")[1];
  applicationData.fio.patronomic = fullFio.split(" ")[2];
}
function setFilial(selectedOption: filial) {
  applicationData.filial = selectedOption;
}
function setChosenCourse(selectedOption: chosenCourse) {
  applicationData.chosenCourse = selectedOption;
}
function setCpp(selectedOption: cpp) {
  applicationData.cpp = selectedOption;
}
function setTypeOfTraining(selectedOption: typeOfTraining) {
  applicationData.typeOfTraining = selectedOption;
}
function setOfferStatus(selectedOption: offerStatus) {
  applicationData.offerStatus = selectedOption;
}
function setPaymentType(selectedOption: paymentType) {
  applicationData.paymentType = selectedOption;
}
function setRegDate(date: Date) {
  console.log(date);
}

watchEffect(() => {
  // setFio();
  addFulValidation();
});
</script>

<template>
  <popup-constructor
    :addPopupDeleteButton="false"
    @close-popup="showPopup(false)"
    @save-value="createApplication()"
    :stateSaveButton="!fullValidation"
    :isActivePopupSaveButton="true"
    :popup-title="props.popupTitle"
  >
    <!-- передаем состояние валидации для saveButton -->
    <div
      class="mb-[30px] flex justify-between gap-[10px] mobile:flex-col mobile:items-center tablet:items-start tabletXl:flex-row"
    >
      <div class="mobile:size-full tablet:size-auto">
        <div
          class="mb-[10px] flex gap-[10px] mobile:flex-col tabletXl:flex-row"
        >
          <div
            class="flex w-full flex-col gap-[10px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px] tabletXl:w-[305px] desktop:w-[408px]"
          >
            <p class="text-xl font-medium">Главная информация</p>
            <main-input
              :error="applicationErrors.fio"
              placeholder="Фамилия Имя Отчество"
              descriptionText="Фамилия Имя Отчество"
              @input="(str) => setFio(str.value)"
            ></main-input>

            <main-input
              v-model="applicationData.phone"
              placeholder="+7 (999) 999-99-99"
              descriptionText="Телефон"
            ></main-input>
            <!-- @vue-ignore -->
            <CustomSelect
              description-text="Филиал"
              @changeValue="setFilial"
              :selectValues="enumToString(filial)"
            />
          </div>
          <div
            class="flex w-full flex-col gap-[10px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px] tabletXl:w-[305px] desktop:w-[408px]"
          >
            <p class="text-xl font-medium">Об обучении</p>
            <!-- @vue-ignore -->
            <CustomSelect
              description-text="Выбранный курс"
              @changeValue="setChosenCourse"
              :selectValues="enumToString(chosenCourse)"
            />
            <!-- @vue-ignore -->
            <CustomSelect
              description-text="КПП"
              @changeValue="setCpp"
              :selectValues="enumToString(cpp)"
            />
            <!-- @vue-ignore -->
            <CustomSelect
              description-text="Тип обучения"
              @changeValue="setTypeOfTraining"
              :selectValues="enumToString(typeOfTraining)"
            />
          </div>
        </div>
        <div
          class="flex w-full flex-col gap-[10px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px] tabletXl:w-[620px] desktop:w-[827px]"
        >
          <p class="text-xl font-medium">Прочее</p>
          <main-input
            error=""
            placeholder="Например: от друзей..."
            descriptionText="Откуда узнали?"
          ></main-input>
          <p class="pl-[12px] text-base font-normal">Комментарий</p>
          <textarea
            v-model="applicationData.comment"
            class="h-[120px] w-full resize-none rounded-[20px] border border-[#BBC1CD] pl-[16px] pt-[8px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder-[#757575]"
            placeholder="Введите текст..."
          ></textarea>
        </div>
      </div>
      <div
        class="flex w-full flex-col gap-[10px] rounded-[10px] bg-[#E2DEFF] p-[10px] dark:bg-[#504C6A] dark:text-[#E4E4E4] tablet:w-[408px]"
      >
        <p class="mb-[20px] text-xl font-medium">Финансовая информация</p>
        <!-- @vue-ignore -->
        <CustomSelect
          description-text="Статус"
          @changeValue="setOfferStatus"
          :selectValues="enumToString(offerStatus)"
        />

        <div class=" ">
          <p class="mb-[5px] pl-[12px] text-base font-normal">
            Дата оформления
          </p>
          <CustomDateInput @changeValue="setRegDate" />
        </div>

        <!-- @vue-ignore -->
        <CustomSelect
          description-text="Тип оплаты"
          @changeValue="setPaymentType"
          :selectValues="enumToString(paymentType)"
        />
        <main-input
          v-model="applicationData.phone"
          placeholder="Сумма в рублях"
          descriptionText="Доход"
          type="number"
        ></main-input>
        <main-input
          v-model="applicationData.phone"
          placeholder="Сумма в рублях"
          descriptionText="Скидка"
          type="number"
        ></main-input>
      </div>
    </div>
  </popup-constructor>
</template>

<style scoped></style>

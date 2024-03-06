<script setup lang="ts">
import { PopupConstructor } from "@/components/popup";
import { useApplicationStore } from "@/store/modules/application";
import { validation } from "@/components/popup/popup-input-validation";
import { CustomSelect, CustomDateInput } from "@/components/ui";
import { reactive, ref, watchEffect } from "vue";
import { IApplication,chosenCourse,cpp,filial,offerStatus,paymentType,typeOfTraining } from "@/models/response/ApllicationsResponse";
import {enumToString} from "@/utils/enum-to-string"

interface IProps {
  popupTitle?: string;
}
interface IEmits {
  (e: "show-popup", value: boolean):boolean
  (e: "show-error-popup", value: boolean):boolean
  (e: "give-an-create-application-error", value: string):string
}


const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const applicationStore = useApplicationStore();

let fullFio = ref("")
let fullValidation = ref()

const applicationData = reactive<IApplication>({
  isActive: true,
  number: 0,
  fio: {
    firstname: "",
    lastname: "",
    patronomic: "",
  },
  phone: 79633094589,
  filial: filial.mezda,
  chosenCourse: chosenCourse.ekonm,
  cpp: cpp.AKPP,
  typeOfTraining: typeOfTraining.ofline,
  offerStatus: offerStatus.newAplication,
  paymentType: paymentType.onlinePayment,
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

async function createApplication() {
  // моковая функция что бы создать заявку
  const serverResponse = await applicationStore.createApplication(applicationData)
  if (serverResponse == true){
    applicationStore.createApplication(applicationData);
  } else (
    emit("show-error-popup", true),
    emit("give-an-create-application-error", String(serverResponse))
  )
  showPopup(false)
}
function addFulValidation(){
 fullValidation.value = validation(applicationData.fio.firstname ,"fullName") + validation(applicationData.phone,"phoneNumber") + validation(applicationData.income,"infoIncome") + validation(applicationData.discount, "infoDiscount")
}
function setFio(){
  applicationData.fio.firstname = fullFio.value.split(' ')[0]
  applicationData.fio.lastname = fullFio.value.split(' ')[1]
  applicationData.fio.patronomic = fullFio.value.split(' ')[2]
}
function setFilial(selectedOption: filial){
  applicationData.filial = selectedOption
}
function setChosenCourse(selectedOption: chosenCourse){
  applicationData.chosenCourse = selectedOption
}
function setCpp(selectedOption: cpp){
  applicationData.cpp = selectedOption
}
function setTypeOfTraining(selectedOption: typeOfTraining){
  applicationData.typeOfTraining = selectedOption
}
function setOfferStatus(selectedOption:offerStatus){
  applicationData.offerStatus = selectedOption
}
function setPaymentType(selectedOption: paymentType){
  applicationData.paymentType = selectedOption
}

watchEffect(()=>{
  setFio()
  addFulValidation()
})
</script>

<template>
  <popup-constructor
    :addPopupDeleteButton="false"
    @close-popup="showPopup(false)"
    @save-value="createApplication()"
    :stateSaveButton = !(fullValidation)
    :isActivePopupSaveButton="false"
    :popup-title="props.popupTitle"
  >
  <!-- передаем состояние валидации для saveButton -->
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
                <p class=" text-base text-[#f33939]">{{validation(applicationData.fio.firstname ,"fullName")}}</p>
              </div>
                <input
                  v-model="fullFio"
                  placeholder="Фамилия Имя Отчество"
                  class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
                  type="text"
                />
            </div>
            <div class="mt-[10px]">
              <div class="flex gap-[10px]">
                <p class="mb-[5px] text-base font-normal">Номер</p>
                <p class=" text-base text-[#f33939]">{{ validation(applicationData.phone,"phoneNumber") }}</p>
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
                <!-- @vue-ignore -->
                <CustomSelect @changeValue="setFilial" :selectValues="enumToString(filial)" />
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
                <!-- @vue-ignore -->
                <CustomSelect @changeValue="setChosenCourse" :selectValues="enumToString(chosenCourse)" />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                КПП
                <!-- @vue-ignore -->
                <CustomSelect @changeValue="setCpp" :selectValues="enumToString(cpp)" />
              </p>
            </div>
            <div class="mt-[10px]">
              <p class="mb-[5px] text-base font-normal">
                Тип обучения
                <!-- @vue-ignore -->
                <CustomSelect @changeValue="setTypeOfTraining" :selectValues="enumToString(typeOfTraining)" />
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
            <!-- @vue-ignore -->
            <CustomSelect @changeValue="setOfferStatus" :selectValues="enumToString(offerStatus)" />
          </p>
        </div>

        <div class="pt-[5px]">
          <p class="mb-[5px] text-base font-normal">
            Дата оформления
            <div class="relative h-[40px]">
              <CustomDateInput/>
            </div>
          </p>
        </div>

        <div class="mt-[5px]">
          <p class=" mb-[5px]">
            Тип оплаты
            <!-- @vue-ignore -->
            <CustomSelect @changeValue="setPaymentType" :selectValues="enumToString(paymentType)" />
          </p>
        </div>
        <div class="mt-[5px]">
          <p class="mb-[5px]">Доход</p>
          <p class=" text-base text-[#f33939]">{{ validation(applicationData.income,"infoIncome") }}</p>
            <input
              v-model="applicationData.income"
              class="h-[40px] w-full rounded-[20px] border border-[#CCC8F4] bg-[#fafafa] pl-[16px] dark:border-[#576776] dark:bg-[#262C36]"
              type="text"
            />
        </div>
        <div class="mt-[5px]">
          <p class=" mb-[5px]">Скидка</p>
            <p class=" text-base text-[#f33939]">{{ validation(applicationData.discount, "infoDiscount") }}</p>
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

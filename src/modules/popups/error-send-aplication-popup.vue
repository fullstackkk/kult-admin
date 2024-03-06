<script setup lang="ts">
import { PopupConstructor } from "@/components/popup";
interface IEmits {
  (e: "show-error-popup", value: boolean): boolean;
}
interface IProps{
  error: string
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>();

function showPopup(showPopup: boolean) {
  emit("show-error-popup", showPopup)
  showPopup
    ? `${(document.body.style.overflow = "hidden")}`
    : `${(document.body.style.overflow = "auto")}`;
}
</script>

<template>
  <popup-constructor
    :popupTitle="'Ошибка'"
    :addPopupDeleteButton="false"
    :addPopupSaveButton="false"
    @close-popup="showPopup(false)"
  > 
    <p>Произошла ошибка со стороны сервера!!!</p>
    <p>{{ props.error }}</p>
  </popup-constructor>
</template>


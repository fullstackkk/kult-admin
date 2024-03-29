<script setup lang="ts">
import { IconConstructor } from "@/components";
import { closeIcon } from "@/assets/svg";
import { useScrollLock, onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

interface IProps {
  popupTitle?: string;
  addPopupDeleteButton: boolean;
  addPopupSaveButton: boolean;
  stateSaveButton: boolean;
}
interface IEmits {
  (e: "close-popup"): void;
  (e: "save-value"): void;
}

const props = withDefaults(defineProps<IProps>(), {
  popupTitle: "",
  addPopupDeleteButton: false,
  addPopupSaveButton: true,
  stateSaveButton: false,
});
const emit = defineEmits<IEmits>();
const popup = ref<HTMLElement | null>(null);
const modal = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(popup);

function closePopup() {
  emit("close-popup");
}
function onClickSaveButton() {
  if (props.stateSaveButton) {
    emit("save-value");
  }
}

onClickOutside(modal, closePopup);
onMounted(() => {
  isLocked.value = true;
  document.body.style.overflow = "hidden";
});
onUnmounted(() => {
  document.body.style.overflow = "auto";
});
</script>

<template>
  <div
    ref="popup"
    class="fixed inset-0 z-[1] flex h-screen w-screen cursor-pointer items-center justify-center bg-[#0000006c]"
  >
    <div
      ref="modal"
      class="absolute z-[2] size-full cursor-default overflow-y-auto rounded-[15px] bg-[#ffffff] p-[15px] dark:bg-[#262C36] mobile:top-0 mobile:h-full tablet:top-auto tablet:h-[800px] tablet:w-fit tablet:p-[30px]"
    >
      <div class="mb-[16px] flex justify-between">
        <p
          class="flex flex-col dark:text-[#E4E4E4] mobile:text-2xl tablet:text-[32px]"
        >
          {{ props.popupTitle }}
        </p>
        <IconConstructor class="cursor-pointer" @click="closePopup">
          <close-icon class="dark:text-[#E4E4E4]" />
        </IconConstructor>
      </div>
      <slot></slot>
      <div
        class="flex justify-center gap-[10px] dark:text-[#E4E4E4] tablet:justify-start"
      >
        <button
          v-if="props.addPopupSaveButton"
          :class="
            stateSaveButton ? 'bg-[#E2DEFF] dark:bg-[#504C6A]' : 'bg-[#b2b2b2]'
          "
          class="h-[38px] w-full rounded-[50px] border border-[#DCDCDD] dark:border-[#576776] tabletXl:w-[398px]"
          @click="onClickSaveButton"
        >
          Сохранить
        </button>
        <button
          v-if="props.addPopupDeleteButton"
          class="h-[38px] w-full rounded-[50px] bg-[#FFFFFF] dark:border-[#576776] dark:bg-[#262C36] tabletXl:w-[398px]"
        >
          Удалить заявку
        </button>
      </div>
    </div>
  </div>
</template>

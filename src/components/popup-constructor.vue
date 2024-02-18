<script setup lang="ts">
import { IconConstructor } from "@/components";
import { closeIcon } from "@/assets/svg";
import { useScrollLock } from "@vueuse/core";
import { onMounted, ref } from "vue";

interface IProps {
  popupTitle?: string;
}
interface IEmits {
  (e: "close-popup"): void;
  (e: "save-value"): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const popup = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(popup);

function closePopup() {
  isLocked.value = false; // unlock
  emit("close-popup");
}
function onClickSaveButton() {
  emit("save-value");
}
onMounted(() => {
  isLocked.value = true;
});
</script>

<template>
  <div
    ref="popup"
    @click="closePopup"
    class="fixed inset-0 z-[2] flex h-screen w-screen cursor-pointer items-center justify-center bg-[#0000006c]"
  >
    <div
      class="absolute z-[2] h-fit w-full rounded-[15px] bg-[#ffffff] p-[15px] dark:bg-[#262C36] tablet:w-fit tablet:p-[30px]"
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
      <div class="flex gap-[10px] dark:text-[#E4E4E4]">
        <div
          class="flex gap-[10px] dark:text-[#E4E4E4] tablet:mx-auto tabletXl:mx-[0]"
        >
          <button
            class="h-[38px] rounded-[50px] border border-[#DCDCDD] bg-[#E2DEFF] dark:border-[#576776] dark:bg-[#504C6A] mobile:w-[290px] tabletXl:w-[398px]"
            @click="onClickSaveButton"
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
    </div>
  </div>
</template>

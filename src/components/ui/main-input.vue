<script setup lang="ts">
// пока иконками мы не занимаемся
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { reactive, watch } from "vue";

interface IEmits {
  (e: "input", payload: { value: string }): void;
  (e: "select", payload: { value: string; index: number }): void;
  (e: "focus"): void;
  (e: "blur", payload: string | null): void;
  (e: "submit", payload: string | null): void;
}
const emit = defineEmits<IEmits>();

interface IProps {
  placeholder?: string;
  focus?: boolean;
  loading?: boolean;
  inputValue: string;
  fieldClass?: string;
  inputClass?: string;
  inputRequired?: boolean;
  size?: "xs" | "sm" | "" | "lg" | "xl";
  error?: string;
  descriptionText: string;
  type?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: "",
  focus: false,
  loading: false,
  inputValue: "",
  fieldClass: "",
  inputClass: "",
  inputRequired: false,
  size: "",
  error: "",
  descriptionText: "",
  type: "text",
});
interface IState {
  value: string;
  focused: boolean;
}
const state = reactive<IState>({
  value: "",
  focused: false,
});
function onInput(event: Event) {
  state.value = (event.target as HTMLInputElement).value;
  state.focused = true;
  emit("input", {
    value: state.value,
  });
}

function onFocus() {
  state.focused = true;
  emit("focus");
}

function blur() {
  state.value = state.value.trim();
  emit("blur", state.value);
}
function submit() {
  emit("submit", state.value);
  console.log("submit");
}

watch(
  () => props.inputValue,
  () => {
    state.value = props.inputValue || "";
  },
  { immediate: true }
);
</script>
<template>
  <label class="relative flex flex-col" :class="[props.fieldClass]">
    <p v-if="descriptionText" class="pl-[12px] text-base font-normal">
      {{ descriptionText }}
    </p>
    <input
      :class="[props.inputClass, props.size]"
      :value="state.value"
      :placeholder="props.placeholder"
      :required="props.inputRequired"
      :maxlength="100"
      :type="type"
      class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-solid border-[#E2DEFF] bg-purplprimary px-[16px] py-[8px] dark:border-[#576776] dark:bg-[#262C36]"
      autocomplete="off"
      name="address-string"
      @input="onInput"
      @focus="onFocus()"
      @blur="blur()"
      @keyup.enter="submit()"
    />
    <p v-if="error" class="pl-[12px] text-[12px] text-[#f33939]">{{ error }}</p>
    <slot></slot>
    <!-- <icon-constructor
      class="absolute right-[16px] top-[8px]"
      :height="24"
      :width="24"
    >
      <search-icon />
    </icon-constructor> -->
  </label>
</template>

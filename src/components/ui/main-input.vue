<script setup lang="ts">
// пока иконками мы не занимаемся
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { reactive, watch } from "vue";

interface IEmits {
  (e: "input", payload: { value: string; fromSuggestions: boolean }): void;
  (e: "select", payload: { value: string; index: number }): void;
  (e: "focus"): void;
  (e: "blur", payload: string | null): void;
  (e: "submit", payload: string | null): void;
  (e: "update:search-value", payload: string): void;
  (e: "remove-option"): void;
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
    fromSuggestions: false,
  });
  syncInputValue();
}
function syncInputValue() {
  const newValue = state.value;
  if (props.inputValue !== newValue) {
    emit("update:search-value", newValue);
  }
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
  <label class="relative" :class="[props.fieldClass]"
    ><input
      :class="[props.inputClass, props.size]"
      :value="state.value"
      :placeholder="props.placeholder"
      :required="props.inputRequired"
      :maxlength="100"
      type="text"
      class="flex cursor-pointer items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] bg-purplprimary px-[16px] py-[8px]"
      autocomplete="off"
      name="address-string"
      @input="onInput"
      @focus="onFocus()"
      @blur="blur()"
      @keyup.enter="submit()"
    />
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

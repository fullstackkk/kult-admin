import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

export const isMobile = computed(() => width.value < 768);
export const isTablet = computed(
  () => width.value >= 768 && width.value < 1440
);
export const isDesctop = computed(() => width.value >= 1440);

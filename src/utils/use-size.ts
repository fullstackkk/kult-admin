import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const isMobile = computed(() => width.value < 768);
const isTablet = computed(() => width.value > 767 && width.value < 1440);
const isDesctop = computed(() => width.value > 1440);

export default {
  isMobile,
  isTablet,
  isDesctop,
};

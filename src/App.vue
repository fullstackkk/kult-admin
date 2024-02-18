<script setup lang="ts">
import { computed } from "vue";
import { useAppStateStore } from "@/store/modules/app-state";
const appStateStore = useAppStateStore();
const pageTitle = computed(() => appStateStore.pageTitle);
</script>
<template>
  <teleport to="head">
    <title>{{ pageTitle }}</title>
  </teleport>
  <router-view />
</template>

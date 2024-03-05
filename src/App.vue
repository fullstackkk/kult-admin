<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAppStateStore } from "@/store/modules/app-state";
import { useUserStore } from "@/store/modules/user";

const appStateStore = useAppStateStore();
const userStore = useUserStore();
const pageTitle = computed(() => appStateStore.pageTitle);

onMounted(() => {
  if (localStorage.getItem("token")) userStore.checkAuth();
});
</script>
<template>
  <teleport to="head">
    <title>{{ pageTitle }}</title>
  </teleport>
  <router-view />
</template>

<script setup lang="ts">
import { computed } from "vue";

const title = computed(() => "Админка");
</script>
<template>
  <teleport to="head">
    <title>{{ title }}</title>
  </teleport>
  <router-view />
</template>

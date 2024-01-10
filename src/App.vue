<script setup lang="ts">
import { computed } from "vue";

const title = computed(() => "Админка");
</script>
<template>
  <div>1111111</div>
  <teleport to="head">
    <title>{{ title }}</title>
  </teleport>
  <router-view />
</template>

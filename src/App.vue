<script setup lang="ts">
import { MainHeader, MainSidebar } from "@/components";
</script>
<template>
  <div class="flex h-screen flex-col">
    <MainHeader />
    <div class="flex gap-[20px]">
      <MainSidebar />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss"></style>

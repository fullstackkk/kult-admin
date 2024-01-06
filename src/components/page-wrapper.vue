<script setup lang="ts">
import { MainHeader, MainSidebar } from "@/components";
</script>
<template>
  <div class="flex h-screen flex-col">
    <MainHeader />
    <div class="flex gap-[20px]">
      <MainSidebar />
      <div
        class="flex h-full flex-1 flex-col justify-start gap-[40px] rounded-[50px] border-[8px] border-solid border-[#E2DEFF] p-[40px]"
      >
        <p class="text-[32px] font-semibold text-[#303030]">
          <slot name="header-title"></slot>
        </p>
        <slot name="filters-place"></slot>
        <slot name="main-content"></slot>
        <slot name="pagination-palce"></slot>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

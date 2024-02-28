<script setup lang="ts">
import { MainHeader, MainSidebar } from "@/components";
</script>
<template>
  <div class="flex h-screen flex-1 flex-col p-[20px] dark:bg-[#0D0F11]">
    <MainHeader />
    <div class="flex h-full gap-[20px] dark:bg-[#0D0F11]">
      <MainSidebar class="mobile:hidden tablet:flex" />
      <div
        class="flex h-full flex-1 flex-col justify-start gap-[40px] border-[8px] border-solid border-[#E2DEFF] dark:border-[#1C232C] dark:bg-[#181E25] mobile:w-[290px] mobile:rounded-[0] mobile:p-[15px] tablet:rounded-[50px] tablet:p-[30px]"
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

<script setup lang="ts">
import avatar from "@/assets/images/avatar.png";
import { logOutIcon, plusIcon } from "@/assets/svg";
import { useRouter } from "vue-router";
import { useAppStateStore } from "@/store/modules/app-state";
import { links } from "./utils/sidebar";
import iconConstructor from "@/components/icon-constructor.vue";
import { useUserStore } from "@/store/modules/user";

import { computed, onMounted, reactive, ref, watch } from "vue";

interface IState {
  currentRoute: string;
}
const emit = defineEmits(["close"]);
const appStateStore = useAppStateStore();

const state = reactive<IState>({
  currentRoute: appStateStore.currentRoute,
});
const router = useRouter();
const userStore = useUserStore();
const userEmail = computed(() => "konstantinopolsky@mail.ru");
const user = {
  name: "Константин",
  surname: "Константинопольский",
};

function logout() {
  userStore.logout();
  setCurrentRoute("/");
}
function setCurrentRoute(path: string) {
  state.currentRoute = path;
  appStateStore.setCurrentRoute(path);
  router.push(path);
}
function closeSidebar() {
  emit("close");
}
</script>
<template>
  <div
    class=":w-full absolute inset-0 flex h-full flex-col items-center rounded-none border-[8px] border-solid border-[#E2DEFF] bg-[#fff] pt-[40px] dark:border-[#1C232C] dark:bg-[#191D23] tablet:rounded-[50px]"
  >
    <button class="absolute right-0 rotate-45">
      <icon-constructor @click="closeSidebar" width="48" height="48">
        <plus-icon />
      </icon-constructor>
    </button>
    <img class="size-[100px]" :src="avatar" alt="пользователь" />
    <div class="h-[208px] w-full">
      <p class="mt-[20px] w-full text-center dark:text-[#E4E4E4]">
        {{ user.name }} <br />
        {{ user.surname }}
      </p>

      <p class="mt-[20px] w-full text-center dark:text-[#757575]">
        {{ userEmail }}
      </p>
    </div>
    <div class="flex w-full grow-[1] flex-col gap-[20px]">
      <button
        v-for="link in links"
        :key="link.path"
        class="group/icon flex h-[48px] w-full items-center justify-start gap-[10px] pl-[30%] transition-all hover:bg-[#E2DEFF] dark:text-[#E4E4E4]"
        :class="{
          'bg-[#E2DEFF]': link.path == state.currentRoute,
        }"
        @click="setCurrentRoute(link.path)"
      >
        <icon-constructor>
          <component
            :is="link.icon"
            :class="{
              'stroke-[#7B57E0]': link.path == state.currentRoute,
            }"
          />
        </icon-constructor>
        <p
          :class="{
            'text-[#7B57E0]': link.path == state.currentRoute,
          }"
          class="group-hover/icon:text-[#7B57E0]"
        >
          {{ link.name }}
        </p>
      </button>
    </div>
    <div
      class="group/icon mb-[60px] flex items-center justify-center gap-[10px]"
    >
      <p class="cursor-pointer dark:text-[#E4E4E4]" @click.stop="logout">
        Выйти
      </p>
      <icon-constructor>
        <logOutIcon width="24" height="24" />
      </icon-constructor>
    </div>
  </div>
</template>

<style module scoped></style>

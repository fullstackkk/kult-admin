<script setup lang="ts">
import avatar from "@/assets/images/avatar.png";
import {
  logOutIcon,
  userIcon,
  usersIcon,
  notebookIcon,
  calendarIcon,
  closeIcon,
  arrowDownIcon,
} from "@/assets/svg";
import { useRouter } from "vue-router";
import { useAppStateStore } from "@/store/modules/app-state";

import iconConstructor from "@/components/icon-constructor.vue";
import { useUserStore } from "@/store/modules/user";
import { computed, onMounted, reactive, ref, watch } from "vue";

interface ILinks {
  icon: any;
  path: string;
  name: string;
  isCurrentRoute: boolean;
}
interface IState {
  isShowFullSidebar: boolean;
  currentRoute: string;
}
const emit = defineEmits(["click"]);
const appStateStore = useAppStateStore();

const state = reactive<IState>({
  isShowFullSidebar: true,
  currentRoute: appStateStore.currentRoute,
});
const SIDEBAR_STATE_KEY = "IS_SHOW_FULL_SIDEBAR";
const router = useRouter();
const isAuthenticated = computed(() => userStore.$state.isAuth);
const userStore = useUserStore();
const userEmail = computed(() => "konstantinopolsky@mail.ru");
const user = {
  name: "Константин",
  surname: "Константинопольский",
};
const links: ILinks[] = [
  {
    icon: calendarIcon,
    path: "/instructor-schedule",
    name: "График работы",
    isCurrentRoute: false,
  },
  {
    icon: notebookIcon,
    path: "/applications-for-training",
    name: "Заявки на обучение",
    isCurrentRoute: false,
  },
  {
    icon: usersIcon,
    path: "/student-table",
    name: "Таблица учеников",
    isCurrentRoute: false,
  },
  {
    icon: userIcon,
    path: "/list-of-instructors",
    name: "Список инструкторов",
    isCurrentRoute: false,
  },
];

function logout() {
  userStore.logout();
  setCurrentRoute("/");
}
function setCurrentRoute(path: string) {
  state.currentRoute = path;
  appStateStore.setCurrentRoute(path);
  router.push(path);
}
function toggleShowFullSidebar() {
  state.isShowFullSidebar = !state.isShowFullSidebar;
  localStorage.setItem(SIDEBAR_STATE_KEY, String(state.isShowFullSidebar));
}
onMounted(() => {
  state.isShowFullSidebar = Boolean(localStorage.getItem(SIDEBAR_STATE_KEY));
});
</script>
<template>
  <keep-alive>
    <div
      :class="{
        'tablet:w-[144px]': !state.isShowFullSidebar,
        'tablet:w-[290px]': state.isShowFullSidebar,
      }"
      class="relative flex h-full flex-col items-center border-[8px] border-solid border-[#E2DEFF] bg-[#fff] pt-[40px] dark:border-[#1C232C] dark:bg-[#191D23] mobile:w-full mobile:rounded-none tablet:rounded-[50px]"
    >
      <img class="size-[100px]" :src="avatar" alt="пользователь" />
      <div
        class="h-[208px] w-full"
        :class="{
          'w-[104px]': !state.isShowFullSidebar,
        }"
      >
        <p
          v-show="state.isShowFullSidebar"
          class="mt-[20px] w-full text-center dark:text-[#E4E4E4]"
        >
          {{ user.name }} <br />
          {{ user.surname }}
        </p>
        <button
          class="absolute right-[-15px] top-[90px] flex rotate-90 cursor-pointer items-center justify-center rounded-[6px] bg-[#E2DEFF] transition-all"
          :class="[{ 'rotate-[-90deg]': !state.isShowFullSidebar }]"
        >
          <icon-constructor
            @click="toggleShowFullSidebar()"
            width="24"
            height="24"
          >
            <arrow-down-icon />
          </icon-constructor>
        </button>

        <p
          v-show="state.isShowFullSidebar"
          class="mt-[20px] w-full text-center dark:text-[#757575]"
        >
          {{ userEmail }}
        </p>
      </div>
      <div
        class="flex w-full grow-[1] flex-col gap-[20px]"
        :class="{
          'items-center': !state.isShowFullSidebar,
        }"
      >
        <button
          v-for="link in links"
          :key="link.path"
          class="group/icon flex h-[48px] w-full items-center justify-start gap-[10px] px-5 transition-all hover:bg-[#E2DEFF] dark:text-[#E4E4E4]"
          :class="{
            'bg-[#E2DEFF]': link.path == state.currentRoute,
            'justify-center': !state.isShowFullSidebar,
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
              hidden: !state.isShowFullSidebar,
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
  </keep-alive>
</template>

<style module scoped></style>

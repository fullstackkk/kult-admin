<script setup lang="ts">
import avatar from "@/assets/images/avatar.png";
import { logOutIcon, userIcon,usersIcon,notebookIcon,calendarIcon, closeIcon } from "@/assets/svg"
import { useRouter } from "vue-router";

import iconConstructor from "@/components/icon-constructor.vue";
import { useUserStore } from "@/store/modules/user";
import { computed, watch } from "vue";

interface ILinks {
  icon: any;
  path: string;
  name: string;
}

const emit = defineEmits(["click"]);

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
  },
  {
    icon: notebookIcon,
    path: "/applications-for-training",
    name: "Заявки на обучение",
  },
  {
    icon: usersIcon,
    path: "/student-table",
    name: "Таблица учеников",
  },
  {
    icon: userIcon,
    path: "/list-of-instructors",
    name: "Список инструкторов",
  },
];
watch(
  () => isAuthenticated,
  () => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }
);
function logout() {
  userStore.logout();
  router.push("/");
}
</script>
<template>
  <div
    class="z-[1] flex h-full flex-col items-center border-[8px] border-solid border-[#E2DEFF] bg-[#fff] px-5 pt-[40px] dark:border-[#1C232C] dark:bg-[#191D23] mobile:w-full mobile:rounded-none tablet:w-[290px] tablet:rounded-[50px]"
  >
    <img class="size-[100px]" :src="avatar" alt="пользователь" />
    <p class="mt-[20px] text-center dark:text-[#E4E4E4]">
      {{ user.name }} <br />
      {{ user.surname }}
    </p>
    <p class="mt-[20px] dark:text-[#757575]">{{ userEmail }}</p>
    <div class="mt-[60px] flex flex-col gap-[20px]">
      <router-link
        v-for="link in links"
        :key="link.path"
        class="flex h-[48px] items-center justify-start gap-[10px] dark:text-[#E4E4E4]"
        :to="link.path"
      >
        <icon-constructor>
          <component :is="link.icon" class="dark:stroke-[#E4E4E4]" />
        </icon-constructor>
        <p>{{ link.name }}</p>
      </router-link>
    </div>
    <div class="mt-[60px] flex items-center justify-center gap-[10px]">
      <p class="cursor-pointer dark:text-[#E4E4E4]" @click.stop="logout">
        Выйти
      </p>
      <icon-constructor>
        <logOutIcon class="dark:stroke-[#E4E4E4]" />
      </icon-constructor>
    </div>
    <iconConstructor
      @click="emit('click')"
      class="absolute right-[5px] top-[5px] flex tablet:hidden"
    >
      <closeIcon class="dark:text-[#E4E4E4]" />
    </iconConstructor>
  </div>
</template>

<style module scoped></style>

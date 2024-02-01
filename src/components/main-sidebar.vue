<script setup lang="ts">
import avatar from "@/assets/images/avatar.png";
import calendar from "@/assets/svg/calendar-icon.vue";
import notebook from "@/assets/svg/notebook-icon.vue";
import users from "@/assets/svg/users-icon.vue";
import usericon from "@/assets/svg/user-icon.vue";
import logouticon from "@/assets/svg/log-out-icon.vue";

import iconConstructor from "@/components/icon-constructor.vue";

import { computed } from "vue";
interface ILinks {
  icon: any;
  path: string;
  name: string;
}
const userEmail = computed(() => "konstantinopolsky@mail.ru");
const user = {
  name: "Константин",
  surname: "Константинопольский",
};
const links: ILinks[] = [
  {
    icon: calendar,
    path: "/instructor-schedule",
    name: "График работы",
  },
  {
    icon: notebook,
    path: "/applications-for-training",
    name: "Заявки на обучение",
  },
  {
    icon: users,
    path: "/student-table",
    name: "Таблица учеников",
  },
  {
    icon: usericon,
    path: "/list-of-instructors",
    name: "Список инструкторов",
  },
];
</script>
<template>
  <div
    class="flex h-full w-[290px] flex-col items-center rounded-[50px] border-[8px] border-solid border-[#E2DEFF] px-5 pt-[40px] dark:bg-[#191D23] dark:border-[#1C232C]"
  >
    <img class="h-[100px] w-[100px]" :src="avatar" alt="пользователь" />
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
      <p class="dark:text-[#E4E4E4]">Выйти</p>
      <icon-constructor>
        <logouticon class="dark:stroke-[#E4E4E4]" />
      </icon-constructor>
    </div>
  </div>
</template>

<style module scoped></style>

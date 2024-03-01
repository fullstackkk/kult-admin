import { userIcon, usersIcon, notebookIcon, calendarIcon } from "@/assets/svg";
export interface ILinks {
  icon: any;
  path: string;
  name: string;
  isCurrentRoute: boolean;
}
export const links: ILinks[] = [
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

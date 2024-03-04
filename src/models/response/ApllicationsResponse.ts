export const enum filial {
  mezda = "Межда",
  ozerki = "Озерки",
}
export const enum chosenCourse {
  motoA = "Мото A",
  motoAPlusB = "A+B",
  profi = "Профи",
  optima = "Оптима",
  express = "Экспресс",
  ekonm = "Эконом",
}
export const enum cpp {
  MKPP = "МКПП",
  AKPP = "АКПП",
}
export const enum typeOfTraining {
  online = "Онлайн",
  ofline = "Очно",
}
export const enum offerStatus {
  newAplication = "Новая заявка",
  inProcess = "В обработке",
  noAnswer = "Не отвечает",
  isThink = "Думает",
  readyToGo = "Скоро придет",
  readyToLearn = "Записался(ась) на обучение",
  finishLearn = "Завершил обучение",
}
export const enum paymentType {
  cash = "Наличка",
  onlinePayment = "Безнал",
}
export interface IApplication {
  isActive?: boolean;
  number: number;
  fio: {
    firstname: string;
    lastname: string;
    patronomic: string;
  };
  phone: number;
  creationDate?: number;
  regDate?: number;
  filial: filial;
  chosenCourse: chosenCourse;
  cpp: cpp;
  typeOfTraining: typeOfTraining;
  offerStatus: offerStatus
  issueDate?: number;
  paymentType: paymentType;
  income?: number;
  discount?: number;
  comment?: string;
}
export interface IApplicationGetListFilter {
  filter: any;
  pagination: {
    skip: number;
    limit: number;
  };
}

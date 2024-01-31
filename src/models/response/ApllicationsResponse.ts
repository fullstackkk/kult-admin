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
  filial: "Междагорье" | "Озерки";
  chosenCourse: "Мото A" | "A+B" | "Профи" | "Оптима" | "Экспресс" | "Эконом";
  cpp: "МКПП" | "АКПП";
  typeOfTraining: "Онлайн" | "Очно";
  offerStatus:
    | "Новая заявка"
    | "В обработке"
    | "Не отвечает"
    | "Думает"
    | "Скоро придет"
    | "Записался(ась) на обучение"
    | "Завершил обучение";
  issueDate?: number;
  paymentType: "Наличка" | "Безнал";
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

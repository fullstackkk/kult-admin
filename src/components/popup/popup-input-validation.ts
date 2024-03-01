export function validationMainInfoFullName(text: string) {
  let correctValidate = /[А-Яа-яЁё]/.test(text);
  let wrongValidate = /[a-zA-Z0-9]/.test(text);

  if (correctValidate) {
    return "";
  } else if (wrongValidate) {
    return "запрешенные символы";
  } else {
    return "обязательное поле";
  }
}

export function validationMainInfoPhoneNumber(text: number) {
  let correctValidate =
    /[7-8]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/.test(String(text));
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(String(text));
  if (correctValidate) {
    return ;
  } else if (wrongValidate) {
    return "запрешенные символы";
  } else {
    return "обязательное поле";
  }
}

export function validationFinancialInfoIncome(text: number | undefined) {
  let correctValidate = /[0-9]/.test(String(text));
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(String(text));
  if (correctValidate) {
    return "";
  } else if (wrongValidate) {
    return "запрешенные символы";
  } else {
    return "обязательное поле";
  }
}

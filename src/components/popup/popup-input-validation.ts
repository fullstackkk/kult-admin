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

export function validationMainInfoPhoneNumber(text: string) {
  let correctValidate =
    /[7-8]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/.test(text);
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(text);
  if (correctValidate) {
    return "";
  } else if (wrongValidate) {
    return "запрешенные символы";
  } else {
    return "обязательное поле";
  }
}

export function validationFinancialInfoIncome(text: string) {
  let correctValidate = /[0-9]/.test(text);
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(text);
  if (correctValidate) {
    return "";
  } else if (wrongValidate) {
    return "запрешенные символы";
  } else {
    return "обязательное поле";
  }
}

export function validation(
  text: string | number | undefined,
  validationName: string
) {
  let correctValidate;
  let wrongValidate;

  if (validationName == "fullName") {
    correctValidate = /[А-Яа-яЁё]/.test(text as string);
    wrongValidate = /[a-zA-Z0-9]/.test(text as string);
  } else if (validationName == "phoneNumber") {
    correctValidate =
      /[7-8]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/.test(
        text as string
      );
    wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(text as string);
  } else if (validationName == "infoIncome" || "infoDiscount") {
    correctValidate = /[0-9]/.test(text as string);
    wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(text as string);
  }

  if (correctValidate) {
    return "";
  } else if (wrongValidate) {
    return "запрешенные символы";
  } else {
    return "обязательное поле";
  }
}
export function checkStringHasOnlyRussianWord(text: string | undefined) {
  return /^[\u0410-\u044FЁё]+$/i.test(text as string);
}
export function checkStringOnPhone(text: string | number | undefined) {
  return /[7-8]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/.test(
    text as string
  );
}
export function checkStringHasOnlyNumber(text: string | number | undefined) {
  return /[0-9]/.test(text as string);
}

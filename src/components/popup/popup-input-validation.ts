import { ref } from "vue";

let check1 = ref(false);
let check2 = ref(false);
let check3 = ref(false);
let check4 = ref(false)

export function validationMainInfoFullName(text: string) {
  let correctValidate = /[А-Яа-яЁё]/.test(text);
  let wrongValidate = /[a-zA-Z0-9]/.test(text);

  if (correctValidate) {
    check1.value = true
    return "";
  } else if (wrongValidate) {
    check1.value = false
    return "запрешенные символы";
  } else {
    check1.value = false
    return "обязательное поле";
  }
}

export function validationMainInfoPhoneNumber(text: number) {
  let correctValidate =
    /[7-8]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/.test(String(text));
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(String(text));
  if (correctValidate) {
    check2.value = true
    return ;
  } else if (wrongValidate) {
    check2.value = false
    return "запрешенные символы";
  } else {
    check2.value = false
    return "обязательное поле";
  }
}

export function validationFinancialInfoIncome(text: number | undefined) {
  let correctValidate = /[0-9]/.test(String(text));
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(String(text));
  if (correctValidate) {
    check3.value = true
    return "";
  } else if (wrongValidate) {
    check3.value = false
    return "запрешенные символы";
  } else {
    check3.value = false
    return "обязательное поле";
  }
}

export function validationFinancialInfoDiscount(text: number | undefined) {
  let correctValidate = /[0-9]/.test(String(text));
  let wrongValidate = /[a-zA-ZА-Яа-яЁё]/.test(String(text));
  if (correctValidate) {
    check4.value = true
    return "";
  } else if (wrongValidate) {
    check4.value = false
    return "запрешенные символы";
  } else {
    check4.value = false
    return "обязательное поле";
  }
}

export function fullCheck() {
  return check1.value && check2.value && check3.value && check4.value;
};
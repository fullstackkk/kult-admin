export function setCookie(cookieName: string, cookieValue: string) {
  // Установить cookie с параметром HttpOnly
  document.cookie = `${cookieName}=${cookieValue}`;
}
// // Получить значение cookie, включая параметр HttpOnly
// export function getCookie(cookieName: string) {
//   let value = "; " + document.cookie;
//   let parts = value.split("; " + cookieName + "=");

//   if (parts && parts.length >= 2) {
//     return parts.pop().split(";").shift();
//   }
// }

// Обращение к cookie с параметром HttpOnly
// let cookieValue = getCookie("cookieName");
// console.log(cookieValue);

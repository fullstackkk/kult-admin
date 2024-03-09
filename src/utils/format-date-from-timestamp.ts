export default function formatDateFromTimestamp(timestamp: number | undefined) {
  if (!timestamp) return "не заполнено";
  let date = new Date(timestamp);

  let day = date.getDate();
  let month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому нужно добавить 1
  let year = date.getFullYear();

  // Преобразование чисел в строки и добавление ведущих нулей при необходимости
  day = Number(day < 10 ? "0" + day : day);
  month = Number(month < 10 ? "0" + month : month);

  return day + "." + month + "." + year;
}

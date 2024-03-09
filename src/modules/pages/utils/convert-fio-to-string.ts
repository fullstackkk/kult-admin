interface IFio {
  firstname: string;
  lastname: string;
  patronomic: string;
}

export function convertFioToString(fio: IFio) {
  return `${fio.lastname} ${fio.firstname} ${fio.patronomic}`;
}

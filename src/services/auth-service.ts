import { api } from "@/services/api";

async function authAdmin(id: string) {
  const res = await fetch(`${api}/instructor/:${id}`);
  return res;
}

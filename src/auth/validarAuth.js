// validarAuth.js
import { ref } from "vue";
import Cookies from "js-cookie";
import { verifyTokenRequest } from "../api/auth";

const estaAutenticado = ref(false);

async function checkLogin() {
  const cookies = Cookies.get();
  if (!cookies.token) {
    estaAutenticado.value = false;
  }
  try {
    const res = await verifyTokenRequest(cookies.token);
    console.log(res);
    if (!res.data) return estaAutenticado.value;
    estaAutenticado.value = true;
    return estaAutenticado.value;
  } catch {
    estaAutenticado.value = false;
  }
}

export const initAuth = async () => {
  await checkLogin();
  return { estaAutenticado };
};

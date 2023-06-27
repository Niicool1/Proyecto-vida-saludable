import { reactive, provide, inject, onMounted } from 'vue';
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

const AuthSymbol = Symbol();

export function useAuth() {
  const auth = inject(AuthSymbol);
  if (!auth) throw new Error('useAuth tiene que ser usado con AuthProvider');
  return auth;
}

export function AuthProvider({ children }) {
  const state = reactive({
    user: null,
    isAuthenticated: false,
    errors: [],
    loading: true,
  });

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        state.user = res.data;
        state.isAuthenticated = true;
      }
    } catch (error) {
      console.log(error.response.data);
      state.errors = error.response.data.message;
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      state.user = res.data;
      state.isAuthenticated = true;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    state.user = null;
    state.isAuthenticated = false;
  };

  onMounted(async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      state.isAuthenticated = false;
      state.loading = false;
      return;
    }

    try {
      const res = await verifyTokenRequest(cookies.token);
      console.log(res);
      if (!res.data) return (state.isAuthenticated = false);
      state.isAuthenticated = true;
      state.user = res.data;
      state.loading = false;
    } catch (error) {
      state.isAuthenticated = false;
      state.loading = false;
    }
  });

  provide(AuthSymbol, {
    ...state,
    signup,
    signin,
    logout,
  });

  return children;
}
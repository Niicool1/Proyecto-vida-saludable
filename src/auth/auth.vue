<script>
    import { reactive, provide, inject, onMounted } from 'vue';
    import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth';
    
    const AuthSymbol = Symbol();

    export function useAuth() {
        const context = inject(AuthSymbol);
        if (!context) throw new Error('useAuth must be used within a AuthProvider');
            return context;
    }

    export const AuthProvider = {
        setup(props, { slots }) {
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
                    // state.errors = error.response.data.message;
                }
            };

            const logout = () => {
                Cookies.remove('token');
                state.user = null;
                state.isAuthenticated = false;
            };

            onMounted(() => {
                const checkLogin = async () => {
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
                };
                checkLogin();
            });

            provide(AuthSymbol, {
                user: state.user,
                signup,
                signin,
                logout,
                isAuthenticated: state.isAuthenticated,
                errors: state.errors,
                loading: state.loading,
            });

            return () => slots.default();
        },
    };

</script>
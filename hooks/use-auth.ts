import { authApi } from "@/api";
import useSWR from "swr";

export function useAuth(options?: any) {
  // Quản lí data của profile dùng nhìu nơi
  const {
    data: profile,
    error,
    mutate,
    isLoading,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });
  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    const res = await authApi.login({
      username: "test2",
      password: "123456",
    });

    // trigger lại fetch api
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    // mutate data empty, no fetch api
    mutate({}, false);
  }

  return {
    profile,
    error,
    isLoading,
    login,
    logout,
    firstLoading,
  };
}
// options?:Partial<Pub>

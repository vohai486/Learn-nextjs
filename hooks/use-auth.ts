import { authApi } from "@/api";
import { StorageKeys } from "@/constants";
import { LoginPayload, UserProfile } from "@/models";
import useSWR, { SWRConfiguration } from "swr";

function getUserInfo(): UserProfile | null {
  try {
    return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || "");
  } catch (error) {
    console.log("faild to parse user info from local storage", error);
    return null;
  }
}

export function useAuth(options?: Partial<SWRConfiguration>) {
  // Quản lí data của profile dùng nhìu nơi
  const {
    data: profile,
    error,
    mutate,
    isLoading,
  } = useSWR<UserProfile | null>("/profile", {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(),
    onSuccess(data) {
      // save user info to local storage
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data));
    },
    onError(err: Error) {
      // failed to get profile --> logout
      console.log(error);
      logout();
    },
  });
  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    const res = await authApi.login(payload);

    // trigger lại fetch api
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    // mutate data empty, no fetch api
    mutate(null, false);
    localStorage.removeItem(StorageKeys.USER_INFO);
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

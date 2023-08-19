import { workApi } from "@/api-client";
import { QueryKeys } from "@/constants";
import { ListParams } from "@/models";
import useSWR, { SWRConfiguration } from "swr";

export interface UseWorkListProps {
  params: Partial<ListParams>;
  options?: SWRConfiguration;
  enabled?: boolean;
}
export function useWorkList({
  params,
  options,
  enabled = true,
}: UseWorkListProps) {
  // Mỗi lần params thay đổi sẽ gọi lại API
  const swrResponse = useSWR(
    // key = null thì không gọi API
    enabled ? [QueryKeys.GET_WORK_LIST, params] : null,
    () => workApi.getAll(params),
    {
      dedupingInterval: 10 * 1000,
      keepPreviousData: true,
      fallbackData: {
        data: [],
        pagination: {
          _page: 1,
          _limit: 10,
          _totalRows: 0,
        },
      },
      ...options,
    }
  );
  return swrResponse;
}

import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import queryOptions, { queryKeys } from "./ai.queries";

export function useGetAllAI() {
  return useSuspenseQuery(queryOptions.getAll());
}

export function useCreateOneAI() {
  const queryClient = useQueryClient();
  return useMutation({
    ...queryOptions.createOne(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.getAll,
      });
    },
  });
}

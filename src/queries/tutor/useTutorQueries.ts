import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import queryOptions from "./tutor.queries";

export function useGetAllTutor() {
  return useSuspenseQuery(queryOptions.getAll());
}

export function useCreateOneTutor() {
  const queryClient = useQueryClient();
  return useMutation({
    ...queryOptions.createOne(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryOptions.getAll().queryKey,
      });
    },
  });
}

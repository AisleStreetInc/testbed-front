import { CreateTutor } from "./tutor.dto";
import tutorService from "./tutor.service";

export const queryKeys = {
  getAll: ["tutor"],
};

const queryOptions = {
  getAll: () => ({
    queryKey: queryKeys.getAll,
    queryFn: () => tutorService.getAll(),
  }),
  createOne: () => ({
    mutationFn: (data: CreateTutor) => tutorService.createOne(data),
  }),
};

export default queryOptions;

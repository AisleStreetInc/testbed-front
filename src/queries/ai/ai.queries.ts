import { AI, CreateAI } from "./ai.dto";
import aiService from "./ai.service";

export const queryKeys = {
  getAll: ["ai"],
};

const queryOptions = {
  getAll: () => ({
    queryKey: queryKeys.getAll,
    queryFn: () => aiService.getAll(),
  }),
  createOne: () => ({
    mutationFn: (data: CreateAI) => aiService.createOne(data),
  }),
};

export default queryOptions;

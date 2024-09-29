import axiosInstance from "./axios";

class Service {
  constructor(
    private readonly api = axiosInstance,
    readonly controller = {
      ai: {
        getAll: "api/ai",
        getOneById: (id: number) => `api/ai/${id}`,
        createOne: "api/ai/",
      },
      tutor: {
        getAll: "api/tutor",
        getOneById: (id: number) => `api/tutor/${id}`,
        createOne: "api/tutor/",
      },
    }
  ) {}

  async request<T>(
    url: string,
    method: "post" | "get" | "put" | "delete" = "get",
    body?: any,
    params: Record<string, string> = {}
  ) {
    try {
      const { data } = await this.api<T>({
        url,
        method,
        data: body,
        params,
      });
      return data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

export default Service;

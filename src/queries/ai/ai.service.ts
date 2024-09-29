import Service from "../service";
import { AI, CreateAI } from "./ai.dto";

class AIService extends Service {
  constructor() {
    super();
  }

  async getAll(): Promise<AI[]> {
    return await this.request<AI[]>(this.controller.ai.getAll);
  }

  async createOne(data: CreateAI): Promise<AI> {
    return await this.request<AI>(this.controller.ai.createOne, "post", data);
  }
}

export default new AIService();

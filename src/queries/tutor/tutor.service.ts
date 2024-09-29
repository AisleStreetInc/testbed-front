import Service from "../service";
import { CreateTutor, Tutor } from "./tutor.dto";

class TutorService extends Service {
  constructor() {
    super();
  }

  async getAll(): Promise<Tutor[]> {
    return await this.request<Tutor[]>(this.controller.tutor.getAll);
  }

  async createOne(data: CreateTutor): Promise<Tutor> {
    return await this.request<Tutor>(
      this.controller.tutor.createOne,
      "post",
      data
    );
  }
}

export default new TutorService();

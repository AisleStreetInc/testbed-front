export type Tutor = {
  id: number;
  ai_id: number;
  name: string;
  description: string;
};

export type CreateTutor = {
  name: string;
  ai: number;
  description: string;
};

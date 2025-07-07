import { User } from "./user.model";

export interface Post {
  id: string;
  title: string;
  description: string;
  location: string;
  type: 'Yardım' | 'Yetenek';
  point: number;
  owner: User;
  createdAt?: string;
}
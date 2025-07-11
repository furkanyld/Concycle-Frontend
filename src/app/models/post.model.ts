import { User } from "./user.model";

export interface Post {
  id: number;
  title: string;
  description: string;
  location: string;
  type: 'HELP' | 'TALENT';
  point: number;
  ownerName: string;
  createdAt?: string;
}
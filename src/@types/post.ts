import { User } from "./user";

export type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  user: User;
  comments: number;
}

export type PostResponse = {
  incomplete_results: boolean;
  total_count: number;
  items: Post[];
}
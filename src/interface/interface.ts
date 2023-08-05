interface OptionsElemComment {
  comments_count: number;
  content: string;
  id: number;
  level: number;
  time?: number;
  time_ago?: string;
  type?: string;
  url?: string;
  user: string;
  comments: OptionsElemComment[];
}

interface OptionsElemNews {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago?: string;
  comments_count?: number;
  type?: string;
  url?: string;
  domain?: string;
}

interface OptionsMapElemNews {
    index: number;
    id: number;
    title: string;
    points?: number | null;
    user?: string | null;
    time: number;
    time_ago?: string;
    comments_count?: number;
    type?: string;
    url?: string;
    domain?: string;
  }

export { type OptionsElemComment, type OptionsElemNews, type OptionsMapElemNews };

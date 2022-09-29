type BlogCore = {
  title: string;
  path: string;
  body: string;
  tags: string[];
  isDraft: boolean;
  createdAt: string;
  updatedAt: string;
};

type DBBlogIdSpec = {
  _id: {
    toString: () => string;
  };
};

type ClientBlogIdSpec = {
  id: string;
};

export type DBBlog = BlogCore & DBBlogIdSpec;
export type Blog = BlogCore & ClientBlogIdSpec;

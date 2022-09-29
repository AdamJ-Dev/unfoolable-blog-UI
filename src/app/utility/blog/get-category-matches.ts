import { Blog } from "../../types/blog";

export const getCategoryMatches = (blogs: Blog[], category: string) => {
  return blogs.filter(blog => blog.tags.includes(category));
};
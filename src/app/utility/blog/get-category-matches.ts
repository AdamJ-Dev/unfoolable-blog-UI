import { Blog } from '../../types/blog';

export const getCategoryMatches = (blogs: Blog[], category: string | null) => {
  if (category) {
    return blogs.filter((blog) => blog.tags.includes(category));
  } else {
    return blogs;
  }
};

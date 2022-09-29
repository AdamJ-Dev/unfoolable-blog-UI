import { DBBlog } from '../../types/blog';

export const parseDBBlog = (blog: DBBlog) => {
  return { ...blog, id: blog._id.toString() };
};

export const parseDBBlogs = (blogs: DBBlog[]) => {
  return blogs.map((blog) => parseDBBlog(blog));
};

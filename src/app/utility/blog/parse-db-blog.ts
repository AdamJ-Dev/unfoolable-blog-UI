import { getAboutRoute, getBlogRoute } from '../../../../config/pages/selectors';
import { DBBlog } from '../../types/blog';

export const parseDBBlog = (blog: DBBlog) => {
  return { ...blog, id: blog._id.toString() };
};

const allBlogsButAbout = (blogs: DBBlog[]) => {
  return blogs.filter((blog) => getBlogRoute(blog.path) !== getAboutRoute());
};

export const parseDBBlogs = (blogs: DBBlog[]) => {
  return allBlogsButAbout(blogs).map((blog) => parseDBBlog(blog));
};

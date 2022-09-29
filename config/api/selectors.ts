import api from './api.json';

export const getApiBaseDevUrl = () => {
  return api.baseDevUrl;
};

export const getApiBaseProdUrl = () => {
  return api.baseProdUrl;
};

export const getApiBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return getApiBaseProdUrl();
    default:
      return getApiBaseDevUrl();
  }
};

export const getUrl = (route: string) => {
  return `${getApiBaseUrl()}${route}`;
};

export const getFindPublishedBlogsUrl = () => {
  return getUrl(api.routes.blogs.findPublishedBlogs);
};

export const getFindPublicBlogUrl = (path: string) => {
  return getUrl(api.routes.blogs.findPublicBlog.replace(':path', path));
};

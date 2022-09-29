import pages from './pages.json';

export const getHomeRoute = () => {
  return pages.home.route;
};

export const getBlogRoute = (path: string) => {
  return pages.blog.route.replace(':path', path);
};

export const getAboutRoute = () => {
  return getBlogRoute(pages.blog.aboutPath);
};

export const getAboutLinkText = () => {
  return pages.blog.aboutLinkText;
};

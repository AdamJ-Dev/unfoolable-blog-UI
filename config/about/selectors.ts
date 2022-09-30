import about from './about.json';

export const getWindowTitle = () => {
  return about.windowTitle;
};

export const getBlogTitle = () => {
  return about.blogTitle;
};

export const getSiteUrl = () => {
  return about.siteUrl;
};

export const getRssInfo = () => {
  return about.rss.info;
};

export const getRssRoute = () => {
  return about.rss.route;
};

export const getRssIconLink = () => {
  return about.rss.svgRoute;
};

export const getRssLinkText = () => {
  return about.rss.linkText;
};

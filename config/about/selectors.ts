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

export const getRssPath = () => {
  return about.rss.path;
};

export const getRssIconLink = () => {
  return about.rss.svgPath;
};

export const getRssLinkText = () => {
  return about.rss.linkText;
};

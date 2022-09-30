import fs from 'fs';
import { Feed } from 'feed';
import { Blog } from '../../types/blog';
import { getBlogTitle, getRssInfo, getSiteUrl } from '../../../../config/about/selectors';

export default async function generateRssFeed(posts: Blog[]) {
  const siteUrl = getSiteUrl();

  const feed = new Feed({
    title: getBlogTitle(),
    id: siteUrl,
    link: siteUrl,
    updated: new Date(),
    ...getRssInfo(),
  });

  posts.forEach((post) => {
    const url = `${siteUrl}/blog/${post.path}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      date: new Date(post.createdAt),
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

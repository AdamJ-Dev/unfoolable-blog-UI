import type { GetStaticPaths } from 'next';
import { getFindPublishedBlogsUrl } from '../../../../../config/api/selectors';
import type { DBBlog } from '../../../types/blog';

const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(getFindPublishedBlogsUrl());

  if (!res.ok) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const data = await res.json();
  const paths = data.blogs.map((blog: DBBlog) => ({
    params: {
      path: blog.path,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;

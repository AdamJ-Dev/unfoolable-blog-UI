import { GetStaticProps } from 'next';
import { getFindPublishedBlogsUrl } from '../../../../../config/api/selectors';
import { getErrorRedirect } from '../../../utility/get-error-redirect';
import { parseDBBlogs } from '../../../utility/blog/parse-db-blog';
import { extractTags } from './helpers/extract-tags';

const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(getFindPublishedBlogsUrl());

  if (!res.ok) {
    return getErrorRedirect();
  }

  const data = await res.json();
  const blogs = parseDBBlogs(data.blogs);
  const categories = extractTags(blogs);

  return {
    props: {
      blogs,
      categories,
    },
  };
};

export default getStaticProps;

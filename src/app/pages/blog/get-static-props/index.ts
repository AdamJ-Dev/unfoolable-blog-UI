import type { GetStaticProps } from 'next';
import { getFindPublicBlogUrl } from '../../../../../config/api/selectors';
import { parseDBBlog } from '../../../utility/blog/parse-db-blog';
import { getErrorRedirect } from '../../../utility/get-error-redirect';
import { isString } from '../../../utility/type-guards/is-string';

const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPath = params?.path;
  if (!isString(blogPath)) {
    return getErrorRedirect();
  }

  const res = await fetch(getFindPublicBlogUrl(blogPath));
  if (!res.ok) {
    return getErrorRedirect();
  }

  const data = await res.json();
  const blog = parseDBBlog(data.blog);

  return {
    props: {
      blog,
    },
  };
};

export default getStaticProps;

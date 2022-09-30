import Markdownalise from '../../components/markdownalise';
import { Blog } from '../../types/blog';
import { getDateDisplay } from '../../utility/get-date-display';
import styles from './index.module.css';

type BlogPageProps = {
  blog: Blog;
};

const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  return (
    <>
      <div className={styles.blogHeadline}>
        <h1>Blog: {blog.title}</h1>
        <small>
          <em>{getDateDisplay(blog.createdAt, blog.updatedAt)}</em>
        </small>
      </div>
      <Markdownalise>{blog.body}</Markdownalise>
    </>
  );
};

export default BlogPage;

import Markdownalise from '../../components/markdownalise';
import { Blog } from '../../types/blog';
import { getDateDisplay } from '../../utility/get-date-display';
import styles from './index.module.css';
import linkStyles from '../../styles/link.module.css';
import { download } from '../../utility/download';

type BlogPageProps = {
  blog: Blog;
};

const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  return (
    <>
      <div className={styles.blogHeadline}>
        <h1>{blog.title}</h1>
        <div className={styles.blogSubline}>
          <span>
            <small>
              <em>{getDateDisplay(blog.createdAt, blog.updatedAt)}</em>
            </small>
          </span>
          <span>
            <small>
              <span>
                Tags: <span className={styles.blogTags}>{blog.tags.join(', ')}</span>
              </span>
              <span>
                Source:{' '}
                <span className={linkStyles.link} onClick={() => download(blog.path, blog.body)}>
                  {blog.path}.txt
                </span>
              </span>
            </small>
          </span>
        </div>
      </div>
      <Markdownalise>{blog.body}</Markdownalise>
    </>
  );
};

export default BlogPage;

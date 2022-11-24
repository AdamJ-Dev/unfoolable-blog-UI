import { useEffect } from 'react';
import { ActionTypes } from '../../context/category/reducer';
import type { Blog } from '../../types/blog';
import { getCategoryMatches } from '../../utility/blog/get-category-matches';
import { getDateDisplay } from '../../utility/get-date-display';
import useCategoryContext from '../../context/category/use-category';
import CategoryFilter from './components/category-filter';
import { getBlogRoute } from '../../../../config/pages/selectors';
import linkStyles from '../../styles/link.module.css';
import styles from './index.module.css';

type HomeProps = {
  blogs: Blog[];
  categories: string[];
};

const Home: React.FC<HomeProps> = ({ blogs, categories }) => {
  const { dispatch, currentCategory } = useCategoryContext();

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_CATEGORIES, payload: categories });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CategoryFilter />
      <ul>
        {getCategoryMatches(blogs, currentCategory).map((blog) => (
          <li key={blog.id}>
            <h3>
              <a className={linkStyles.link} href={getBlogRoute(blog.path)}>
                {blog.title}
              </a>
            </h3>
            <div>{getDateDisplay(blog.createdAt)}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

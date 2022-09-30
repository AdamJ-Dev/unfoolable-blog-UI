import { getHomeTitle } from '../../../../config/about/selectors';
import { getAboutLinkText, getAboutRoute } from '../../../../config/pages/selectors';
import linkStyles from '../../styles/link.module.css';
import localStyles from './index.module.css';

const BlogHeader: React.FC = () => {
  return (
    <div className={localStyles.blogHeader}>
      <h1>{getHomeTitle()}</h1>
      <a className={linkStyles.link} href={getAboutRoute()}>
        {getAboutLinkText()}
      </a>
      <hr />
    </div>
  );
};

export default BlogHeader;

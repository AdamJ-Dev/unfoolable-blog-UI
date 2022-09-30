import Image from 'next/image';
import {
  getBlogTitle,
  getRssIconLink,
  getRssLinkText,
  getRssRoute,
} from '../../../../config/about/selectors';
import { getAboutLinkText, getAboutRoute, getHomeRoute } from '../../../../config/pages/selectors';
import linkStyles from '../../styles/link.module.css';
import localStyles from './index.module.css';

const BlogHeader: React.FC = () => {
  return (
    <div className={localStyles.blogHeader}>
      <h1>
        <a className={localStyles.homeLink} href={getHomeRoute()}>
          {getBlogTitle()}
        </a>
      </h1>
      <div className={localStyles.blogLinks}>
        <a className={linkStyles.link} href={getAboutRoute()}>
          {getAboutLinkText()}
        </a>
        <span>
          <a title="rss" className={linkStyles.link} href={getRssRoute()}>
            {getRssLinkText()}
          </a>{' '}
          <a title="rss" href={getRssRoute()}>
            <Image src={getRssIconLink()} width="12px" height="12px" alt="RSS" />
          </a>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default BlogHeader;

import Image from 'next/image';
import { getBlogTitle, getRssIconLink, getRssLinkText, getRssPath } from '../../../../config/about/selectors';
import { getAboutLinkText, getAboutRoute } from '../../../../config/pages/selectors';
import linkStyles from '../../styles/link.module.css';
import localStyles from './index.module.css';

const BlogHeader: React.FC = () => {
  return (
    <div className={localStyles.blogHeader}>
      <h1>{getBlogTitle()}</h1>
      <div className={localStyles.blogLinks}>
        <a className={linkStyles.link} href={getAboutRoute()}>
          {getAboutLinkText()}
        </a>
        <span>
          <a title="rss" className={linkStyles.link} href={getRssPath()}>
            {getRssLinkText()}
          </a>{' '}
          <a title="rss" href={getRssPath()}>
            <Image src={getRssIconLink()} width="12px" height="12px" alt="RSS" />
          </a>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default BlogHeader;

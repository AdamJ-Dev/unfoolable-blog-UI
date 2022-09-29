import { getHomeTitle } from "../../../../../../config/about/selectors";
import { getAboutLinkText } from "../../../../../../config/pages/selectors";
import linkStyles from '../../../../styles/link.module.css';

const Header: React.FC = () => {
  return (<div>
    <h1>{getHomeTitle()}</h1>
    <a className={linkStyles.link}>{getAboutLinkText()}</a>
  </div>);
};

export default Header;

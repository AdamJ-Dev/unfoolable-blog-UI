import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import HighlightedCode from './highlighted-code';
import linkStyles from '../../styles/link.module.css';
import localStyles from './index.module.css';

type MarkdownaliseProps = {
  children: string;
};

const Markdownalise: React.FC<MarkdownaliseProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        code: ({ inline, className, children, ...props }) => {
          return (
            <HighlightedCode inline={inline} className={className} otherProps={props}>
              {children}
            </HighlightedCode>
          );
        },
        blockquote: (props) => (
          <blockquote {...props} className={`${props.className} ${localStyles.blockquote}`} />
        ),
        a: (props) => <a {...props} className={`${props.className} ${linkStyles.link}`} />,
        h1: (props) => <h2 {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdownalise;

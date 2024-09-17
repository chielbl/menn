import { FileQuestion } from 'lucide-react';
import Markdown from 'react-markdown';
import { UniqueSellingPoint } from './types';

interface UniqueSellingPointsProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  uniqueSellingPoints: Array<UniqueSellingPoint>;
}
/**
 *__Description__:
 * This component displays a list of unique selling points, each with an SVG Lucide-icon and a text description.
 *
 * __Info__:
 *  npm install lucide-react react-markdown
 *
 * @example <UniqueSellingPoints uniqueSellingPoints={UNIQUE_SELLING_POINTS} />
 * @param {UniqueSellingPointsProps} uniqueSellingPoints - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
function UniqueSellingPoints({
  uniqueSellingPoints,
  ...rest
}: UniqueSellingPointsProps) {
  return (
    <div {...rest}>
      {uniqueSellingPoints.map(({ icon: Icon, text }) => (
        <div key={text}>
          <Icon />
          <Markdown>{text}</Markdown>
        </div>
      ))}
    </div>
  );
}

UniqueSellingPoints.defaultProps = {
  uniqueSellingPoints: [
    { icon: FileQuestion, text: 'No unique selling points' },
  ],
} as UniqueSellingPointsProps;

export default UniqueSellingPoints;

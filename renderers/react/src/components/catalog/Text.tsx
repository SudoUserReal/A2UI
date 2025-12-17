import { Typography, Rating } from '@douyinfe/semi-ui';
import { Types } from '@a2ui/lit/0.8';
import { CatalogComponentProps } from './index';
import { useStringBinding } from '../../core/hooks';

const { Title, Text: SemiText, Paragraph } = Typography;

// Check if text is a star rating pattern (e.g., "★★★★☆")
function parseStarRating(text: string): number | null {
  const starPattern = /^[★☆]+$/;
  if (!starPattern.test(text.trim())) {
    return null;
  }
  const filledStars = (text.match(/★/g) || []).length;
  return filledStars;
}

export function Text({ surfaceId, component }: CatalogComponentProps) {
  const node = component as Types.TextNode;
  const { text, usageHint } = node.properties;

  const textValue = useStringBinding(text, component, surfaceId);

  if (!textValue) {
    return null;
  }

  const style: React.CSSProperties = {
    flex: component.weight ?? 'initial',
  };

  // Check if this is a star rating
  const starRating = parseStarRating(textValue);
  if (starRating !== null) {
    return (
      <Rating
        data-id={component.id}
        value={starRating}
        count={5}
        disabled
        size="small"
        style={{ ...style, display: 'flex' }}
      />
    );
  }

  // Map usageHint to Semi UI Typography components
  switch (usageHint) {
    case 'h1':
      return <Title data-id={component.id} heading={1} style={style}>{textValue}</Title>;
    case 'h2':
      return <Title data-id={component.id} heading={2} style={style}>{textValue}</Title>;
    case 'h3':
      return <Title data-id={component.id} heading={3} style={style}>{textValue}</Title>;
    case 'h4':
      return <Title data-id={component.id} heading={4} style={style}>{textValue}</Title>;
    case 'h5':
      return <Title data-id={component.id} heading={5} style={style}>{textValue}</Title>;
    case 'caption':
      return <SemiText data-id={component.id} type="tertiary" size="small" style={style}>{textValue}</SemiText>;
    case 'body':
    default:
      return <Paragraph data-id={component.id} style={style}>{textValue}</Paragraph>;
  }
}

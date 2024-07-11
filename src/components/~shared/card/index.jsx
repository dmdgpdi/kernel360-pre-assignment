import styled from 'styled-components';
import { color } from 'theme';

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 304px;
  height: 388px;
  border: 10px;
  background-color: ${color.pureWhite};
`;

const CardBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const CardTitle = styled.p`
  width: 128px;
  height: 24px;
  line-height: 100%;
  letter-spacing: -3%;
  font-size: ${(props) => props.theme.fontSize.l}px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color.darkSlate};
`;

const CardText = styled.p`
  height: ${(props) => props?.height ?? 20}px;
  line-height: ${(props) => props?.height ?? 20}px;
  font-size: ${(props) => props?.fontSize ?? props.theme.fontSize.s}px;
  font-weight: ${(props) => props?.fontWeight ?? props.theme.fontWeight.bold};
  color: ${(props) => props?.color ?? props.theme.color.lightSteel};
`;

const CardImageLayout = styled.img`
  margin: auto;
`;

function CardImage({ imageUrl, width }) {
  return <CardImageLayout src={imageUrl} alt="" width={`${width}px`} />;
}

const CardHorizontalItem = styled.div`
  display: flex;
`;

const Card = Object.assign(CardLayout, {
  Bar: CardBar,
  Title: CardTitle,
  Text: CardText,
  Image: CardImage,
  HorizontalItem: CardHorizontalItem,
});

export { Card };

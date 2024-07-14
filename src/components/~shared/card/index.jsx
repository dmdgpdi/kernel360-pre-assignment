import styled from 'styled-components';
import { color } from 'theme';

const CardLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props?.width ?? 304}px;
  height: ${(props) => props?.height ?? 388}px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor ?? color.pureWhite};
`;

function CardComponent({ width, height, backgroundColor, children, ...props }) {
  return (
    <CardLayout
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </CardLayout>
  );
}

const CardTitle = styled.p`
  width: ${(props) =>
    props?.width !== undefined ? `${props.width}px` : '100%'};
  height: ${(props) =>
    props?.height !== undefined ? `${props.height}px` : 'auto'};
  line-height: ${(props) =>
    props?.lineHeight !== undefined ? `${props?.lineHeight}px` : '100%'};
  letter-spacing: -0.03em;
  font-size: ${(props) => props.fontSize ?? props.theme.fontSize.l}px;
  font-weight: ${(props) => props.fontWeight ?? props.theme.fontWeight.bold};
  color: ${(props) => props?.color ?? props.theme.color.darkSlate};
  text-align: ${(props) => props?.textAlign ?? 'start'};
`;

const CardImageLayout = styled.img`
  margin: auto;
  position: ${(props) => (props.isBackground ? 'absolute' : 'relative')};
  top: ${(props) => (props.top ? props.top : 'auto')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'auto')};
  left: ${(props) => (props.left ? props.left : 'auto')};
  right: ${(props) => (props.right ? props.right : 'auto')};
`;

function CardImage({ imageUrl, alt, width, ...props }) {
  return (
    <CardImageLayout src={imageUrl} alt="" width={`${width}px`} {...props} />
  );
}

const Card = Object.assign(CardComponent, {
  Title: CardTitle,
  Image: CardImage,
});

export { Card };

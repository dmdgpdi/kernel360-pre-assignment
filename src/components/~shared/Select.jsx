import ArrowDown from 'sources/arrowDown.png';
import styled from 'styled-components';

const Select = styled.select`
  width: ${(props) =>
    props?.width !== undefined ? `${props.width}px` : 'auto'};
  height: ${(props) =>
    props?.height !== undefined ? `${props.height}px` : 'auto'};
  border: none;
  outline: none;
  appearance: none;
  letter-spacing: -0.02em;
  font-size: ${(props) => props.fontSize ?? props.theme.fontSize.xs}px;
  font-weight: ${(props) => props.fontWeight ?? props.theme.fontWeight.regular};
  color: ${(props) => props?.color ?? props.theme.color.slateGray};
  background-image: url(${ArrowDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 14px;
`;

export { Select };

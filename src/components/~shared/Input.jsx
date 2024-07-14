import styled from 'styled-components';
import ArrowDown from 'sources/arrowDown.png';

const Input = styled.input`
  position: relative;
  width: ${(props) =>
    props?.width !== undefined ? `${props.width}px` : 'auto'};
  height: ${(props) =>
    props?.height !== undefined ? `${props.height}px` : 'auto'};
  border: none;
  outline: none;
  appearance: none;
  letter-spacing: -0.02em;
  font-size: ${(props) => props.fontSize ?? props.theme.fontSize.xs}px;
  color: ${(props) => props?.color ?? props.theme.color.slateGray};

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    background: transparent;
    color: transparent;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  *::-webkit-search-results-button,
  *::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  ${(props) =>
    (props.type === 'date' || props.type === 'time') &&
    `
      background-image: url(${ArrowDown});
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 14px;
    `}
`;

export { Input };

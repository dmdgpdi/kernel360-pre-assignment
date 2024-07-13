import styled from 'styled-components';

const Text = styled.span`
  display: block;
  width: ${(props) =>
    props?.width !== undefined ? `${props.width}px` : 'fit-content'};
  height: ${(props) =>
    props?.height !== undefined ? `${props.height}px` : 'auto'};
  line-height: ${(props) => props?.lineHeight ?? 20}px;
  font-size: ${(props) => props?.fontSize ?? props.theme.fontSize.s}px;
  font-weight: ${(props) => props?.fontWeight ?? props.theme.fontWeight.bold};
  color: ${(props) => props?.color ?? props.theme.color.lightSteel};
  text-decoration-line: ${(props) => props?.decorationLine ?? 'none'};
`;

export { Text };

import styled from 'styled-components';

const Text = styled.p`
  height: ${(props) => props?.height ?? 20}px;
  line-height: ${(props) => props?.height ?? 20}px;
  font-size: ${(props) => props?.fontSize ?? props.theme.fontSize.s}px;
  font-weight: ${(props) => props?.fontWeight ?? props.theme.fontWeight.bold};
  color: ${(props) => props?.color ?? props.theme.color.lightSteel};
`;

export { Text };

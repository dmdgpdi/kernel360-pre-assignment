import styled from 'styled-components';
import { color } from 'theme';

const Box = styled.div`
  position: relative;
  width: ${(props) =>
    props?.width !== undefined ? `${props.width}px` : '100%'};
  height: ${(props) =>
    props?.height !== undefined ? `${props.height}px` : 'auto'};
  border: ${(props) => props?.border ?? 'none'};
  border-radius: ${(props) => props?.radius ?? 0}px;
  background-color: ${(props) => props?.backgroundColor ?? 'transparent'};
  color: ${(props) => props?.color ?? props.theme.color.darkSlate};
  text-align: ${(props) => props?.textAlign ?? 'start'};
`;

export { Box };

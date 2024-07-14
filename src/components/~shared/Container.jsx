import styled from 'styled-components';
import { color } from 'theme';

const Container = styled.div`
  position: ${(props) => props?.position ?? 'relative'};
  display: ${(props) => props?.display ?? 'start'};
  flex-direction: ${(props) => props?.direction ?? 'row'};
  justify-content: ${(props) => props?.justify ?? 'start'};
  align-items: ${(props) => props?.align ?? 'start'};
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
  border: ${(props) => props?.border ?? 'none'};
  border-radius: ${(props) => props?.radius ?? 0}px;
  background-color: ${(props) => props?.backgroundColor ?? color.pureWhite};
  font-size: ${(props) => props?.fontSize ?? props.theme.fontSize.m}px;
  font-weight: ${(props) => props?.fontWeight ?? props.theme.fontWeight.medium};
`;

export { Container };

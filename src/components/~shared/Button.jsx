import styled from 'styled-components';

const Button = styled.button`
  display: ${(props) => props?.display ?? 'start'};
  justify-content: ${(props) => props?.justify ?? 'start'};
  align-items: ${(props) => props?.align ?? 'start'};
  width: ${(props) => props?.width ?? 116}px;
  height: ${(props) => props?.height ?? 44}px;
  border: ${(props) => props?.border ?? 'none'};
  border-radius: ${(props) => props?.radius ?? 0}px;
  background-color: ${(props) =>
    props?.backgroundColor ?? props.theme.color.mainBlue};
  color: ${(props) => props?.color ?? props.theme.color.pureWhite};
  font-size: ${(props) => props?.fontSize ?? props.theme.fontSize.m}px;
  font-weight: ${(props) => props?.fontWeight ?? props.theme.fontWeight.medium};
  cursor: pointer;
`;

export { Button };

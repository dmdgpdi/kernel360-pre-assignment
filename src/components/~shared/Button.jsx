import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => props?.width ?? 116}px;
  height: ${(props) => props?.height ?? 44}px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props?.backgroundColor ?? props.theme.color.mainBlue};
  color: ${(props) => props?.color ?? props.theme.color.pureWhite};
  font-size: ${(props) => props?.fontSize ?? props.theme.fontSize.m}px;
  font-weight: ${(props) => props?.fontWeight ?? props.theme.fontWeight.medium};
  cursor: pointer;
`;

export { Button };

import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props?.direction ?? 'row'};
  justify-content: ${(props) => props?.justify ?? 'start'};
  align-items: ${(props) => props?.align ?? 'start'};
  gap: ${(props) => props.gap ?? 0};
  flex-wrap: ${(props) => (props.$wrap ? props.$wrap : 'nowrap')};
`;

export { Flex };

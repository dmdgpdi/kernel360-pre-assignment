import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props?.justify ?? 'start'};
  align-items: ${(props) => props?.align ?? 'start'};
`;

export { Flex };

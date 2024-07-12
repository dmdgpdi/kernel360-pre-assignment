import styled from 'styled-components';

const ZIndex = styled.div`
  z-index: ${(props) => props?.zIndex ?? 'auto'};
`;

export { ZIndex };

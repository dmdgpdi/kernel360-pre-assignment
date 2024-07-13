import styled from 'styled-components';

const Divider = styled.hr`
  width: 100%;
  border: ${(props) => props?.border && '1px solid black'};
`;

export { Divider };

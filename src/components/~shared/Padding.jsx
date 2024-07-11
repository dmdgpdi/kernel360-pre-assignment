import styled from 'styled-components';

const getPadding = (paddingList) => {
  switch (paddingList.length) {
    case 1:
      return `${paddingList[0]}px`;
    case 2:
      return `${paddingList[0]}px ${paddingList[1]}px`;
    case 3:
      return `${paddingList[0]}px ${paddingList[1]}px ${paddingList[2]}px`;
    case 4:
      return `${paddingList[0]}px ${paddingList[1]}px ${paddingList[2]}px ${paddingList[3]}px`;
    default:
      return '0px';
  }
};

const Padding = styled.div`
  padding: ${(props) => getPadding(props.padding)};
`;

export { Padding };

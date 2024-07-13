import styled from 'styled-components';
import { Heart, Fuel, Disc, UsersRound, ArrowDownUp } from 'lucide-react';
import { fontSize, color } from 'theme';

function Icon({ type, color = 'black', size = fontSize.xl, isFill = false }) {
  switch (type) {
    case 'heart': {
      return <Heart size={size} color={color} fill={isFill ? color : 'none'} />;
    }
    case 'fuel': {
      return <Fuel size={size} color={color} fill={isFill ? color : 'none'} />;
    }
    case 'disc': {
      return <Disc size={size} color={color} fill={isFill ? color : 'none'} />;
    }
    case 'people': {
      return (
        <UsersRound size={size} color={color} fill={isFill ? color : 'none'} />
      );
    }
    case 'arrowDownUp': {
      return (
        <ArrowDownUp size={size} color={color} fill={isFill ? color : 'none'} />
      );
    }
    default: {
      return null;
    }
  }
}

const IconWrapperButton = styled.button`
  width: ${(props) =>
    props?.width !== undefined ? `${props.width}px` : 'fit-content'};
  height: ${(props) =>
    props?.height !== undefined ? `${props.height}px` : 'fit-content'};
  background: none;
  background-color: ${(props) => props?.backgroundColor ?? 'none'};
  border: none;
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
`;

function HeartButton({ isLiked }) {
  return (
    <IconWrapperButton>
      <Icon
        type={'heart'}
        size={fontSize.xl}
        color={color.alertRed}
        isFill={isLiked}
      />
    </IconWrapperButton>
  );
}

export { Icon, IconWrapperButton, HeartButton };

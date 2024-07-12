import styled from 'styled-components';
import { Heart, Fuel, Disc, UsersRound } from 'lucide-react';
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
    default: {
      return null;
    }
  }
}

const IconWrapperButton = styled.button`
  width: fit-content;
  height: min-content;
  background: none;
  border: none;
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

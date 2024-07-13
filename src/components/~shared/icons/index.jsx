import styled from 'styled-components';
import {
  Heart,
  Fuel,
  Disc,
  UsersRound,
  ArrowDownUp,
  Search,
  SlidersHorizontal,
  Bell,
  Settings,
} from 'lucide-react';
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
    case 'search': {
      return (
        <Search size={size} color={color} fill={isFill ? color : 'none'} />
      );
    }
    case 'option': {
      return (
        <SlidersHorizontal
          size={size}
          color={color}
          fill={isFill ? color : 'none'}
        />
      );
    }
    case 'bell': {
      return <Bell size={size} color={color} fill={isFill ? color : 'none'} />;
    }
    case 'setting': {
      return (
        <Settings size={size} color={color} fill={isFill ? color : 'none'} />
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
  background-color: ${(props) => props?.backgroundColor ?? 'transparent'};
  border: ${(props) => props?.border ?? 'none'};
  border-radius: ${(props) => props?.radius ?? 0}px;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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

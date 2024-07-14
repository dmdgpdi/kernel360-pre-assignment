import { color } from 'theme';
import { CarBannerCard } from './CarBannerCard';
import car1ImageUrl from 'sources/car1.png';
import car2ImageUrl from 'sources/car2.png';

export default {
  component: CarBannerCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const SkyBlue = {
  args: {
    backgroundColor: color.skyBlue,
    title: 'The Best Platform for Car Rental',
    text: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
    imageUrl: car1ImageUrl,
  },
};

export const MainBlue = {
  args: {
    backgroundColor: color.mainBlue,
    title: 'Easy way to rent a car at a low price',
    text: 'Providing cheap car rental services and safe and comfortable facilities.',
    imageUrl: car2ImageUrl,
  },
};

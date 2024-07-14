import popularCar from 'sources/popular-car.json';
import { CarInfoCard } from './CarInfoCard';

const image =
  'https://cars.usnews.com/static/images/Auto/izmo/i4762/2015_nissan_gt_r_sideview.jpg';

export default {
  component: CarInfoCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    salePrice: {
      control: 'number',
    },
  },
};

export const InfoCard = {
  args: {
    name: 'Nissan GT-R',
    type: 'Sport',
    isLiked: true,
    image,
    fuelCapacity: 90,
    gearType: 'Manual',
    seats: 2,
    salePrice: 80.0,
    originalPrice: 100.0,
  },
};

export const InfoCardWithoutSalePrice = {
  args: {
    name: 'Nissan GT-R',
    type: 'Sport',
    isLiked: true,
    image,
    fuelCapacity: 90,
    gearType: 'Manual',
    seats: 2,
    originalPrice: 100.0,
  },
};

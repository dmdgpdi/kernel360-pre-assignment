import { color, fontSize } from 'theme';
import car1ImageUrl from 'sources/car1.png';
import car2ImageUrl from 'sources/car2.png';
import allPopularCarList from 'sources/popular-car.json';
import allRecommendationCarList from 'sources/recommendation-car.json';
import {
  Header,
  Footer,
  Container,
  Flex,
  Padding,
  Gap,
  Text,
  Box,
  CarBannerCard,
  CarRentalCard,
  CarInfoCard,
  Button,
} from 'components';

const skyBlueBanner = {
  backgroundColor: color.skyBlue,
  title: 'The Best Platform for Car Rental',
  text: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
  imageUrl: car1ImageUrl,
};

const mainBlueBanner = {
  backgroundColor: color.mainBlue,
  title: 'Easy way to rent a car at a low price',
  text: 'Providing cheap car rental services and safe and comfortable facilities.',
  imageUrl: car2ImageUrl,
};

const popularCarList = allPopularCarList.slice(0, 4);
const recommendationCarList = allRecommendationCarList.slice(0, 8);

function Home() {
  return (
    <>
      <Header />
      <Container width={'100vw'} backgroundColor={color.smoothGray}>
        <Padding padding={[32, 64, 64, 64]}>
          <Flex direction={'column'} align={'center'}>
            <Flex justify={'center'} gap={'32px'}>
              <CarBannerCard {...skyBlueBanner} />
              <CarBannerCard {...mainBlueBanner} />
            </Flex>
            <Gap size={32} />
            <CarRentalCard />
            <Gap size={36} />
            <Box width={'1312'} height={'44'}>
              <Flex justify={'space-between'}>
                <Text fontSize={fontSize.m}>Popular Car</Text>
                <Text fontSize={fontSize.m} color={color.mainBlue}>
                  View All
                </Text>
              </Flex>
            </Box>
            <Gap size={20} />
            <Flex gap={'32px'}>
              {popularCarList.map((car, index) => {
                return <CarInfoCard key={index} {...car} />;
              })}
            </Flex>
            <Gap size={32} />
            <Box width={'1312'} height={'44'}>
              <Flex justify={'space-between'}>
                <Text fontSize={fontSize.m}>Recomendation Car</Text>
              </Flex>
            </Box>
            <Gap size={20} />
            <Box width={'1312'}>
              <Flex gap={'32px'} $wrap={'wrap'} align={'center'}>
                {recommendationCarList.map((car, index) => {
                  return <CarInfoCard key={index} {...car} />;
                })}
              </Flex>
            </Box>
            <Gap size={64} />
            <Box width={'1312'}>
              <Flex justify={'center'}>
                <Button width={154}>Show more car</Button>
                <Text position={'absolute'} right={'0px'} top={'10px'}>
                  120 Car
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Padding>
      </Container>
      <Footer />
    </>
  );
}

export { Home };

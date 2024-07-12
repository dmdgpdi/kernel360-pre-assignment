import { color } from 'theme';
import {
  Padding,
  Gap,
  HeartButton,
  Icon,
  Card,
  Text,
  Button,
  Flex,
} from 'components/~shared';

// ,

function CarInfoCard({
  name,
  type,
  isLiked,
  image,
  fuelCapacity,
  gearType,
  seats,
  salePrice,
  originalPrice,
}) {
  const hasSalePrice = !!salePrice;

  return (
    <Card>
      <Padding padding={[24]}>
        <Flex justify={'space-between'}>
          <div>
            <Card.Title>{name}</Card.Title>
            <Gap size={4}></Gap>
            <Text>{type}</Text>
          </div>
          <HeartButton isLiked={isLiked} />
        </Flex>
        <Gap size={32}></Gap>
        <Card.Image imageUrl={image} width={232} />
        <Gap size={32}></Gap>
        <Flex justify={'space-between'}>
          <Flex>
            <Icon type={'fuel'} size={24} color={color.lightSteel} />
            <Gap size={6}></Gap>
            <Text height={24}>{fuelCapacity}L</Text>
          </Flex>
          <Flex>
            <Icon type={'disc'} size={24} color={color.lightSteel} />
            <Gap size={4}></Gap>
            <Text height={24}>{gearType}</Text>
          </Flex>
          <Flex>
            <Icon type={'people'} size={24} color={color.lightSteel} />
            <Gap size={6}></Gap>
            <Text height={24}>{seats} People</Text>
          </Flex>
        </Flex>
        <Gap size={24} />
        <Flex justify={'space-between'}>
          {hasSalePrice ? (
            <div>
              <Flex>
                <Text fontSize={20} fontWeight={700} color={color.darkSlate}>
                  ${salePrice}/
                </Text>
                <Text fontWeight={700}>day</Text>
              </Flex>
              <Gap size={4}></Gap>
              <Text decorationLine={'line-through'}>${originalPrice}</Text>
            </div>
          ) : (
            <Flex>
              <Text fontSize={20} fontWeight={700} color={color.darkSlate}>
                ${originalPrice}/
              </Text>
              <Text fontWeight={700}>day</Text>
            </Flex>
          )}

          <Button>Rent Now</Button>
        </Flex>
      </Padding>
    </Card>
  );
}

export { CarInfoCard };
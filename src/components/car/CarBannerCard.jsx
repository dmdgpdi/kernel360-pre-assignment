import { color, fontSize, fontWeight } from 'theme';
import {
  Padding,
  Gap,
  Card,
  Text,
  Button,
  Flex,
  ZIndex,
} from 'components/~shared';

function CarBannerCard({ backgroundColor, title, text, imageUrl }) {
  const buttonBackgroundColor =
    backgroundColor === color.mainBlue ? color.skyBlue : color.mainBlue;

  return (
    <Card width={640} height={360} backgroundColor={backgroundColor}>
      <Padding padding={[24]}>
        <ZIndex zIndex={2}>
          <Flex justify={'start'} align={'start'} direction={'column'}>
            <Card.Title
              color={color.pureWhite}
              fontSize={fontSize.xxl}
              width={272}
              lineHeight={48}
            >
              {title}
            </Card.Title>
            <Gap size={16}></Gap>
            <Text
              color={color.pureWhite}
              fontSize={fontSize.m}
              fontWeight={fontWeight.regular}
              lineHeight={24}
              width={284}
            >
              {text}
            </Text>
            <Gap size={20}></Gap>
            <Button
              width={120}
              height={44}
              backgroundColor={buttonBackgroundColor}
              radius={4}
            >
              Rental Car
            </Button>
          </Flex>
        </ZIndex>
      </Padding>
      <ZIndex zIndex={1}>
        <Card.Image
          isBackground={true}
          imageUrl={imageUrl}
          width={406}
          bottom={'10px'}
          left={'137px'}
        />
      </ZIndex>
    </Card>
  );
}

export { CarBannerCard };

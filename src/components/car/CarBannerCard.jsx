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
      <ZIndex zIndex={1}>
        <Padding padding={[24]}>
          <Flex justify={'space-between'}>
            <div>
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
            </div>
          </Flex>
          <Gap size={20}></Gap>
          <Button
            width={120}
            height={44}
            backgroundColor={buttonBackgroundColor}
          >
            Rental Car
          </Button>
        </Padding>
      </ZIndex>
      <Card.Image
        isBackground={true}
        imageUrl={imageUrl}
        width={406}
        bottom={10}
        left={137}
      />
    </Card>
  );
}

export { CarBannerCard };

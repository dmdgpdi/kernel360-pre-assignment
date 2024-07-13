import { color, fontSize } from 'theme';
import Icon1 from 'sources/mark1.png';
import Icon2 from 'sources/mark2.png';
import {
  Card,
  Flex,
  Icon,
  IconWrapperButton,
  Padding,
  Gap,
  Text,
  Select,
  Input,
} from 'components/~shared';

function PickUpCard() {
  return (
    <Card width={582} height={132}>
      <Padding padding={[24, 48]}>
        <Flex>
          <Card.Image imageUrl={Icon1}></Card.Image>
          <Gap size={8} />
          <Card.Title fontSize={fontSize.m}>Pick - Up</Card.Title>
        </Flex>

        <Gap size={16}></Gap>
        <Flex justify={'space-between'}>
          <Flex direction={'column'}>
            <label for="start-location">
              <Text color={color.darkSlate} fontSize={fontSize.m}>
                Locations
              </Text>
            </label>
            <Gap size={8} />
            <Select
              name="start-location"
              id="start-location"
              width={130}
              height={20}
            >
              <option value="">Select your city</option>
              <option value="seoul">Seoul</option>
              <option value="busan">Busan</option>
            </Select>
          </Flex>
          <Flex direction={'column'}>
            <label for="start-date">
              <Text color={color.darkSlate} fontSize={fontSize.m}>
                Date
              </Text>
            </label>
            <Gap size={8} />
            <Input
              width={130}
              height={20}
              type="date"
              name="start-date"
              id="start-date"
              min="2018-01-01"
              max="2024-12-31"
            />
          </Flex>
          <Flex direction={'column'}>
            <label for="start-time">
              <Text color={color.darkSlate} fontSize={fontSize.m}>
                Time
              </Text>
            </label>
            <Gap size={8} />
            <Input
              width={130}
              height={20}
              type="time"
              name="start-time"
              id="start-time"
              min="09:00"
              max="18:00"
              required
            />
          </Flex>
        </Flex>
      </Padding>
    </Card>
  );
}

function DropOffCard() {
  return (
    <Card width={582} height={132}>
      <Padding padding={[24, 48]}>
        <Flex>
          <Card.Image imageUrl={Icon2}></Card.Image>
          <Gap size={8} />
          <Card.Title fontSize={fontSize.m}>Drop - off</Card.Title>
        </Flex>

        <Gap size={16}></Gap>
        <Flex justify={'space-between'}>
          <Flex direction={'column'}>
            <label for="pet-select">
              <Text color={color.darkSlate} fontSize={fontSize.m}>
                Locations
              </Text>
            </label>
            <Gap size={8} />
            <Select
              name="end-location"
              id="end-location"
              width={130}
              height={20}
            >
              <option value="">Select your city</option>
              <option value="seoul">Seoul</option>
              <option value="busan">Busan</option>
            </Select>
          </Flex>
          <Flex direction={'column'}>
            <label for="end-date">
              <Text color={color.darkSlate} fontSize={fontSize.m}>
                Date
              </Text>
            </label>
            <Gap size={8} />
            <Input
              width={130}
              height={20}
              type="date"
              name="end-date"
              id="end-date"
              min="2018-01-01"
              max="2024-12-31"
            />
          </Flex>
          <Flex direction={'column'}>
            <label for="end-time">
              <Text color={color.darkSlate} fontSize={fontSize.m}>
                Time
              </Text>
            </label>
            <Gap size={8} />
            <Input
              width={130}
              height={20}
              type="time"
              name="end-time"
              id="end-time"
              min="09:00"
              max="18:00"
              required
            />
          </Flex>
        </Flex>
      </Padding>
    </Card>
  );
}

function CarRentalCard() {
  return (
    <Flex justify={'space-between'} align={'center'}>
      <PickUpCard />
      <IconWrapperButton
        width={60}
        height={60}
        backgroundColor={color.mainBlue}
      >
        <Icon type={'arrowDownUp'} size={24} color={color.pureWhite} />
      </IconWrapperButton>
      <DropOffCard />
    </Flex>
  );
}

export { CarRentalCard };

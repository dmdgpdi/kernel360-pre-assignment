import { color, fontSize, fontWeight } from 'theme';
import profileImage from 'sources/car1.png';
import {
  Flex,
  Padding,
  Gap,
  Icon,
  Text,
  Box,
  Input,
  IconWrapperButton,
  Button,
  Container,
} from 'components/~shared';

function SearchBar() {
  return (
    <Box
      width={492}
      height={44}
      border={'1px solid rgba(195, 212, 233, 0.4)'}
      radius={70}
    >
      <Padding padding={[10, 20]}>
        <Flex align={'center'} justify={'space-between'}>
          <Flex align={'center'}>
            <IconWrapperButton>
              {' '}
              <Icon
                type={'search'}
                size={fontSize.xl}
                color={color.slateGray}
              />
            </IconWrapperButton>

            <Gap size={20} />
            <Input
              type="search"
              name=""
              id=""
              placeholder="Search something here"
              width={350}
              height={20}
              fontSize={fontSize.s}
            />
          </Flex>
          <IconWrapperButton>
            <Icon type={'option'} size={fontSize.xl} color={color.slateGray} />
          </IconWrapperButton>
        </Flex>
      </Padding>
    </Box>
  );
}

function Header() {
  return (
    <Container width={'100vw'} height={'124px'}>
      <Padding padding={[40, 64]}>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'}>
            <h1>
              <Text
                color={color.mainBlue}
                fontSize={fontSize.xxl}
                fontWeight={fontWeight.bold}
                lineHeight={44}
                width={172}
              >
                KernelRent
              </Text>
            </h1>
            <Gap size={36} />
            <SearchBar />
          </Flex>
          <Flex align={'center'}>
            <IconWrapperButton
              width={44}
              height={44}
              border={`1px solid ${color.translucentGray}`}
              radius={90}
            >
              <Icon
                type={'heart'}
                size={fontSize.xl}
                color={color.slateGray}
                isFill={false}
              />
            </IconWrapperButton>

            <Gap size={20} />
            <IconWrapperButton
              width={44}
              height={44}
              border={`1px solid ${color.translucentGray}`}
              radius={90}
            >
              <Icon
                type={'bell'}
                size={fontSize.xl}
                color={color.slateGray}
                isFill={false}
              />
            </IconWrapperButton>
            <Gap size={20} />
            <IconWrapperButton
              width={44}
              height={44}
              border={`1px solid ${color.translucentGray}`}
              radius={90}
            >
              <Icon
                type={'setting'}
                size={fontSize.xl}
                color={color.slateGray}
                isFill={false}
              />
            </IconWrapperButton>
            <Gap size={20} />
            <Button
              width={44}
              height={44}
              border={`1px solid ${color.translucentGray}`}
              radius={90}
              backgroundColor={color.pureWhite}
              display={'flex'}
              justify={'center'}
              align={'center'}
            >
              <img src={profileImage} alt="" srcset="" />
            </Button>
          </Flex>
        </Flex>
      </Padding>
    </Container>
  );
}

export { Header };

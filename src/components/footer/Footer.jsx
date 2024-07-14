import { color, fontSize, spacing, fontWeight } from 'theme';
import {
  Container,
  Divider,
  Padding,
  Flex,
  Gap,
  Text,
} from 'components/~shared';

const navObject = {
  About: ['How it works', 'Featured', 'Partnership', 'Bussiness Relation'],
  Community: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
  Socials: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
};

function NavItemList({ navItemList }) {
  return (
    <Flex direction={'column'} gap={`${spacing.xxs}px`}>
      {navItemList.map((item) => (
        <Text
          key={item}
          color={color.smoothBlack}
          fontSize={fontSize.m}
          fontWeight={fontWeight.regular}
        >
          {item}
        </Text>
      ))}
    </Flex>
  );
}

function Footer() {
  return (
    <Container width={'100vw'} height={'480px'}>
      <Padding padding={[80, 60, 60, 60]}>
        <Flex justify={'space-between'}>
          <Flex direction={'column'}>
            <Text color={color.mainBlue} fontSize={fontSize.xxl}>
              KernelRent
            </Text>
            <Gap size={spacing.xxxs} />
            <Text fontSize={fontSize.m} width={292}>
              Our vision is to provide convenience and help increase your sales
              business.
            </Text>
          </Flex>
          <nav>
            <Flex gap={'60px'}>
              {Object.entries(navObject).map(([key, value]) => {
                return (
                  <div key={key}>
                    <Text
                      color={color.deepBlack}
                      fontSize={fontSize.l}
                      fontWeight={fontWeight.medium}
                    >
                      {key}
                    </Text>
                    <Gap size={spacing.xs} />
                    <NavItemList navItemList={value} />
                  </div>
                );
              })}
            </Flex>
          </nav>
        </Flex>
        <Gap size={spacing.m} />
        <Divider />
        <Gap size={spacing.m} />
        <Flex justify={'space-between'}>
          <Text
            color={color.darkSlate}
            fontSize={fontSize.m}
            fontWeight={fontWeight.medium}
          >
            ©2024 KernelRent. All rights reserved
          </Text>
          <Flex gap={'60px'}>
            <Text
              color={color.darkSlate}
              fontSize={fontSize.m}
              fontWeight={fontWeight.medium}
            >
              Privacy & Policy
            </Text>
            <Text
              color={color.darkSlate}
              fontSize={fontSize.m}
              fontWeight={fontWeight.medium}
            >
              Terms & Condition
            </Text>
          </Flex>
        </Flex>
      </Padding>
    </Container>
  );
}

export { Footer };

// Libs
import { ROUTE } from '@/constants';
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type TAlignment = 'center' | 'space-between';
type TVariant = 'primary' | 'secondary';

interface HeaderSectionProps {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
  alignment?: TAlignment;
  variant?: TVariant;
}

const HeaderSection = ({
  title,
  subTitle = '',
  children,
  alignment = 'space-between',
  variant = 'primary',
  ...props
}: HeaderSectionProps) => {
  const textAlign = alignment === 'center' ? 'center' : 'left';
  const maxW = alignment === 'center' ? '' : '495px';

  const variantStyles = {
    primary: {
      sizeTitle: '3xl',
      sizeSubTitle: 'lg-extra',
    },
    secondary: {
      sizeTitle: 'xl',
      sizeSubTitle: 'md',
    },
  };

  const { sizeTitle, sizeSubTitle } = variantStyles[variant];

  return (
    <Flex
      maxW="1204px"
      justifyContent={alignment}
      alignItems="center"
      {...props}
    >
      <VStack align={textAlign}>
        <Text size={sizeTitle} maxW={maxW}>
          {title}
        </Text>
        {subTitle && <Text size={sizeSubTitle}>{subTitle}</Text>}
      </VStack>
      {children}
    </Flex>
  );
};

interface BecomeMembershipProps {
  title: string;
  subTitle: string;
  image?: string;
}

const BecomeMembership = ({
  title,
  subTitle,
  image,
}: BecomeMembershipProps) => {
  return (
    <HStack
      bgColor="red.400"
      maxW="820px"
      minH="209px"
      borderRadius="sm"
      px="32px"
      color="white"
    >
      <VStack align="start">
        <Text maxW="311px" size="3xl">
          {title}
        </Text>
        <Text size="lg-extra">{subTitle}</Text>
      </VStack>
    </HStack>
  );
};

const mockBenefits = [
  'Access to All Facilities',
  'Standard Class Enrollment',
  'Personal Training Session',
  'Exclusive Member Discount',
];

const PackageCard = () => {
  return (
    <VStack
      align="start"
      p="32px"
      maxW="356px"
      borderRadius="sm"
      bgColor="white"
    >
      <Box h="200px" w="full" bgColor="yellow.200" mb="24px">
        Thumbnail
      </Box>
      <HeaderSection
        title="Reqular Package Plan"
        subTitle="Enjoy all subscribe package benefits"
        variant="secondary"
      />

      {mockBenefits.map((name) => (
        <Flex flexDirection="row" alignItems="center">
          <Box
            w="36px"
            h="36px"
            bgColor={'purple.300'}
            mr="20px"
            borderRadius="999px"
          ></Box>
          <Text size="md">{name}</Text>
        </Flex>
      ))}

      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Button variant="primary">Subscribe</Button>
        <Text maxW="98px" size="lg">
          Rp 199.000/ 3 Month
        </Text>
      </Flex>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Box bgColor="black" p="80px" color="white" maxW="1200px" borderRadius="lg">
      <Flex mb="46px">
        <VStack flex="1" align="start">
          <Box>FITCAMP</Box>
          <Text size="md" maxW="250px" letterSpacing="0.3px">
            Largest gym in indonesian, top-tier facilities, premium amenities,
            and nationwide access to all gy, location
          </Text>
        </VStack>
        <VStack w="121px" align="start">
          <Text size="md" fontWeight="600">
            More to Know
          </Text>
          <Text size="xs">Blog</Text>
          <Text size="xs">Subscription</Text>
          <Text size="xs">Testimonial</Text>
          <Text size="xs">About</Text>
        </VStack>
        <VStack w="121px" align="start">
          <Text size="md" fontWeight="600">
            Contact Us
          </Text>
          <Text size="xs">021-0892-2323</Text>
          <Text size="xs">@fitcamp.body.fit</Text>
          <Text size="xs">admin@fitcamp.com</Text>
        </VStack>
      </Flex>

      <Divider />

      <Flex justifyContent="space-between" mt="48px">
        <Text size="xs">2024 fitcampcorption</Text>
        <HStack>
          <Text size="xs">Terms of Services</Text>
          <Text size="xs">Privacy Policy</Text>
          <Text size="xs">Cookies</Text>
          <Text size="xs">Legal</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

const MockReviewCard = [
  'This gym is fantastic! the equipment is top-notch, and the facility is always clean and well maintained',
  'I’ve been a member of this gym for six months, and it’s been a game-changer! The trainers are incredibly great!',
  'This gym is fantastic! the equipment is top-notch, and the facility is always clean and well maintained',
  'I’ve been a member of this gym for six months, and it’s been a game-changer! The trainers are incredibly great!',
  'This gym is fantastic! the equipment is top-notch, and the facility is always clean and well maintained',
  'I’ve been a member of this gym for six months, and it’s been a game-changer! The trainers are incredibly great!',
];

const ReviewCard = ({ description }: { description: string }) => {
  return (
    <VStack
      maxWidth="378px"
      px="24px"
      py="16px"
      align="start"
      borderRadius="24px"
      borderColor="gray.200"
      borderWidth="1px"
      mb="12px"
    >
      <Box h="48px" bgColor="yellow.200" w="full"></Box>
      <Text size="md">{description}</Text>
      <Box h="24px" bgColor="yellow.200" w="full"></Box>
    </VStack>
  );
};

const HappyStories = () => {
  return (
    <VStack align="" p="32px" bgColor="red.300" maxW="832px" borderRadius="sm">
      <HeaderSection
        title="Happy Stories"
        subTitle="What they said about this gym location, facilities, and environtment"
      />
      <Flex wrap="wrap" justifyContent="space-between">
        {MockReviewCard.map((item) => (
          <ReviewCard description={item} />
        ))}
      </Flex>

      <Flex w="full" mt="32px" justifyContent="center">
        <Button variant="secondary">Load More</Button>
      </Flex>
    </VStack>
  );
};

interface InputFieldProps {
  label: string;
  value: string;
  onChange: () => void;
  direction: 'row' | 'column';
}

const InputField = ({ label, value, onChange, direction }: InputFieldProps) => {
  const style = {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    column: {
      flexDirection: 'column',
      justifyContent: '',
      alignItems: 'start',
    },
  };

  // const { alignItems, flexDirection, justifyContent } = style[direction];

  return (
    <Box w="820px" p="32px" borderRadius="sm" bgColor="red.200">
      <Flex
        flexDirection="column"
        // justifyContent="space-between"
        alignItems="start"
      >
        <Text>{label}</Text>
        <Input
          value={value}
          onChange={onChange}
          placeholder="Input full name of yourself"
          variant="outline"
          borderRadius="xs"
          maxW="599px"
        />
      </Flex>
    </Box>
  );
};
const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      {/* TODO: Simulate navigate */}
      {/* <Link to={ROUTE.CATEGORY}>See All</Link> */}

      {/* <HeaderSection
        title="Latest Added"
        subTitle="New gyms from around the city with variety facilities available"
        children={<Button variant="primary">Become Member</Button>}
      />
      <br />

      <HeaderSection
        title="Joined 10.000+ User
        with Happy User"
        children={<Button variant="secondary">See All</Button>}
      />
      <br />

      <HeaderSection
        title="Gym Location"
        subTitle="Find the nearby gym that near your location to transfrom your healthy journey "
      />
      <br />

      <HeaderSection
        title="Unlock All the Membership  Benefits"
        subTitle="Experience full access to premium, features, services, and facilities"
        alignment="center"
      />
      <br />
      <HeaderSection
        title="Account Details"
        subTitle="Fill your data and make sure your contact before checkout"
        // alignment="center"
        variant="secondary"
      />
      <br />
      <BecomeMembership
        title="Become Membership"
        subTitle="Yearly subscription, pay less more benefits"
      /> */}
      {/* <Flex
        justifyContent="space-evenly"
        maxW="1132px"
        bgColor="red.300"
        p="24px"
      >
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </Flex> */}

      {/* <Footer /> */}

      {/* <HappyStories /> */}

      <InputField
        label="Full Name"
        value=""
        onChange={() => {}}
        direction="column"
      />
      <InputField
        label="Full Name"
        value=""
        onChange={() => {}}
        direction="column"
      />
    </>
  );
};

export default Dashboard;

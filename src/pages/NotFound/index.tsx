// Libs
import { Heading, Text, Center, Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const boxHeight = `calc(100vh - 72px)`;

  return (
    <Center h={boxHeight} backgroundColor="borderSecondaryColor">
      <Stack>
        <Heading as="h1" fontSize="6xl" color="red">
          404
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Page not found
        </Text>
        <Text fontSize="lg" color="gray.600">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Link to={'/'}>
          <Button my="4">Back home page</Button>
        </Link>
      </Stack>
    </Center>
  );
};

export default NotFound;

import { extendTheme } from '@chakra-ui/react';
import { fonts, fontSizes, lineHeights, radius } from './typography';

// Components
import { Avatar, Button, Text } from './components';

const configThemes = extendTheme({
  fonts,
  fontSizes,
  lineHeights,
  radii: radius,
  components: {
    Avatar,
    Text,
    Button,
  },
});

export default configThemes;

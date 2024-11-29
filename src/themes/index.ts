import { extendTheme } from '@chakra-ui/react';
import { fonts, fontSizes, lineHeights, radius } from './typography';

// Components
import { Avatar, Text } from './components';

const configThemes = extendTheme({
  fonts,
  fontSizes,
  lineHeights,
  radii: radius,
  components: {
    Avatar,
    Text,
  },
});

export default configThemes;

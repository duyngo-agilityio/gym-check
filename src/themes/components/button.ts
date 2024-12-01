import { defineStyleConfig } from '@chakra-ui/react';
import { colors } from '../color';

export const Button = defineStyleConfig({
  baseStyle: {
    color: colors.textSecondary,
    borderRadius: 'sm',
  },

  variants: {
    primary: {
      bgColor: colors.backgroundPurple,
      py: 2.5,
      px: 25,
      fontSize: 'sm',
      fontWeight: '600',
    },
    secondary: {
      bgColor: colors.textPrimary,
      py: 2.5,
      px: 25,
      fontSize: 'sm',
      fontWeight: '600',
    },
  },
});

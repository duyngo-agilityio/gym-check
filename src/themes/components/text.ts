import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  sizes: {
    xs: {
      fontSize: 'xxs', //12px
      lineHeight: 1,
      fontWeight: '400',
    },
    md: {
      fontSize: 'xs', //14px
      lineHeight: 2,
      fontWeight: '400',
    },
    lg: {
      fontSize: 'sm', //16px
      lineHeight: 3,
      fontWeight: '600',
    },
    'lg-extra': {
      fontSize: 'sm', //16px
      lineHeight: 3,
      fontWeight: '400',
    },
    xl: {
      fontSize: 'md', //20px
      lineHeight: 4,
      fontWeight: '600',
    },
    'xl-extra': {
      fontSize: 'lg', //24px
      lineHeight: 6,
      fontWeight: '600',
    },
    xxl: {
      fontSize: 'xl', //32px
      lineHeight: 7,
      fontWeight: '600',
    },
    '3xl': {
      fontSize: 'xxl', //48px
      lineHeight: 8,
      fontWeight: '600',
    },
    '4xl': {
      fontSize: '3xl', //96px
      lineHeight: 9,
      fontWeight: '600',
    },
  },

  defaultProps: {
    size: 'lg',
  },
});

import { defineStyleConfig } from '@chakra-ui/react';

export const Avatar = defineStyleConfig({
  sizes: {
    xs: {
      container: {
        width: '40px',
        height: '40px',
      },
    },
    sm: {
      container: {
        width: '48px',
        height: '48px',
      },
    },
    md: {
      container: {
        width: '56px',
        height: '56px',
      },
    },
    lg: {
      container: {
        width: '80px',
        height: '80px',
      },
    },
  },

  defaultProps: {
    size: 'xs',
  },
});

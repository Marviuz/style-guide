import { cva } from 'class-variance-authority';

export const sidebarVariants = cva('', {
  variants: {
    variant: {
      default: 'space-y-2',
      compact: 'space-y-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

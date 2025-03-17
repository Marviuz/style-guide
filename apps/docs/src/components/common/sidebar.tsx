import { type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import { sidebarVariants } from './sidebar.variants';

export function Sidebar({ className, ...props }: ComponentProps<'aside'>) {
  return (
    <aside
      className={cn(
        'sticky top-14 h-[calc(theme(height.svh)-theme(height.14))] w-full max-w-xs overflow-y-auto',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('px-4 py-16', className)} {...props} />;
}

export function SidebarList({
  className,
  variant,
  ...props
}: ComponentProps<'ul'> & VariantProps<typeof sidebarVariants>) {
  return (
    <ul className={cn(sidebarVariants({ variant, className }))} {...props} />
  );
}

export function SidebarListItem({ className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      className={cn('w-fit text-muted-foreground hover:underline', className)}
      {...props}
    />
  );
}

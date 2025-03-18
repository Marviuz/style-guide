import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

export function CodeBlockTitleContainer({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('[&>pre]:mt-0 [&>pre]:rounded-t-none', className)}
      {...props}
    />
  );
}

export function CodeBlockTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-muted-foreground rounded-t-sm p-2 text-sm italic [&:has(+pre>code)]:border-x [&:has(+pre>code)]:border-t',
        className,
      )}
      {...props}
    />
  );
}

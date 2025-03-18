import {
  type Tabs as FumaTabs,
  type Tab as FumaTab,
} from 'fumadocs-ui/components/tabs';
import { type ComponentProps } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './common/tabs';

export function PackageInstallerTabs({
  items,
  children,
}: ComponentProps<typeof FumaTabs>) {
  return (
    <Tabs defaultValue={items?.at(0)}>
      <TabsList>
        {items?.map((item) => (
          <TabsTrigger key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}

export function PackageInstallerTab({
  value,
  children,
}: ComponentProps<typeof FumaTab>) {
  return value ? <TabsContent value={value}>{children}</TabsContent> : null;
}

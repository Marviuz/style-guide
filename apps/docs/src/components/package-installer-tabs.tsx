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
    <Tabs className="gap-0" defaultValue={items?.at(0)}>
      <TabsList className="w-full justify-start rounded-b-none">
        {items?.map((item) => (
          <TabsTrigger className="grow-0" key={item} value={item}>
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
  return value ? (
    <TabsContent className="[&_pre]:rounded-t-none" value={value}>
      {children}
    </TabsContent>
  ) : null;
}

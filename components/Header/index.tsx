/*
 * :file description: 公共头部
 * :name: /digitman/components/Header/index.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-29 16:26:15
 * :last editor: 张德志
 * :date last edited: 2024-09-29 18:29:25
 */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Header() {
  return (
    <div className="h-20 bg-blue-500">
      <div className="container mx-auto flex items-center h-full">
        <div className="columns-7xl flex items-center h-full">
          <div className="pr-14">
            <Image
              width={64}
              height={64}
              src="https://cdn.xiaozhi.shop/digitwin/assets/logo.svg"
              alt=""
            />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="pr-8 ">
                <NavigationMenuTrigger>产品中心</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="pr-8">
                <NavigationMenuTrigger>解决方案</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="pr-8 text-white">
                <Link href="/digitman" legacyBehavior passHref>
                  <NavigationMenuLink>AI虚拟主播</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="pr-8  text-white">
                <Link href="/digitman" legacyBehavior passHref>
                  <NavigationMenuLink>晓智配音</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="pr-8  text-white">
                <Link href="/tutorial" legacyBehavior passHref>
                  <NavigationMenuLink>新手教程</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="pr-8  text-white">
                <Link href="/vip" legacyBehavior passHref>
                  <NavigationMenuLink>会员中心</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="pr-8  text-white">
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink>关于我们</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

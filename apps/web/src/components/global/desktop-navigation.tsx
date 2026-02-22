import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";

import type { NavigationItem } from "~/types";
import { SanityLink } from "../shared/sanity-link";

interface DesktopNavigationProps {
  items: NavigationItem[];
}

export const DesktopNavigation = (props: DesktopNavigationProps) => {
  const { items } = props;

  if (items.length === 0) {
    return null;
  }

  return (
    <NavigationMenu className="ms-auto" viewport={false}>
      <NavigationMenuList>
        {items.map((item) => {
          if (item._type === "navigationGroup") {
            if (!item.items || item.items.length === 0) {
              return null;
            }

            return (
              <NavigationMenuItem key={item._key}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="w-36">
                    {item.items.map((item) => {
                      return (
                        <li key={item._key}>
                          <NavigationMenuLink asChild>
                            <SanityLink link={item} />
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item._key}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <SanityLink link={item} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

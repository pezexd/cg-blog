"use client";

import { UilBlogger } from "../icons/UilBlogger";
import Container from "../global/container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { SimpleIconsGithub } from "../icons/SimpleIconsGithub";
import { NavLink, useMatch, useResolvedPath } from "react-router";


const Link = ({ label, to }: { label: string; to: string }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavigationMenuLink asChild active={Boolean(match)}>
      <NavLink to={to}>{label}</NavLink>
    </NavigationMenuLink>
  );
};

export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent">
      <Container>
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-4"
        >
          <div className="flex items-center gap-x-4 bg-white ring-1 ring-gray-200 shadow-xs p-2 rounded-lg">
            <a href="#" className="p-0.5">
              <span className="sr-only">Blog Computacion Grafica</span>
              <UilBlogger className="size-8" />
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link label="Inicio" to="/" />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link label="Acerca de" to="/acerca-de" />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <Button variant="secondary" size="icon" asChild>
              <a href="http://github.com/pezexd/cg-blog" target="_blank">
                <SimpleIconsGithub />
              </a>
            </Button>
          </div>
        </nav>
      </Container>
      
    </header>
  );
}

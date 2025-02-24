"use client";

// import { useState } from "react";
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

// const Link = ({ to, ...props }) => {
//   const pathname = usePathname();
//   const isActive = to === pathname;

//   return (
//     <NavigationMenu.Link asChild active={isActive}>
//       <NextLink href={href} className="NavigationMenuLink" {...props} />
//     </NavigationMenu.Link>
//   );
// };

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
  //   const [_mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {/* <div className="flex items-center gap-x-12">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
      </Container>
      {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
    </header>
  );
}

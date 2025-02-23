"use client"

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileNav({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: 'Overview',
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: 'Billboards',
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: 'Categories',
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: 'Sizes',
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: 'Colors',
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: 'Products',
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: 'Orders',
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  const toggleMenu = () => {
    if (open == false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  useEffect(() => {
    const toggleMenu = document.querySelector('.toggle-menu');
    const mobileNav = document.querySelector('.mob-nav');
    toggleMenu?.addEventListener("click", () => {
      if (mobileNav?.classList.contains('max-md:flex'))
      mobileNav?.classList.remove('max-md:flex');
      else
      mobileNav?.classList.add('max-md:flex');
    });
  }, []);

  const closeMenu = () => {
    const mobileNav = document.querySelector('.mob-nav');
    mobileNav?.classList.remove('max-md:flex');
  }

  return (
    <div className="navtoggler relative hidden max-md:block">
        <Menu onClick={toggleMenu} className="toggle-menu mx-5 w-7 h-7" />
          <nav
          className={cn("mob-nav hidden absolute flex-col top-[100%] dark:bg-slate-700 bg-white border rounded p-2 lg:space-x-6", className)}
          >
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "py-2 text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-black dark:text-white" :   "text-muted-foreground"
                )}
                onClick={closeMenu}
              >
                {route.label}
              </Link>
            ))}
          </nav>

    </div>
  )
};
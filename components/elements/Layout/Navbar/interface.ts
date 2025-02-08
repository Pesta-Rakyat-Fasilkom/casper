import { JSX } from "react";

export interface NavLink {
  href: string;
  label: string;
  className?: string;
  icon?: JSX.Element;
}

export interface NavDropdown extends NavLink {
  children: NavLink[];
}

export type NavItems = (NavLink | NavDropdown)[];

export interface NavItem {
  name: string;
  href: string;
}

export interface NavGroup {
  name: string;
  href?: string;
  items?: NavItem[];
}

export interface Theme {
  name: string;
  id: string;
  color: string;
}

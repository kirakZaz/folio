export interface AppNavBarProps {
  links?: NavLink[];
}

export interface NavLink {
  shortLabel: any;
  id: number;
  label: string;
  route: string;
  status: string;
}

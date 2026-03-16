export interface AppNavBarProps {
  links?: NavLink[];
}

export interface NavLink {
  id:     number;
  label:  string;
  route:  string;
  status: string;
}

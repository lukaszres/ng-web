export interface MenuItem{
  id: string;
  filename: string;
  title: string;
  collapsed: boolean;
  children: MenuItem[];
}

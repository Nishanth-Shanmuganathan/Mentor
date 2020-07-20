export interface Query {
  id: string;
  name: string;
  company: string;
  query: string;
  imageUrl: string;
  answers?: Query[];
}
export interface SideNav {
  name: string;
  icon: string;
  link: string;
}

import { ReactNode } from 'react';

interface Link {
  link: string;
  linkText: string;
}

export interface Project {
  description: string;
  icon?: ReactNode;
  links: Link[];
  title: string;
}

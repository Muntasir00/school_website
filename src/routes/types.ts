import type { ReactNode } from 'react';

export interface RouteType {
  path?: string;
  index?: boolean;
  element?: ReactNode;
  children?: RouteType[];
}

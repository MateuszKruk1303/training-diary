import { ReactNode } from 'react';

export interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

export interface Screen {
  title: string;
  component: (props: any) => JSX.Element;
  Icon: (props: IconProps) => JSX.Element;
}

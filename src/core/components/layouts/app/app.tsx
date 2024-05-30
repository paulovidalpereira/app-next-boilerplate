import clsx from 'clsx';
import { cn } from 'core/utils/cn';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLDivElement> & {}

export const App = ({ children }: Props) => {
  return (
    <div className="app bg-stone-100 h-screen flex flex-col">{children}</div>
  );
};

export const AppHeader = ({ children }: Props) => {
  return (
    <div className="app-header h-12 border-b border-stone-200 px-4 flex items-center">
      {children}
    </div>
  );
};

export const AppWrapper = ({ children }: Props) => {
  return <div className="app-wrapper flex-1 flex flex-row">{children}</div>;
};

export const AppMenu = ({ children }: Props) => {
  return <div className="app-menu w-64 border-r border-stone-200">{children}</div>;
}

export const AppMain = ({ children }: Props) => {
  return <div className="app-main flex-1">{children}</div>;
}

export const AppSidebar = ({ className, children, ...props }: Props) => {
  return <div className={twMerge(clsx('app-sidebar w-64 border-l border-stone-200', className))} {...props}>{children}</div>;
}
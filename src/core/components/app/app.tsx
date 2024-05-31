import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import './style.css';

type Props = HTMLAttributes<HTMLDivElement> & {};

export const App = ({ className, children, ...props }: Props) => {
    return (
        <div className={twMerge(clsx('app', className))} {...props}>
            {children}
        </div>
    );
};

export const AppHeader = ({ className, children, ...props }: Props) => {
    return (
        <div className={twMerge(clsx('app-header', className))} {...props}>
            {children}
        </div>
    );
};

export const AppWrapper = ({ className, children, ...props }: Props) => {
    return (
        <div className={twMerge(clsx('app-wrapper', className))} {...props}>
            {children}
        </div>
    );
};

export const AppMenu = ({ className, children, ...props }: Props) => {
    return (
        <div className={twMerge(clsx('app-menu', className))} {...props}>
            {children}
        </div>
    );
};

export const AppContent = ({ className, children, ...props }: Props) => {
    return (
        <div className={twMerge(clsx('app-content', className))} {...props}>
            {children}
        </div>
    );
};

export const AppSidebar = ({ className, children, ...props }: Props) => {
    return (
        <div className={twMerge(clsx('app-sidebar', className))} {...props}>
            {children}
        </div>
    );
};

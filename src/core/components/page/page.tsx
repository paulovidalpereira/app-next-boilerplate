import { HTMLAttributes } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import './style.css';

type Props = HTMLAttributes<HTMLDivElement> & {};

export const Page = ({ className, children }: Props) => {
    return <div className={twMerge(clsx('page', className))}>{children}</div>;
};

export const PageHeader = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-header', className))}>
            {children}
        </div>
    );
};

export const PageTitle = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-title', className))}>{children}</div>
    );
};

export const PageActions = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-actions', className))}>
            {children}
        </div>
    );
};

export const PageContent = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-content', className))}>
            {children}
        </div>
    );
};

export const PageFooter = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-footer', className))}>
            {children}
        </div>
    );
};

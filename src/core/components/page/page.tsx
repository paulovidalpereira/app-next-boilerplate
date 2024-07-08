import { HTMLAttributes } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import './style.css';

type Props = HTMLAttributes<HTMLDivElement> & {};

type Page = {
    title: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
};

export const Page = ({ title, actions, children }: Page) => {
    return (
        <PageConainer>
            <PageHeader>
                <PageTitle>{title}</PageTitle>
                <PageActions>{actions}</PageActions>
            </PageHeader>
            <PageContent className="space-y-4">{children}</PageContent>
        </PageConainer>
    );
};

export const PageConainer = ({ className, children }: Props) => {
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

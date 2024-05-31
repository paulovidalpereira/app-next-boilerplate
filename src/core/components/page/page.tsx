import { HTMLAttributes } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLDivElement> & {};

export const Page = ({ className, children }: Props) => {
    return <div className={twMerge(clsx('page', className))}>{children}</div>;
};

export const PageHeader = ({ className, children }: Props) => {
    return (
        <div
            className={twMerge(
                clsx(
                    'page-header h-12 px-4 border-b border-stone-200 flex items-center',
                    className,
                ),
            )}
        >
            {children}
        </div>
    );
};

export const PageTitle = ({ className, children }: Props) => {
    return (
        <div
            className={twMerge(
                clsx('page-title text-lg font-medium', className),
            )}
        >
            {children}
        </div>
    );
};

export const PageActions = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-actions ml-auto', className))}>
            {children}
        </div>
    );
};

export const PageContent = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-content p-4', className))}>
            {children}
        </div>
    );
};

export const PageFooter = ({ className, children }: Props) => {
    return (
        <div className={twMerge(clsx('page-footer p-4', className))}>
            {children}
        </div>
    );
};

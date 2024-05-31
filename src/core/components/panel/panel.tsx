import { HTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'core/utils/cn';

import './style.css';

const panelVariants = cva('panel', {
    variants: {
        variant: {
            slim: 'panel--slim',
        },
        size: {},
        defaultVariants: {},
    },
});

type PanelProps = HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof panelVariants> & {
        icon?: React.ReactNode;
    };

const Panel = ({
    className,
    variant,
    size,
    icon,
    children,
    ...props
}: PanelProps) => {
    return (
        <div
            className={cn(panelVariants({ variant, size, className }))}
            {...props}
        >
            {children}
        </div>
    );
};

Panel.displayName = 'Panel';

export { Panel, panelVariants };

const PanelHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel-header">{children}</div>;
};

import './style.css';

type Panel = {
    title: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
};

const Panel = ({ title, actions, children }: Panel) => {
    return (
        <PanelContainer>
            <PanelHeader>
                <PanelTitle>{title}</PanelTitle>
                {actions && <PanelActions>{actions}</PanelActions>}
            </PanelHeader>
            <PanelContent>{children}</PanelContent>
        </PanelContainer>
    );
};

export const PanelContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel">{children}</div>;
};

export const PanelHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel-header">{children}</div>;
};

export const PanelTitle = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel-title">{children}</div>;
};

export const PanelActions = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel-actions">{children}</div>;
};

export const PanelContent = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel-content">{children}</div>;
};

export const PanelFooter = ({ children }: { children: React.ReactNode }) => {
    return <div className="panel-footer">{children}</div>;
};

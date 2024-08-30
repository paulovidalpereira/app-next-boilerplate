'use client';

import { Button, Page, Panel, PanelContainer } from 'core/components';

const DashboardView = () => {
    return (
        <Page
            title="Dashboard"
            actions={
                <div>
                    <Button variant={'primary'}>Button</Button>
                </div>
            }
        >
            <PanelContainer>
                <div className="panel-header">Teste</div>
                <div className="panel-content">
                    <Button variant={'primary'}>Button</Button>
                </div>
            </PanelContainer>
        </Page>
    );
};

export default DashboardView;

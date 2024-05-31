'use client';

import {
    Button,
    Page,
    PageActions,
    PageContent,
    PageHeader,
    PageTitle,
} from 'core/components';
import { Datagrid } from 'core/components/datagrid';
import { Panel } from 'core/components/panel';

export default function Home() {
    return (
        <Page>
            <PageHeader>
                <PageTitle>Home</PageTitle>
                <PageActions>a</PageActions>
            </PageHeader>
            <PageContent className="space-y-4">
                <Panel>
                    <div className="panel-header">Teste</div>
                    <div className="panel-content">
                        <Button variant={'primary'}>Button</Button>
                    </div>
                </Panel>
                <Datagrid />
            </PageContent>
        </Page>
    );
}

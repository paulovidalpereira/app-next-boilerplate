'use client';

import { Page } from 'core/components';
import { Datagrid } from 'core/components/datagrid';
import { columns } from 'modules/users/constants/column';

import { usersService } from '../services/users-service';

export const UsersView = () => {
    return (
        <Page title="Users">
            <Datagrid resource={usersService} columns={columns} />
        </Page>
    );
};

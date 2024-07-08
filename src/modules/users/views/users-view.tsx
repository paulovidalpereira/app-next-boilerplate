'use client';

import { Datagrid } from 'core/components/datagrid';
import { columns } from 'modules/constants/column';

import { usersService } from '../services/users-service';

export const UsersView = () => {
    return (
        <div>
            <Datagrid resource={usersService} columns={columns} />
        </div>
    );
};

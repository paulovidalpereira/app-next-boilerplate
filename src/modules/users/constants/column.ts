import { Column } from 'core/components/datagrid';
import { dateFormat } from 'core/utils/date-format';
import { User } from 'modules/users/types';

export const columns: Column<User>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
        format: dateFormat,
    },
];

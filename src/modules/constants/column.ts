import { Column } from 'core/components/datagrid';
import { User } from 'modules/users/types';
import { dateFormat } from 'utils/date-format';

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

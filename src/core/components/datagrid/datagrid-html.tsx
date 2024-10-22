import { Filter, RefreshCcw, RefreshCw } from 'lucide-react';

import { Button } from '../ui/button';
import { useDatagrid } from './datagrid';

export const DatagridHtml = () => {
    const { columns, rowactions, massactions, result } = useDatagrid();

    return (
        <div>
            <div className="mb-2 flex justify-between items-center">
                <div className="space-x-1">
                    <Button
                        onClick={() => result.refetch()}
                        variant={'primary'}
                        className="px-2"
                        loading={result.isFetching}
                    >
                        <RefreshCw
                            size={16}
                            className={result.isFetching ? 'animate-spin' : ''}
                        />
                    </Button>
                    <Button variant={'primary'} className="px-2">
                        <Filter size={16} />
                    </Button>
                </div>
                <div>
                    <span>Page: {result.data?.current_page}</span>{' '}
                    <span>Total: {result.data?.total}</span>
                </div>
            </div>
            <table className="datagrid">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                className="border-r border-b"
                                key={column.accessorKey}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {result.isLoading && (
                        <tr>
                            <td
                                className="border-r border-b"
                                colSpan={columns.length}
                            >
                                Loading...
                            </td>
                        </tr>
                    )}
                    {result.isError && (
                        <tr>
                            <td
                                className="border-r border-b !bg-red-100 text-red-700"
                                colSpan={columns.length}
                            >
                                error...
                            </td>
                        </tr>
                    )}
                    {result.data &&
                        result.data.items.map((item: any) => (
                            <tr key={item.id}>
                                {columns.map((column) => (
                                    <td
                                        className="border-r border-b"
                                        key={column.accessorKey}
                                    >
                                        {column.format
                                            ? column.format(
                                                  item[column.accessorKey],
                                              )
                                            : item[column.accessorKey]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

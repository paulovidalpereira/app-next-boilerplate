import { Button } from '../ui/button';
import { useDatagrid } from './datagrid';

export const DatagridHtml = () => {
    const { columns, rowactions, massactions, result } = useDatagrid();

    if (result.isLoading) {
        return <div>Loading...</div>;
    }

    if (result.isError) {
        return <div>Error</div>;
    }

    return (
        <div>
            <div className="p-2 flex justify-between items-center">
                <Button onClick={() => result.refetch()}>refresh</Button>
                <div>{result.data?.total}</div>
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
                    {!result.isLoading &&
                        !result.isError &&
                        result.data?.items.map((item) => (
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

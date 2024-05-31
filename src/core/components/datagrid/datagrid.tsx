import './style.css';

export const Datagrid = () => {
    return (
        <div>
            <table className="datagrid">
                <thead>
                    <tr>
                        <th className="border-r border-b">a</th>
                        <th className="border-r border-b">b</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-r border-b">1</td>
                        <td className="border-r border-b">2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

import Link from 'next/link';

import { SIDEBAR_ITEMS } from 'config/menu';
import { groupBy } from 'core/utils/group-by';

export const Menu = () => {
    const groupedMenu = groupBy(SIDEBAR_ITEMS, 'parent');

    return (
        <div className="menu p-4">
            {groupedMenu.root.map((menu: any) => {
                return (
                    <div className="mb-4" key={menu.key}>
                        <div className="font-bold text-xs">{menu.label}</div>
                        {groupedMenu[menu.key] &&
                            groupedMenu[menu.key].map((submenu: any) => {
                                return (
                                    <div key={submenu.key}>
                                        <Link href={submenu.path}>
                                            {submenu.label}
                                        </Link>
                                    </div>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    );
};

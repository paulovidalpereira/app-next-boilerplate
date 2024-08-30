import Link from 'next/link';

import { SIDEBAR_ITEMS } from 'config/menu';
import { groupBy } from 'core/utils/group-by';
import fs from 'fs';
import path from 'path';

export interface MenuItem {
    key: string;
    label: string;
    path: string;
    parent: string;
}

export interface ModuleConfig {
    getMenuItems: () => MenuItem[];
}

async function loadMenuItems(): Promise<MenuItem[]> {
    const modulesPath = path.join(process.cwd(), 'src', 'modules');
    const modules = fs.readdirSync(modulesPath);
    const menuItems: MenuItem[] = [];

    for (const moduleName of modules) {
        const configPath = path.join(
            modulesPath,
            moduleName,
            'config',
            'menu.ts',
        );

        if (fs.existsSync(configPath)) {
            const { getMenuItems } = (await import(
                'modules/users/config/menu'
            )) as ModuleConfig;

            if (typeof getMenuItems === 'function') {
                const items = getMenuItems();
                menuItems.push(...items);
            }
        }
    }

    return menuItems;
}

export const Menu = async () => {
    // const items = await loadMenuItems();
    // const groupedMenu = groupBy(items, 'parent');

    const groupedMenu = groupBy(SIDEBAR_ITEMS, 'parent');

    console.log(groupedMenu);

    return (
        <div className="menu p-4">
            {groupedMenu.root.map((menu: any) => {
                return (
                    <div className="mb-4" key={menu.key}>
                        <div className="font-bold text-xs uppercase">
                            {menu.label}
                        </div>
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

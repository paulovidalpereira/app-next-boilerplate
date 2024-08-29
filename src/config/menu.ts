import { menu as ordersMenu } from 'modules/orders/config/menu';
import { menu as usersMenu } from 'modules/users/config/menu';

type SidebarItem = {
    label: string;
    key: string;
    parent: string;
    icon?: any;
    href?: string;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        label: 'ADMIN',
        key: 'admin',
        parent: 'root',
    },
    ...usersMenu,
    ...ordersMenu,
];

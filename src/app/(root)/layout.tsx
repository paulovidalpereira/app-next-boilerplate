import clsx from 'clsx';
import { App, AppHeader, AppMenu, AppWrapper } from 'core/components/app';
import { AppContainer, AppContent } from 'core/components/app/app';
import { Menu } from 'core/components/menu';
import { Search } from 'core/components/search';
import { Avatar } from 'core/components/ui/avatar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContainer>
            <AppHeader>
                <a
                    className={clsx(
                        'inline-flex items-center justify-center font-bold transition whitespace-nowrap rounded px-2 py-2 uppercase tracking-tight',
                        'hover:bg-stone-200',
                    )}
                >
                    {process.env.APP_NAME}
                </a>
                <div className="ml-auto w-96">
                    <Search />
                </div>
                <div className="ml-auto">
                    <Avatar />
                </div>
            </AppHeader>
            <AppWrapper>
                <AppMenu>
                    <Menu />
                </AppMenu>
                <AppContent>{children}</AppContent>
            </AppWrapper>
        </AppContainer>
    );
};

export default Layout;

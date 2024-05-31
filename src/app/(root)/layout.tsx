import clsx from 'clsx';
import { App, AppHeader, AppMenu, AppWrapper } from 'core/components/app';
import { AppContent } from 'core/components/app/app';
import { Menu } from 'core/components/menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <App>
            <AppHeader>
                <a
                    className={clsx(
                        'inline-flex items-center justify-center font-bold transition whitespace-nowrap rounded px-2 py-2 uppercase tracking-tight',
                        'hover:bg-stone-200',
                    )}
                >
                    App Boilerplate
                </a>
                <div className="ml-auto w-96">
                    <input
                        type="text"
                        className="bg-white py-1.5 px-2 border border-stone-200 rounded block w-full focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-inset focus:ring-stone-600 shadow-sm"
                        placeholder="Search..."
                    />
                </div>
                <div className="ml-auto">
                    <div className="avatar bg-stone-300 h-7 w-7 font-medium flex items-center justify-center rounded-full overflow-hidden">
                        A
                    </div>
                </div>
            </AppHeader>
            <AppWrapper>
                <AppMenu>
                    <Menu />
                </AppMenu>
                <AppContent>{children}</AppContent>
            </AppWrapper>
        </App>
    );
};

export default Layout;

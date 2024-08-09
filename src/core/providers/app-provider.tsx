'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [navigation, setNavigation] = useState({});

    const addNavigation = (navigation: any) => {
        setNavigation((prev) => ({ ...prev, ...navigation }));
    };

    const values = {
        navigation,
        addNavigation,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useApp = () => {
    return useContext(AppContext);
};

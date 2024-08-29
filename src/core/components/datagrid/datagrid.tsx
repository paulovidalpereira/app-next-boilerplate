'use client';

import { createContext, useContext, useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { DatagridHtml } from './datagrid-html';

import './style.css';

type DatagridProps = {
    resource: Resource;
    columns: any[];
    rowactions?: string[];
    massactions?: string[];
};

type DatagridContext = DatagridProps & {
    result: any;
};

type Result = {
    items: any[];
    total: number;
};

type Resource = {
    paginate: (params: Paginate) => {};
};

export type Paginate = {
    page?: number;
    size?: number;
    order?: string;
    dir?: string;
    filters?: any[];
};

export type Column<TData> = ColumnDef<TData, any> & {
    format?: (value: any) => any;
};

export type RowAction = {
    label: string;
    handle: () => void;
};

export type MassAction = {
    label: string;
    handle: () => void;
};

const DatagridContext = createContext({} as DatagridContext);

export const Datagrid = ({
    resource,
    columns,
    rowactions,
    massactions,
}: DatagridProps) => {
    const result = resource.paginate({
        page: 1,
    });

    const value = useMemo(
        () => ({
            resource,
            columns,
            rowactions,
            massactions,
            result,
        }),
        [resource, columns, rowactions, massactions, result],
    );

    return (
        <DatagridContext.Provider value={value}>
            <DatagridHtml />
        </DatagridContext.Provider>
    );
};

export const useDatagrid = () => {
    return useContext(DatagridContext);
};

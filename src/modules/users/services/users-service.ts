import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { type Paginate } from 'core/components/datagrid';
import { api } from 'lib/api';

import { User } from '../types';

const Paginate = (params: Paginate) => {
    return useQuery({
        queryKey: ['users', { params }],
        queryFn: async () => {
            const { data } = await api.get('/users', {
                params,
            });

            return {
                items: data,
                total: data.length,
                per_page: 10,
                current_page: 1,
                last_page: 1,
                from: 1,
                to: 10,
            };
        },
    });
};

const GetAll = (params: Paginate): UseQueryResult<User[]> => {
    const { filters } = params;
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await api.get('/users', {
                params: {
                    filters,
                },
            });

            return response.data;
        },
    });
};

export const usersService = {
    module: 'users',
    paginate: Paginate,
    getAll: GetAll,
};

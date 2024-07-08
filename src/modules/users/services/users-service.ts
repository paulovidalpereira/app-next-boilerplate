import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { type Paginate } from 'core/components/datagrid';
import { api } from 'lib/axios';

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
            };
        },
    });
};

const GetAll = (params: Paginate) => {
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
    paginate: Paginate,
    getAll: GetAll,
};

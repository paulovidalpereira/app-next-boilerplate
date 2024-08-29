import { mapValues, groupBy as lodashGroupBy, omit } from 'lodash';

export const groupBy = (array: any, key: string) => {
    // return array.reduce((result, currentValue) => {
    //   (result[currentValue[key]] = result[currentValue[key]] || []).push(
    //     currentValue
    //   );
    //   return result;
    // }, {});
    const grouped = mapValues(lodashGroupBy(array, key), (list) =>
        list.map((item) => omit(item, key)),
    );

    return grouped;
};

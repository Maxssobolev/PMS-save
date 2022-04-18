import React, { useEffect, useState } from 'react';
import './sortableTable.scss'



const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

export default function SimpeSortableTable(props) {
    const { tableHeaders, rowData } = props.data

    // items - сортированный массив
    // requestSort(key) - сортирует items по ключу key и возвращает items
    const { items, requestSort, sortConfig } = useSortableData(rowData);

    return (
        <>

            <table>
                <thead>
                    <tr className="header-row">
                        {tableHeaders.map((head, index) => {
                            return (
                                <th key={`${index}__sortTableKey`}>
                                    <button
                                        type="button"
                                        {
                                        ...(
                                            head.isSorted ?
                                                {
                                                    onClick: () => {
                                                        requestSort(head.bindedCol)

                                                    }, sorted: 'yes'
                                                }
                                                :
                                                null
                                        )
                                        }

                                    >
                                        {head.title}
                                    </button>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr className="content-row" key={`${index}__sortTableData`}>
                                {Object.entries(item).map(([key, value], index2) => {
                                    if (key != 'id')
                                        return (
                                            <td key={`${index2}__sortTableDataValues`}>
                                                {value}
                                            </td>
                                        );
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    );
};

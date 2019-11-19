import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy, usePagination } from 'react-table'

import makeData from '../makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #fff;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #fff;
      border-right: 1px solid #fff;
      font-size: 1rem;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    },
        useSortBy,
        usePagination
    )

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ':   v' : ':   ^') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(
                    (row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
    )
}

function AppTable() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                        sortType: 'basic'
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                        sortType: 'basic'
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                        sortType: 'basic'
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                        sortType: 'basic'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                        sortType: 'basic'
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                        sortType: 'basic'
                    },
                ],
            },
        ],
        []
    )

    const data = React.useMemo(() => makeData(30), [])

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    );
}

export default AppTable;

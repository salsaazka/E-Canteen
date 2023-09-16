import React from 'react'
import { useTable } from 'react-table'

const UserManagementTable = () => {
  const listData = [
    {
      id: 1,
      name: 'Moise Marsters',
      type: 'mmarsters0@stanford.edu',
      address: '5th Floor',
    },
    {
      id: 2,
      name: 'Lilli Kildale',
      type: 'lkildale1@google.cn',
      address: 'Apt 120',
    },
    {
      id: 3,
      name: 'Bea Pedri',
      type: 'bpedri2@samsung.com',
      address: 'Room 1786',
    },
    {
      id: 4,
      name: 'Ciel Manna',
      type: 'cmanna3@fc2.com',
      address: 'PO Box 12023',
    },
    {
      id: 5,
      name: 'Pasquale Spanswick',
      type: 'pspanswick4@gmpg.org',
      address: 'PO Box 51471',
    },
    {
      id: 6,
      name: 'Franciskus McClay',
      type: 'fmcclay5@answers.com',
      address: 'Apt 1795',
    },
    {
      id: 7,
      name: 'Willyt Soigne',
      type: 'wsoigne6@goodreads.com',
      address: 'Room 256',
    },
    {
      id: 8,
      name: 'Brnaba Mowlam',
      type: 'bmowlam7@spotify.com',
      address: 'Suite 99',
    },
    {
      id: 9,
      name: 'Birgitta Milliere',
      type: 'bmilliere8@yandex.ru',
      address: '5th Floor',
    },
    {
      id: 10,
      name: 'Jareb Silber',
      type: 'jsilber9@jigsy.com',
      address: 'PO Box 48648',
    },
    {
      id: 11,
      name: 'Susette Raynes',
      type: 'sraynesa@ucoz.ru',
      address: 'Apt 1510',
    },
    {
      id: 12,
      name: 'Arlin oldey',
      type: 'aoldeyb@pcworld.com',
      address: 'Apt 529',
    },
    {
      id: 13,
      name: 'Wendye Durkin',
      type: 'wdurkinc@godaddy.com',
      address: 'Apt 1024',
    },
    {
      id: 14,
      name: 'Rubia Skaife',
      type: 'rskaifed@creativecommons.org',
      address: 'Room 1648',
    },
    {
      id: 15,
      name: 'Hendrik Capstack',
      type: 'hcapstacke@cam.ac.uk',
      address: 'Apt 21',
    },
    {
      id: 16,
      name: 'Andres Berge',
      type: 'abergef@yahoo.co.jp',
      address: 'Suite 44',
    },
    {
      id: 17,
      name: 'Rosabelle MacAdam',
      type: 'rmacadamg@pagesperso-orange.fr',
      address: 'PO Box 51079',
    },
    {
      id: 18,
      name: 'Gates Campey',
      type: 'gcampeyh@admin.ch',
      address: '13th Floor',
    },
    {
      id: 19,
      name: 'Andreana Salman',
      type: 'asalmani@bbc.co.uk',
      address: 'Apt 299',
    },
    {
      id: 20,
      name: 'Jemie Charlet',
      type: 'jcharletj@newsvine.com',
      address: 'Room 291',
    },
  ]

  const data = listData.map((item, index) => ({
    id: item.id,
    number: index + 1,
    name: item.name,
    address: item.address,
  }))

  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'number',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: (props) => {
          return <></>
        },
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: data,
  })

  return (
    <div>
      <table {...getTableProps()} className="w-100 bg-light">
        <thead className="text-left">
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()} className="border-bottom p-3">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.column.id} {...cell.getCellProps()} className="border-none p-3">
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(UserManagementTable)

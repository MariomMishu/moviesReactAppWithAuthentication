import React from 'react';
import TableHeader from './table-header.component';
import TableBody from './table-body.component';
const Table = ({ columns, items, onSort }) => {
    return (
        <>
            <table className="table">
                <TableHeader columns={columns}/>
                <TableBody columns={columns} items={items} onSort={onSort}/>
            </table>
        </>
    )
};
export default Table;
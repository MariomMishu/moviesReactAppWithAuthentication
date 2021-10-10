import React from 'react';
const TableBody = ({ columns, items, onSort }) => {
    const handleSort=(path)=>{
        onSort({path: path, order:'asc'});
    }
    return (
        <>
            <tbody>
                {
                    items.map(item => {
                        return( 
                        <tr>
                            {
                            columns.map(column => <td onClick={()=>handleSort(column.path)}>{column.content(item)}</td>)
                            }
                        </tr>
                        )
                       
                    })
               }
            </tbody>

        </>
    )
};
export default TableBody;
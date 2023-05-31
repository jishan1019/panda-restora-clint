import React from 'react';
import TableBody from '../TableBody/TableBody';

const TableHead = ({ cart,handelDelete }) => {
    return (
        <div className="overflow-x-auto w-full mt-8 ">
            <table className="table w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Prise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        cart?.map((item, index) => <TableBody
                            key={item._id}
                            item={item}
                            index={index}
                            handelDelete={handelDelete}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableHead;
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';



const TableBody = ({ item, index,handelDelete }) => {

    const { image, name, price, _id } = item || {};
    const formatedPrise = price.toFixed(2)

  


    return (
        <tr>
            <td>{index + 1}</td>

            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} />
                    </div>
                </div>
            </td>

            <td>
                <h1>{name}</h1>
            </td>
            <td>${formatedPrise}</td>
            <th>
                <button onClick={()=>handelDelete(_id)} className="btn bg-[#FF7F0E] text-white border-none text-xl">
                    <RiDeleteBinLine />
                </button>
            </th>
        </tr>
    );
};

export default TableBody;
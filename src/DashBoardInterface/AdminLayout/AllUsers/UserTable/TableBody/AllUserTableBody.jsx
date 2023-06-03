import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const AllUserTableBody = ({
  singleUser,
  index,
  handelDelete,
  handelMakeAdmin,
}) => {
  const { name, email, _id, role } = singleUser || {};

  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <h1>{name}</h1>
      </td>

      <td>
        <h1>{email}</h1>
      </td>
      <td>
        {role === "admin" ? (
          "admin"
        ) : (
          <div
            onClick={() => handelMakeAdmin(_id)}
            className="bg-[#FF7F0E] text-white pl-4 pt-4 pb-4 rounded-md"
          >
            <FaUsers />
          </div>
        )}
      </td>
      <th>
        <button
          onClick={() => handelDelete(_id)}
          className="btn bg-[#B91C1C] text-white border-none text-xl"
        >
          <RiDeleteBinLine />
        </button>
      </th>
    </tr>
  );
};

export default AllUserTableBody;

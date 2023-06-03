import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import AllUserTableBody from "./UserTable/TableBody/AllUserTableBody";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:4000/users");
    return res.json();
  });

  const handelDelete = (_id) => {
    console.log("hhhhh", _id);
  };

  const handelMakeAdmin = (_id) => {
    fetch(`http://localhost:4000/users/admin/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
        Swal.fire("Make Admin Success", "This user now Admin", "success");
      });
  };

  return (
    <section className=" p-8 overflow-auto bg-white w-[60vw] rounded-md">
      <Helmet>
        <title>Bistro | All Users</title>
      </Helmet>

      <h3 className="text-xl font-bold">Total Users : {users.length}</h3>

      {/* All User Table Here */}
      <div className="overflow-x-auto w-full mt-8 ">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((singleUser, index) => (
              <AllUserTableBody
                key={singleUser._id}
                singleUser={singleUser}
                index={index}
                handelDelete={handelDelete}
                handelMakeAdmin={handelMakeAdmin}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;

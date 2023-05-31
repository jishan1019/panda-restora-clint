import React from "react";
import { Helmet } from "react-helmet-async";
import { useCart } from "../../CustomHooks/useCart";
import TableHead from "./TableHead/TableHead";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const formatedPrise = total.toFixed(2);

  // Delete Function Here
  const handelDelete = (item_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/carts/${item_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <section className=" p-8 overflow-auto bg-white w-[60vw] rounded-md">
      <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>

      {/* Cart Body Design */}
      <div className="flex justify-between items-center ">
        <h3 className="text-xl font-bold">Total Items : {cart.length}</h3>
        <h3 className="text-xl font-bold">Total Prise : {formatedPrise}</h3>
        <button className="btn bg-[#FF7F0E] border-none text-white">
          Pay Now
        </button>
      </div>

      {/* Cart Table Design */}
      <TableHead cart={cart} handelDelete={handelDelete} />
    </section>
  );
};

export default MyCart;

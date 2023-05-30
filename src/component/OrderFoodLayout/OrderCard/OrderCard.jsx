import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../../CustomHooks/useCart';

const OrderCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item || {}
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handelAddToCard = (item) => {
        if (user) {
            const cartItem = { menuItemId: _id, name, recipe, image, price, email: user.email }

            fetch('http://localhost:4000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(result => {
                    refetch();
                    Swal.fire(
                        'Item Add To Cart Success!',
                        'Go Back',
                        'success'
                    )
                })
        } else {
            Swal.fire({
                title: 'Please Login Now',
                text: "You won't be able to cart this login frist!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <>
            <div className="card w-full bg-[#F3F3F3] shadow">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className='mt-2 font-semibold'>Prise: ${price}</p>
                    <div className="card-actions mt-4 justify-center">
                        <button onClick={() => handelAddToCard(item)} className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 hover:bg-[#1F2937]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderCard;
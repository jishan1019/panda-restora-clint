import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../../CustomHooks/useCart';
import SectionTitel from '../../component/ShareLayout/SectionTitle/SectionTitel';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const formatedPrise = total.toFixed(2)

    return (
        <section className=' p-8 overflow-auto bg-white w-[60vw] rounded-md'>
            <Helmet>
                <title>Bistro | My Cart</title>
            </Helmet>


            {/* Cart Body Design */}
            <div className='flex justify-between items-center '>
                <h3 className='text-xl font-bold'>Total Items : {cart.length}</h3>
                <h3 className='text-xl font-bold'>Total Prise : {formatedPrise}</h3>
                <button className="btn bg-[#FF7F0E] border-none text-white">Pay Now</button>
            </div>


            {/* Cart Table Design */}
            <TableHead cart={cart} />


        </section>
    );
};

export default MyCart;
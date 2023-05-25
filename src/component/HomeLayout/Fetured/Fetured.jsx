import React from 'react';
import SectionTitel from '../../ShareLayout/SectionTitle/SectionTitel';
import img from "../../../assets/assets/home/featured.jpg"
import "./Fetured.css"

const Fetured = () => {
    return (
        <section className='my-16 feturd-item bg-fixed'>

            <SectionTitel
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></SectionTitel>

            <div className='md:flex justify-center items-center md:space-x-8 py-8 px-16 md:py-20 md:px-36 bg-slate-500 bg-opacity-30'>
                <div >
                    <img className='rounded-md shadow-md' src={img} alt="" />
                </div>

                <div className='mt-3 md:mt-0 text-white text-lg shadow-xl'>
                    <p>AUG 20,2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quo cum ad consectetur tenetur possimus odit hic eum expedita perferendis, itaque, officiis harum asperiores aliquid tempore architecto nemo eaque nihil cupiditate amet molestiae facere quibusdam. Iure iste aspernatur maxime unde odit, commodi animi quibusdam numquam doloremque quaerat, quisquam aut eos.</p>
                    <button className="btn btn-outline border-0 border-b-4 btn-primary mt-6">ORDER NOW</button>
                </div>
            </div>

        </section>
    );
};

export default Fetured;
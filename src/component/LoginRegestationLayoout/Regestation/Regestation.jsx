import React from 'react';
import { useForm } from "react-hook-form";
import img from "../../../assets/assets/others/authentication.png"
import img1 from "../../../assets/assets/others/authentication2.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const Regestation = () => {

    const { createUser } = useContext(AuthContext);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire(
                    'Regestation Success!',
                    'Go Back',
                    'success'
                )
            }).catch(error => {
                Swal.fire(
                    'Regestation Fail!',
                    `${error}`,
                    'info'
                )
            })
    };



    return (
        <>
            <div className="hero min-h-[80vh] mt-16" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full flex justify-center items-center md:flex-row flex-col-reverse p-8">


                        <div className='w-full space-y-4  md:w-[50%] text-black'>

                            <h1 className='mb-8 mt-8 md:mt-0 font-bold text-3xl'>Regestation</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='bg-white w-full p-4 rounded-md block' placeholder='Enter Your Name'  {...register("name", { required: true })} />

                                <input className='bg-white w-full p-4 rounded-md block mt-6' placeholder='Enter Your Email'  {...register("email", { required: true })} />


                                <input className='bg-white w-full p-4 rounded-md block mt-6' placeholder='Enter Your Password' {...register("password", { required: true })} />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input className='p-4 bg-[#DBB984] w-full mt-6 font-semibold' type="submit" value="Sign Up" />
                            </form>

                            <p className='font-semibold text-[#DBB984]'>Alrady Regestared? <Link to='/login'>Go to login</Link></p>

                            <p>Or Sign in With</p>

                            <div className='flex justify-center items-center space-x-3'>
                                <button className="btn btn-circle btn-outline">
                                    <img className='p-1' src="https://i.ibb.co/NY7LtWM/images-removebg-preview.png" alt="" />
                                </button>

                                <button className="btn btn-circle btn-outline">
                                    <img className='p-2' src="https://i.ibb.co/NKkfhCp/Git-Hub-Mark-removebg-preview.png" alt="" />
                                </button>
                            </div>

                        </div>

                        <div className='w-full md:w-[50%]'>
                            <img className='w-[100vw]' src={`${img1}`} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Regestation;
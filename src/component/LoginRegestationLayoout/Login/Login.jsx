import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import img from "../../../assets/assets/others/authentication.png"
import img1 from "../../../assets/assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const Login = () => {


    const captchaRef = useRef(null)
    const [disabled, setDesabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const [captchaValid, setCaptchaValid] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const form = location?.state?.from?.pathname || '/'


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const handelValidCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setCaptchaValid(true);
        } else {
            setCaptchaValid(false);
        }
    };



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const email = data?.email;
        const password = data?.password;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire(
                    'Login Success!',
                    'Go Back',
                    'success'
                )
                navigate(form, { replace: true })
            })
    };



    return (
        <>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero min-h-[80vh] mt-16" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full flex justify-center items-center md:flex-row flex-col p-8">
                        <div className='w-full md:w-[50%]'>
                            <img className='w-[100vw]' src={`${img1}`} alt="" />
                        </div>
                        <div className='w-full space-y-4  md:w-[50%] text-black'>

                            <h1 className='mb-8 mt-8 md:mt-0 font-bold text-3xl'>Login</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='bg-white w-full p-4 rounded-md block' placeholder='Enter Your Email'  {...register("email")} />
                                <input className='bg-white w-full p-4 rounded-md block mt-6' placeholder='Enter Your Password' {...register("password", { required: true })} />

                                <div className='mt-6 w-full text-left'>
                                    <LoadCanvasTemplate />
                                </div>

                                <input
                                    className='bg-white w-full p-4 rounded-md block mt-6'
                                    type="text"
                                    name="captcha"
                                    ref={captchaRef}
                                    onBlur={handelValidCaptcha}
                                    id=""
                                    placeholder='Enter Captcha'
                                />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <div className='mt-6'>
                                    <button
                                        className="btn pt-6 pb-8 w-full btn-sm bg-[#d3870e] "
                                        type="submit"
                                        disabled={!captchaValid} // Disable the submit button if captcha is not valid
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className='font-semibold text-[#d69223]'>New here? <Link to='/regestation'>Create a New Account</Link></p>

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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
import React from "react";
import { useForm } from "react-hook-form";
import img from "../../../assets/assets/others/authentication.png";
import img1 from "../../../assets/assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Regestation = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    const name = data?.name;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // reset();
            // Swal.fire("Regestation Success!", "Go Back", "success");
            //   navigate("/");

            //User Eamil Post On Server Code Here---------------
            const saveUser = { name: name, email: email };

            fetch("http://localhost:4000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((result) => {
                reset();
                Swal.fire("Registration Success!", "Go Back", "success");
                navigate("/");
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        Swal.fire("Regestation Fail!", `${error}`, "info");
      });
  };

  const handelGoogleSignin = () => {
    googleSignIn().then((result) => {
      const user = result.user;

      if (user) {
        // Swal.fire("Registration Success!", "Go Back", "success");
        // navigate("/");

        const saveUser = { name: user?.displayName, email: user?.email };

        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((result) => {
            reset();
            Swal.fire("Registration Success!", "Go Back", "success");
            navigate("/");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Regestation</title>
      </Helmet>
      <div
        className="hero min-h-[80vh] mt-16"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full flex justify-center items-center md:flex-row flex-col-reverse p-8">
            <div className="w-full space-y-4  md:w-[50%] text-black">
              <h1 className="mb-8 mt-8 md:mt-0 font-bold text-3xl">
                Regestation
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="bg-white w-full p-4 rounded-md block"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />

                <input
                  className="bg-white w-full p-4 rounded-md block mt-6"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />

                <input
                  className="bg-white w-full p-4 rounded-md block mt-6"
                  placeholder="Enter Your Password"
                  {...register("password", { required: true })}
                />

                <input
                  className="bg-white w-full p-4 rounded-md block mt-6"
                  placeholder="Enter Your Photo Url"
                  {...register("photoURL", { required: true })}
                />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="p-4 bg-[#DBB984] w-full mt-6 font-semibold"
                  type="submit"
                  value="Sign Up"
                />
              </form>

              <p className="font-semibold text-[#DBB984]">
                Alrady Regestared? <Link to="/login">Go to login</Link>
              </p>

              <p>Or Sign in With</p>

              <div className="flex justify-center items-center space-x-3">
                <button
                  onClick={handelGoogleSignin}
                  className="btn btn-circle btn-outline"
                >
                  <img
                    className="p-1"
                    src="https://i.ibb.co/NY7LtWM/images-removebg-preview.png"
                    alt=""
                  />
                </button>

                <button className="btn btn-circle btn-outline">
                  <img
                    className="p-2"
                    src="https://i.ibb.co/NKkfhCp/Git-Hub-Mark-removebg-preview.png"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <div className="w-full md:w-[50%]">
              <img className="w-[100vw]" src={`${img1}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regestation;

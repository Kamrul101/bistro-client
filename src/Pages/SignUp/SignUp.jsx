import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { authContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';


const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const {createUser, updateUserProfile} = useContext(authContext);
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                console.log("user profile updated");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
        })
    };
    // console.log(watch("example"));

    return (
        <>
        <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name",{required:true})}
                name="name"
                className="input input-bordered"
              />
              {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                {...register("photo",{required:true})}
                name="photo"
                className="input input-bordered"
              />
              {errors.photo && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register("email",{required:true})}
                name="email"
                className="input input-bordered"
              />
              {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password",{ required: true, minLength: 8,  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'minLength' && <p >Minimum 8 characters long</p>}
              {errors.password?.type === 'pattern' && <p>One Uppercase and lowercase and one digit</p>}
              
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>Already have an account? Go to<Link className='btn btn-link' to='/login'>SignUp</Link></p>
        </div>
      </div>
    </div>
        </>
    );
};

export default SignUp;
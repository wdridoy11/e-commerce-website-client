import React from 'react'
import loginImg from '../../assets/login.png'
import { useForm } from 'react-hook-form';
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
import { Link } from 'react-router-dom';
const bgImage =`https://img.freepik.com/free-vector/isometric-e-commerce-concept_52683-39811.jpg?w=900&t=st=1685985549~exp=1685986149~hmac=315e1b3ce65a9c911441cabc56adaec6cbe1ad77c5370eed769690b7beeaa91b`

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
  
  return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})`}}>
          <div className="hero-overlay bg-opacity-30"></div>
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 glass gap-10 p-10 rounded-xl items-center'>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type="email" 
                                name='email' 
                                id='name' 
                                {...register("email")}
                                placeholder="Enter your email" 
                                className="bg-transparent px-5 mb-3 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                            />
                            <input 
                                type="password" 
                                name='password' 
                                id='password' 
                                {...register("password")}
                                placeholder="Enter your password"
                                className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                            />
                            <input 
                                className='py-2 block w-full px-10 rounded-full mt-5 cursor-pointer text-base font-medium glass' 
                                type="submit" 
                                value="Login" 
                            />
                        </form>
                        <p className='text-base font-medium text-white text-center mt-4'>
                            New here? <Link className='text-slate-800' to={`/registration`}>Create a New Account</Link>
                        </p>
                        <div className="divider before:bg-white after:bg-white text-white">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                    <div>
                        <img className='w-full md:w-9/12' src={loginImg} alt="login" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
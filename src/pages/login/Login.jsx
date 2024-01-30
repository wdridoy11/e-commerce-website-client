import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import loginImg from '../../assets/login.png'
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
import { AuthContext } from '../../context/AuthProvider';
const bgImage =`https://img.freepik.com/free-vector/isometric-e-commerce-concept_52683-39811.jpg?w=900&t=st=1685985549~exp=1685986149~hmac=315e1b3ce65a9c911441cabc56adaec6cbe1ad77c5370eed769690b7beeaa91b`

const Login = () => {
    const {userLogin} = useContext(AuthContext);
    const { register, handleSubmit} = useForm();
    const [error, setError] = useState();
    const onSubmit = data => {
        userLogin(data.email,data.password)
        .then((res)=>{
            console.log(res);
            setError("")
        })
        .catch((err)=>{
            setError(err.message);
        })
        // console.log(data)
    };
  console.log(error);
  return (
    <div>
        <div className="py-20" style={{ backgroundImage: `url(${bgImage})`}}>
          <div className="hero-overlay bg-opacity-30"></div>
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 glass gap-10 p-10 rounded-xl items-center'>
                    <div className=''>
                        {error && <p className='text-start text-red-500 mb-2'>{error}</p>}
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
                            New here? <Link className='text-slate-800' to={`/sign_up`}>Create a New Account</Link>
                        </p>
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
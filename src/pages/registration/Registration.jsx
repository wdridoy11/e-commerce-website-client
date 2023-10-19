import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import loginImg from '../../assets/login.png'
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
const bgImage =`https://img.freepik.com/free-vector/isometric-e-commerce-concept_52683-39811.jpg?w=900&t=st=1685985549~exp=1685986149~hmac=315e1b3ce65a9c911441cabc56adaec6cbe1ad77c5370eed769690b7beeaa91b`

const Registration = () => {

    const {createUserUsingEmail, userProfileUpdate} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // form data send
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        createUserUsingEmail(email,password)
        .then((res)=>{
            const user = res.user;
            userProfileUpdate(data.name, data.photoURL)
            .then((res)=>{
                const saveUser = {name:data?.name, email: data?.email, image: data?.photoURL}
                fetch(`http://localhost:5000/users`,{
                    method:"POST",
                    headers:{
                      "content-type":"application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                .then((res)=>res.json())
                .then((data)=>{
                  if(data.insertedId){
                        navigate("/")
                    }
                })
                .catch((error)=>{
                    console.log(error.message)
                })
            })
            .catch((error)=>{
                console.log(error.message)
            })
        })
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
                                    type="text" 
                                    name='name' 
                                    id='name' 
                                    {...register("name")}
                                    placeholder="Enter your name" 
                                    className="bg-transparent px-5 mb-3 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                                />
                                <input 
                                    type="email" 
                                    name='email' 
                                    id='email' 
                                    {...register("email")}
                                    placeholder="Enter your email" 
                                    className="bg-transparent px-5 mb-3 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                                />
                                <input 
                                    type="tel" 
                                    name='tel' 
                                    id='tel' 
                                    {...register("tel")}
                                    placeholder="Enter your Phone" 
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
                                    value="Registration" 
                                />
                            </form>
                            <p className='text-base font-medium text-white text-center mt-4'>
                                Already registered? <Link className='text-slate-800' to={`/login`}>Login</Link>
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

export default Registration
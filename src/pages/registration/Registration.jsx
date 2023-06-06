import React from 'react'

const Registration = () => {

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
                                    className='py-2 block px-10 rounded-full mt-5 cursor-pointer text-base font-medium glass' 
                                    type="submit" 
                                    value="Login" 
                                />
                            </form>
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
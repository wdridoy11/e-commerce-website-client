import React, { Fragment } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { Dialog, Transition } from '@headlessui/react'

const AddressUpdate = ({isOpen, closeModal}) => {

    return (
        <div>
            <div>
                <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>
                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center relative">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full p-10 md:w-1/2 transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                              <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900 shadow-md py-5 text-center rounded-lg">Shipping Info</Dialog.Title>
                              <div>
                                <form className='w-full mt-5'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mb-2'>
                                        <div>
                                            <label>Full Name</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                id="name"
                                                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                                placeholder='Enter your full name'
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label>Your Email</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                                placeholder='Enter your email'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mb-2'>
                                        <div>
                                            <label>Mobile Number</label>
                                            <input 
                                                type="tel" 
                                                name='phone'
                                                id='phone'
                                                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                                placeholder='Enter your mobile number'
                                            />
                                        </div>
                                        <div>
                                            <label className='block'>Province</label>
                                            <select className="select select-bordered w-full">
                                                <option className='text-base text-slate-600' value={"Barishal"}>Barishal</option>
                                                <option className='text-base text-slate-600' value={"Dhaka"}>Dhaka</option>
                                                <option className='text-base text-slate-600' value={"Khulna"}>Khulna</option>
                                                <option className='text-base text-slate-600' value={"Mymensingh"}>Mymensingh</option>
                                                <option className='text-base text-slate-600' value={"Rajshahi"}>Rajshahi</option>
                                                <option className='text-base text-slate-600' value={"Rangpur"}>Rangpur</option>
                                                <option className='text-base text-slate-600' value={"Sylhet"}>Sylhet</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mb-3'>
                                        <div>
                                            <label className='block'>City</label>
                                            <select className="select select-bordered w-full">
                                            <option className='text-base text-slate-600' value={"Barishal"}>Barishal</option>
                                                <option className='text-base text-slate-600' value={"Dhaka"}>Dhaka</option>
                                                <option className='text-base text-slate-600' value={"Khulna"}>Khulna</option>
                                                <option className='text-base text-slate-600' value={"Mymensingh"}>Mymensingh</option>
                                                <option className='text-base text-slate-600' value={"Rajshahi"}>Rajshahi</option>
                                                <option className='text-base text-slate-600' value={"Rangpur"}>Rangpur</option>
                                                <option className='text-base text-slate-600' value={"Sylhet"}>Sylhet</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className='block'>Area</label>
                                            <select className="select select-bordered w-full">
                                                <option className='text-base text-slate-600' value={"Dhaka"}>Dhaka</option>
                                                <option className='text-base text-slate-600' value={"Khulna"}>Khulna</option>
                                                <option className='text-base text-slate-600' value={"Mymensingh"}>Mymensingh</option>
                                                <option className='text-base text-slate-600' value={"Rajshahi"}>Rajshahi</option>
                                                <option className='text-base text-slate-600' value={"Rangpur"}>Rangpur</option>
                                                <option className='text-base text-slate-600' value={"Sylhet"}>Sylhet</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mb-3'>
                                        <div>
                                            <label>Address</label>
                                            <textarea 
                                                name="address" 
                                                id="address" 
                                                cols="30" 
                                                rows="3"
                                                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                                placeholder='House no. / building / street / area'
                                                required
                                            >
                                            </textarea>
                                        </div>
                                        <div>
                                            <label>Received From:</label>
                                            <p><input type="radio" value={"home"} name="type" id="home" /> Home</p>
                                            <p><input type="radio" value={"office"} name="type" id="office" /> Office</p>
                                        </div>
                                    </div>
                                    <input 
                                        type="submit" 
                                        value="Save" 
                                        className='w-full py-3 bg-blue-600 text-white rounded-md cursor-pointer'
                                    />
                                </form>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className=" text-black absolute top-0 right-0 p-2 rounded-full"
                                  onClick={closeModal}>
                                  <RxCrossCircled className='text-4xl'></RxCrossCircled>
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}

export default AddressUpdate
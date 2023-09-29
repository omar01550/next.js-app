import React from 'react'

const Contact = () => {
    return (
        <>

            <h1 className="text-3xl text-black text-center py-10">Sign up</h1>
            <div class=" container mx-auto flex justify-center items-center  md:px-14 sm:px-8 bg-gray-100 h-full">


                <div class="grid lg:grid-cols-3 grid-col-1">

                    <div class="bg-black px-9 py-14">
                        <h1 class="text-3xl text-white font-medium">Lets Touch Me</h1>
                        <p class="py-2 text-base text-gray-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit tdit rrum?</p>
                        <div class="location mt-7">
                            <div class="flex my-4 items-center">
                                <span class="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center"><i class="fa-solid fa-location-dot text-gray-200"></i></span>
                                <address class="text-gray-100">Address: 198 West 21th Street, Lahore, Pakistan</address>
                            </div>
                            <div class="flex my-4 items-center">
                                <span class="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center"><i class="fa-solid fa-phone text-gray-200"></i></span>
                                <span class="text-gray-100">Phone: 92 314 4878266</span>
                            </div>
                            <div class="flex my-4 items-center">
                                <span class="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center"><i class="fa-solid fa-envelope text-gray-200"></i></span>
                                <span class="text-gray-100">Email: info@gmail.com</span>
                            </div>
                            <div class="flex my-4 items-center">
                                <span class="border-2 border-solid border-b-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center"><i class="fa-brands fa-chrome text-gray-200"></i></span>
                                <span class="text-gray-100">Website: yoursite.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white col-span-2 py-14 lg:px-10 px-8">
                        <h2 class="text-3xl font-medium">Get in touch</h2>
                        <div class="grid md:grid-cols-2 grid-col-1 gap-4">
                            <div class="flex flex-col py-4">
                                <label for="First Name" class="text-base font-medium">First Name</label>
                                <input type="text" class="outline-none border-b-2 border-solid focus:border-black transition-all" />
                            </div>
                            <div class="flex flex-col py-4">
                                <label for="First Name" class="text-base font-medium">Last Name</label>
                                <input type="text" class="outline-none border-b-2 border-solid focus:border-black transition-all" />
                            </div>
                        </div>
                        <div class="flex flex-col py-4">
                            <label for="Email" class="text-base font-medium">Email</label>
                            <input type="text" class="outline-none border-black border-solid focus:border-blacktransition-all" />
                        </div>
                        <div class="flex flex-col py-4 pb-8">
                            <label for="Message" class="text-base font-medium">Message</label>
                            <textarea name="text" id="" cols="20" rows="4" class="outline-none border-b-2 border-solid focus:border-red-400 transition-all"></textarea>
                        </div>
                        <a href="" class="bg-black px-8 py-3 rounded-md text-white hover:bg-white hover:text-black border-2 border-solid border-black-400 transition-all">Submit Now</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
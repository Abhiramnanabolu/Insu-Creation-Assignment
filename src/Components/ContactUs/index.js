import Navbar from "../Navbar"

const ContactUs=()=>{
    return(
        <div>
            <div className=" bg-green-300 font-[Poppins] px-16">
                <Navbar />
                <div className="flex justify-between">
                    <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716744981/Group_103_hubco7.png"/>
                    <div className="flex flex-col justify-center mr-24">
                        <h1 className="text-4xl font-bold">CONTACT US</h1>
                    </div>
                </div>
           </div>
           <div className="flex flex-col items-center p-16 pb-24">
                <div className="rounded-full bg-lime-100 flex justify-center items-center px-8 py-2">contact us</div>
                <h1 className="text-3xl font-semibold mt-7">CONTACT US</h1>
                <div className="w-3/4 box-border p-16 rounded-lg flex gap-16 shadow-card mt-16">
                    <div className="w-2/3 pr-8 border-r-2 border-sky-500">
                        <p className="font-semibold">Name :</p>
                        <input className="w-full border-2 h-10 mt-2 rounded-xl"/>
                        <p className="font-semibold mt-8">Phone Number :</p>
                        <input className="w-full border-2 h-10 mt-2 rounded-xl"/>
                        <p className="font-semibold mt-8">Email :</p>
                        <input className="w-full border-2 h-10 mt-2 rounded-xl"/>
                        <p className="font-semibold mt-8">Your Message:</p>
                        <input className="w-full border-2 h-10 mt-2 rounded-xl"/>
                        <button className="mt-24 rounded-full bg-black text-white px-16 py-4">Send</button>
                    </div>
                    <div className="w-1/3 p-8">
                        <div className="flex items-center border-b-2 pb-4 border-gray-200">
                            <div className="w-1/4">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716748687/Group_97_skxd92.png"/>
                            </div>
                            <div className="w-3/4">
                                <p className="font-semibold">Visit Us:</p>
                                <p className="text-sm">27 Division St, New York, NY 10002, USA</p>
                            </div>
                        </div>
                        <div className="flex items-center border-b-2 py-4 border-gray-200">
                            <div className="w-1/4">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716748687/Group_97_skxd92.png"/>
                            </div>
                            <div className="w-3/4">
                                <p className="font-semibold">Phone Number:</p>
                                <p className="text-sm">+1 (800) 123 456 789</p>
                            </div>
                        </div>
                        <div className="flex items-center  py-4 border-gray-200">
                            <div className="w-1/4">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716748687/Group_97_skxd92.png"/>
                            </div>
                            <div className="w-3/4">
                                <p className="font-semibold">Email:</p>
                                <p className="text-sm">admin@admin.com</p>
                            </div>
                        </div>
                        <img className="mt-16" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716749155/Mask_group_1_vjyfhh.png"/>
                    </div>
                </div>
           </div>
           <div className="home-section-7 bg-amber-50 px-24 py-12 pb-48 flex flex-col items-center">
                <h1 className="text-2xl font-semibold">Reviews From Students</h1>
                <img src="https://s3-alpha-sig.figma.com/img/b6ea/ff3c/ec9b81a80436f0735f7091fa38ffa5af?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUlRvGNLSd7y4c9Cr-jr6v0QrQag-OSiWp4zgWqjT56dpNDZQ5v20y3i~EFFebIATjIb3h0I-9bEpOZZOYIlxCmZH~zFoI-Us7mRZknluiSdDNDbCym4T3DLoGORBCK6o4x4PDy01BWfEsAXXTJ32kdyodVogMf9EMiTX1-a9WhF7FYY~AC9ejtWJmGqt97Lo4aFsu42pau-wGmkIqAWM3dfDcEioCx7H8lHffAYDZzE~tTvNPUQM766Fwo84L5kfCOrzYZu2OSZD3c6jzxSw9ZhvfAWRLU5re3OBacTcFtdoO0JdJMT3xC3DUOtQTkIC6LUlO3JQJdosD6WrY5kDg__"/>
                <div className="flex gap-8 justify-center mt-8">
                    <div className="w-1/3 flex flex-col bg-white p-6">
                        <div className="p-4">
                            <p>Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumenda? Aute praesentium fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.</p>
                        </div>
                        <div className="flex items-center  justify-around">
                            <img src="https://s3-alpha-sig.figma.com/img/13bf/a120/2796e39c67ec8a116fb037fe9423acb8?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDmHwENyGxubHGTn8jmmsvY5Dgvv3zBOh37Eg4o9SCP3f8JzFhg6dxfR86t153P3xTFr8eFyZlgiOp-LIgrfLAXEse72xE3nu1tSy7UxaF9DUQ0uPzOyu~Yw3nB-bfyT2pZIv-5DIyo3qvz6WeGRSPZ7D-BxLLtyh70VE5c1KCEgzqHm52YJBz8R61chuLVjKkgM~ilTKR7Peakv1MkQRKmLCWjzczrY3MSkHEfmbUFXkoN1pLty50kF8dQ96iSIWTiMkPZ7sfA7G5hxyktXjqwyyN8a-MH0JokeCH7EI7i13xDXyznm7FyGpJcdvhFKX39f5cmi22IxLCA5-MUwCg__"/>
                            <img src="https://s3-alpha-sig.figma.com/img/dc44/7cc5/e7acc789893771968fb262557e607cdb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTeQg3DByrV1KxbPHvlaD1uZTnD9C5JanBNtnDgjkNDFIpgWIEqi9C0brbTDPZJedHllt0RyqjBOXKOo0ZHIqVlQw5felLV8d9~RCViJ3N~52JrDfmyjVMiTJ7~kEBCvWRHCbNqUE702fL2sLs5~zoBg0rWqAGi0HKfKkxGzlJo3uSJmdP~q~QRvc7NZHrvgMHBbppyQLnR8PAPv1UWQs6KIIoEaYjeGfQjE3cxVo1Cv37M85~SuZH6tw67BYhNV5hvWXDiUI04YSzfw2DowEEmnOSLqiP58kbT7tmsToxrvQztFEq3FN42fTQS7KE5DMi3ONkuIqd1XYl8q9pb1Yw__"/>
                            <div className="flex flex-col">
                                <p>Jenny Wilson</p>
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716723000/Group_102_wpqwqb.png"/>
                            </div>
                            <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716723088/Mask_group_eanazx.png"/>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col bg-white p-6">
                        <div className="p-4">
                            <p>Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumenda? Aute praesentium fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.</p>
                        </div>
                        <div className="flex items-center  justify-around">
                            <img src="https://s3-alpha-sig.figma.com/img/13bf/a120/2796e39c67ec8a116fb037fe9423acb8?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDmHwENyGxubHGTn8jmmsvY5Dgvv3zBOh37Eg4o9SCP3f8JzFhg6dxfR86t153P3xTFr8eFyZlgiOp-LIgrfLAXEse72xE3nu1tSy7UxaF9DUQ0uPzOyu~Yw3nB-bfyT2pZIv-5DIyo3qvz6WeGRSPZ7D-BxLLtyh70VE5c1KCEgzqHm52YJBz8R61chuLVjKkgM~ilTKR7Peakv1MkQRKmLCWjzczrY3MSkHEfmbUFXkoN1pLty50kF8dQ96iSIWTiMkPZ7sfA7G5hxyktXjqwyyN8a-MH0JokeCH7EI7i13xDXyznm7FyGpJcdvhFKX39f5cmi22IxLCA5-MUwCg__"/>
                            <img src="https://s3-alpha-sig.figma.com/img/dc44/7cc5/e7acc789893771968fb262557e607cdb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTeQg3DByrV1KxbPHvlaD1uZTnD9C5JanBNtnDgjkNDFIpgWIEqi9C0brbTDPZJedHllt0RyqjBOXKOo0ZHIqVlQw5felLV8d9~RCViJ3N~52JrDfmyjVMiTJ7~kEBCvWRHCbNqUE702fL2sLs5~zoBg0rWqAGi0HKfKkxGzlJo3uSJmdP~q~QRvc7NZHrvgMHBbppyQLnR8PAPv1UWQs6KIIoEaYjeGfQjE3cxVo1Cv37M85~SuZH6tw67BYhNV5hvWXDiUI04YSzfw2DowEEmnOSLqiP58kbT7tmsToxrvQztFEq3FN42fTQS7KE5DMi3ONkuIqd1XYl8q9pb1Yw__"/>
                            <div className="flex flex-col">
                                <p>Jenny Wilson</p>
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716723000/Group_102_wpqwqb.png"/>
                            </div>
                            <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716723088/Mask_group_eanazx.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-section-8 relative">
                <div className="between-container gap-8  bg-green-300 flex items-center rounded-2xl p-4 absolute left-1/2 transform -translate-x-1/2 -top-12">
                   <div className="w-1/2">
                        <h1 className="text-xl font-semibold">Subscribe Our Newsletter !</h1>
                        <p>Elementum ex similique sollicitudin eveniet sem eveniet proin, iste euismod! Quia! Fugiat molestie leo placerat, tenetur.</p>

                   </div>
                   <div className="w-1/2">
                       <div className="bg-white flex h-12 rounded-full">
                           <div className="bg-white w-3/4 rounded-full"></div>
                           <div className="bg-black text-white w-1/4 flex justify-center items-center rounded-full">Subscribe</div>
                       </div>
                   </div>
                </div>
                <div class="flex justify-between pt-48 text-white bg-neutral-800">
                    <div className="w-full p-6">
                        <p> Vero, tempor morbi, adipiscing aliqua nonummy proident perferendis? Laboris lacus quidem repellendus quasi.</p>
                    </div>
                    <div class="w-full md:w-1/3 mb-4">
                        <h3 class="font-bold  text-lg mb-2">Quick Links</h3>
                        <ul class="list-none pl-4">
                            <li class="mb-2"><p class="">Home</p></li>
                            <li class="mb-2"><p class="">About Us</p></li>
                            
                            <li class="mb-2"><p class="">Careers</p></li>
                            <li class="mb-2"><p class="">News & Articles</p></li>
                            <li><a href="#" class="">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 mb-4">
                        <h3 class="font-bold  text-lg mb-2">Useful Links</h3>
                        <ul class="list-none pl-4">
                            <li class="mb-2"><p class="">Help Center</p></li>
                            <li class="mb-2"><p href="#" class="">Contact Us</p></li>
                            
                            <li class="mb-2"><p href="#" class="">FAQ</p></li>
                            <li class="mb-2"><p href="#" class="">Parent Community</p></li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 mb-4">
                        <h3 class="font-bold text-lg mb-2">School Hours</h3>
                        <p class="">BAM-5PM, Monday-Saturday</p>
                        <p>Aut, quae convallis minim cum ornare! Pede ut rem, totam dictum convallis.</p>
                    </div>
                </div>
                <div class="text-white bg-black flex justify-around p-5">
                    <div>
                        <p class=" text-sm">&copy; 2022 Educator. All rights reserved</p>
                    </div>
                    <div className="flex gap-4">
                        <p>PRIVACY POLICY |</p>
                        <p>SUPPORT |</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
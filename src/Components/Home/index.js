import Navbar from "../Navbar"
import "./index.css"

const Home=()=>{
    return(
        <div className=" font-[Poppins]">
            <div className="home-section-1">
                <Navbar/>
                <div className="hs1-div-1 flex flex-row">
                    <div className="flex flex-col pl-8 justify-center w-1/2 items-start">
                        <h1 className="text-5xl font-bold">Best Mobile <br></br> App Showcase</h1>
                        <p className="mt-4">Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.</p>
                        <button className="mt-8 rounded-full bg-black text-white px-8 py-3">Read More</button>
                    </div>
                    <div className="hs1-d1-img-div flex justify-center w-1/2">
                        <img className="w-10/12" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716710502/cb44a9da3594b4a1ab60adde30459f78_fmoxr4.png"/>
                    </div>
                </div>
            </div>
            <div className="home-section-2 pt-24 flex flex-col items-center">
                <h1 className="text-xl text-center font-semibold">Engaging & Spacious <br></br> School Campus</h1>
                <img className="mt-3 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716713034/ec9b81a80436f0735f7091fa38ffa5af_c1ivxv.png"/>
                <p className="w-1/2 text-center text-gray-500 mt-6">Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.</p>
                <div className="flex gap-16">
                    <div className="ui-design-div-1 mt-8 text-black flex items-center relative">
                        <img className="object-cover z-0 w-full h-full" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716713750/Vector_6_boovar.png" alt="Background Image"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                            <div className="bg-white w-1/2 p-5 flex justify-center items-center rounded-full">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718160/31d968588c5beb2ee3c65cb4b5592eed_slcv8i.png" alt="Overlay Image"/>
                            </div>
                            <h1 className="">Perfect UI Design</h1>
                            <p className="text-sm p-2">Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                            <div className="bg-black aspect-square rounded-full p-2 flex justify-center items-center">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718473/Vector_1_ymbjsj.png" alt="Overlay Icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="ui-design-div-1 mt-8 text-black flex items-center relative">
                        <img className="object-cover z-0 w-full h-full" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718796/Vector_6_1_azxeoy.png" alt="Background Image"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                            <div className="bg-white w-1/2 p-5 flex justify-center items-center rounded-full">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718160/31d968588c5beb2ee3c65cb4b5592eed_slcv8i.png" alt="Overlay Image"/>
                            </div>
                            <h1 className="">Perfect UI Design</h1>
                            <p className="text-sm p-2">Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                            <div className="bg-black aspect-square rounded-full p-2 flex justify-center items-center">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718473/Vector_1_ymbjsj.png" alt="Overlay Icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="ui-design-div-1 mt-8 text-black flex items-center relative">
                        <img className="object-cover z-0 w-full h-full" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716713750/Vector_6_boovar.png" alt="Background Image"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                            <div className="bg-white w-1/2 p-5 flex justify-center items-center rounded-full">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718160/31d968588c5beb2ee3c65cb4b5592eed_slcv8i.png" alt="Overlay Image"/>
                            </div>
                            <h1 className="">Perfect UI Design</h1>
                            <p className="text-sm p-2">Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                            <div className="bg-black aspect-square rounded-full p-2 flex justify-center items-center">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718473/Vector_1_ymbjsj.png" alt="Overlay Icon"/>
                            </div>
                        </div>
                    </div>

                </div>
                <img className="mt-16 mb-16" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716718887/4d939a4345c390f7b8c6b309140c477d_gxocp1.png"/>
            </div>
            <div className="home-section-3 px-24 flex ">
                <div className="w-1/2 flex justify-center align-center">
                    <img src="https://s3-alpha-sig.figma.com/img/9b96/ed51/46a8594d73eb95a1265239d5fdf9a23d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQd-jeE5vIhQQFitOLo1oVvbsWEiSxS8hHHWJ~2DV-oQWvLtQ5lnWiLd-v1kr4TuZaYnoC~tBJKVkxvb6E46NKdfqXuvKPAA~qncPtnJgAetbW~oN2eEtXCZXNpPn4bzADK-npn7dUnJxDrTLGiaHhuu49dmUk0RC70bPuO0mxZ8ZAr3SWdpepFMdFgrAl8HsSB~YHfv9B2GyxDKdvJIgxJ8oF2ZbOelm4Cn57JWmab7xhA-rR9n2s9Ze-ftRnUZdzhoPkttCOQtcqQ9KxxX44yTb-vTObLsDh6t~k0NBaErAvKyBq30PPouzgJsE9gKWUQYP4S0Vx-BUbKQiQrReA__"/>
                </div>
                <div className="w-1/2 flex flex-col pr-24 justify-center items-start">
                   <h1 className="text-2xl font-semibold">Easy And Perfect Solution For <br></br> Your Business App</h1>
                   <p className="text-sm mt-4">Aliquam aliquet purus a est consequat lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus bibendum convallis.</p>
                   <p className="text-sm mt-8">Consequat purus aliquet a est aliquam lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae....</p>
                   <button className="bg-black mt-8 rounded-full text-white px-8 py-4">Read More</button>
                </div>
            </div>
            <div className="home-section-4 p-24">
                <h1 className="text-xl font-semibold">How does This App Work?</h1>
                <img className="mt-2" src="https://s3-alpha-sig.figma.com/img/b470/055e/c28432cb17286cefd18f74e6a59273ae?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BcjEu7x2gOEinQC7qhEl70KTaO74lIzwA5R3E7RORg~OgrccxxXMGv6AO3w2NWDodcbz1j2HyINEIe1hMUxwnubLEhqsvS8CaAdRWJzQBaHyJuNTw-McfuUykLQQlUpoQFWJOScfFmE5hu2P7Mw14~GnmxAJDMv5LEqT-Emogr~CFXdvLCBB7ogne1w4TeF~PYtFKz24v0LwbJXFXps8YFpdcZMHDRQCPVFnRt6G8CWwBjh-R-Ze1rcuUHQnIMTm8OnCV3MuRD6sRPtCkY9QD-mbtSyObWTO1cPVxQz-jRYYpiNq~IOJe3KRlSFUvd9WVEPxM1cZAWuySs~mmxvmrw__"/>
                <div className="flex">
                    <div className="w-1/2 ">
                        <div className="w-full my-8 flex shadow-card p-3">
                            <div className="w-1/4 p-2 flex justify-center items-center">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716720488/Group_68_y0q3ub.png"/>
                            </div>
                            <div className="w-3/4 p-2 flex flex-col justify-center">
                                <h1 className="text-xl font-semibold">Make A Profile</h1>
                                <p className="mt-2">Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                            </div>
                        </div>
                        <div className="w-full mb-8 flex shadow-card p-3">
                            <div className="w-1/4 p-2 flex justify-center items-center">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716720488/Group_68_y0q3ub.png"/>
                            </div>
                            <div className="w-3/4 p-2 flex flex-col justify-center">
                                <h1 className="text-xl font-semibold">Make A Profile</h1>
                                <p className="mt-2">Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                            </div>
                        </div>
                        <div className="w-full mb-8 flex shadow-card p-3">
                            <div className="w-1/4 p-2 flex justify-center items-center">
                                <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716720488/Group_68_y0q3ub.png"/>
                            </div>
                            <div className="w-3/4 p-2 flex flex-col justify-center">
                                <h1 className="text-xl font-semibold">Make A Profile</h1>
                                <p className="mt-2">Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/c0a8/6b94/a74ec860739122752600039e2f0e58ce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Emum3K9oeJjUPVpKEL4lANw5bq4eGiqGitU2d7kjaka~195Lid6ki7PcBV-eknp6UQfZM5XHa2PfCifyjBIE4LuONblL6vTus-5AGuNELIN3SCoiil3iyItMfHzjMGvQzMClEXAMMpRSw4jvFoX5OSzlP9OuOIdcwwZgK0FdXbCQmiqEM50DDllkDeYBcRL-UWBD-AXlHXtMYRYUuZ0wBewHBcdLOZn1XZzh2f6ZRMDH4rDQ~TiCsIaunwAzL5CkNoMxHCdKuz4qu7eLhFd13D-8sbcZhMdx-mfs8jlOu3J4urteZwH6OIcNj5Glk~KL-ZvV2hog9IggzUPdf00kbQ__"/>
                    </div>
                </div>
            </div>
            <div className="home-section-5 px-24 py-4 flex">
                <div className=" w-1/2 flex justify-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/f243/14a2/5dff8dd717a72a2ceb242815d6930c66?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmWVyN4dxhxrk9YRux126MU-zIVm8-VFUtzUykh~V6YTCSxTRKc4H2I7Et5R7L3Jmzwt9DztmI3rdvWt2QvnPFePWlnpx7Z36vDlWMMXM8D4rlkXqvE04Rru2PzIsyW5h1zY6iKZjOxcVd0kGoOfE5NUl7HyjwNV~i-XQs7ITDRTr7O9CDCcnmnPXCjkpC6noNB3RifUKOFr92vczLGBPYut-gUPltbR~x7SCTMJ-m5HtXAqcSZceA5OCDUyCOvR4omdDFMrbadtXk9erw3ueIFZmk4G0l9VkGVnOX8VQJkQCDf0FHG4HLjPnSl~mxN~Ug4EBDkDyiTgbheEq0WEhA__"/>
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">Designed & Worked By The Latest Partners</h1>
                    <div className="p-2 mt-4 text-lg bg-green-300">
                        <p>Aliquam varius ligula nec leo tempus porta.</p>
                    </div>
                    <p className="text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                    <div className="p-2 mt-4 text-lg bg-green-300">
                        <p>Suspendisse vitae varius diam, a vulputate urna.</p>
                    </div>
                    <div className="p-2 mt-4 text-lg bg-green-300">
                        <p>Aliquam aliquet purus eget lacus pretium.</p>
                    </div>
                </div>
            </div>
            <div className="home-section-6 py-8 flex flex-col items-center bg-green-300">
                <h1 className="text-2xl font-semibold">App Screenshots</h1>
                <img className="mt-4" src="https://s3-alpha-sig.figma.com/img/b6ea/ff3c/ec9b81a80436f0735f7091fa38ffa5af?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUlRvGNLSd7y4c9Cr-jr6v0QrQag-OSiWp4zgWqjT56dpNDZQ5v20y3i~EFFebIATjIb3h0I-9bEpOZZOYIlxCmZH~zFoI-Us7mRZknluiSdDNDbCym4T3DLoGORBCK6o4x4PDy01BWfEsAXXTJ32kdyodVogMf9EMiTX1-a9WhF7FYY~AC9ejtWJmGqt97Lo4aFsu42pau-wGmkIqAWM3dfDcEioCx7H8lHffAYDZzE~tTvNPUQM766Fwo84L5kfCOrzYZu2OSZD3c6jzxSw9ZhvfAWRLU5re3OBacTcFtdoO0JdJMT3xC3DUOtQTkIC6LUlO3JQJdosD6WrY5kDg__"/>
                <p className="text-medium mt-8 w-1/3 text-center">Saepe quo labore aenean dictumst expedita commodi auctor, nisl, lorem iusto feugiat nemo reiciendis laboris.</p>
                <div className="flex w-full mt-6">
                    <div className="box-border w-1/5 p-2 flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716722127/screenshot16_1_dozbs0.png"/>
                    </div>
                    <div className="box-border w-1/5 p-2 flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716722128/screenshot14_1_velipw.png"/>
                    </div>
                    <div className="box-border w-1/5 p-2">
                        <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716722027/Group_101_co7pxk.png"/>
                    </div>
                    <div className="box-border w-1/5 p-2 flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716722167/screenshot17_1_lhyyux.png"/>
                    </div>
                    <div className="box-border w-1/5 p-2 flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1716722166/screenshot13_1_wybfhm.png"/>
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

export default Home
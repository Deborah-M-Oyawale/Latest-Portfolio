const Resume = () =>{
    return(
        <>              
            <div className="border-b border-neutral-200 border-solid py-28">
                <div className="w-4/5 mx-auto pt-24">
                    <h2 className="text-white text-7xl font-bold">Services</h2>
                    <p className="text-teal-500 text-lg pt-11 pb-28">WHAT I DO</p>

                    <div className="grid md:grid-cols-12 grid-cols-1 grid-rows-2 gap-x-4">
                        <div className="col-span-6 text-white text-2xl">
                            <span className=""><i className="text-teal-500 fa-solid fa-brain fa-3x"></i></span>
                                <h3 className="font-bold text-3xl py-8">
                                    Economic 
                                    <br/> Science
                                </h3>
                                <p>
                                  Economics is a social science concerned with the production,consumption of goods and services                              
                                </p>
                        </div>
                        <div className="col-span-6 text-white text-2xl">
                            <span ><i className="text-teal-500 fa-solid fa-rectangle-ad fa-3x"></i></span>
                                                <h3 className="font-bold text-3xl py-8">Marketing<br />
                                                     & Advertising
                                                 </h3> 
                                                 <p>
                                                    Advertising Management though is a complex process of
                                                    employing various media to sell a product or service.
                                                 </p>
                        </div>
                        <div className="text-white col-span-6 text-2xl">
                            <span><i className=" text-teal-500 fa-brands fa-chrome fa-3x pt-10"></i></span> 
                                <h3 className="font-bold text-3xl pt-8">Web<br />Development</h3>
                                <p >
                                  The web development process includes: web design, web content, client-side / server-side scripting and
                                  network security configuration.
                                </p>
                        </div>
                        <div className="text-white col-span-6 text-2xl">
                            <span ><i className="text-teal-500 fa-solid fa-headphones fa-3x pt-10"></i></span>
                                <h3 className="font-bold text-3xl pt-8">Music <br />Writing </h3>
                                <p >
                                    Sheet music is the basic form in which Western 
                                    classical music is notated so that it can be learned and performed by solo singers.
                                </p>
                        </div>
                     </div>
                </div> 
            </div>             

            
        <div className="border-b border-neutral-200 border-solid py-28">
                        <div className="w-4/5 mx-auto pt-24 text-white">
                            <div>
                                <h2 className="text-white text-7xl font-bold">Experience</h2>
                                <p className="text-teal-500 text-lg pt-11 pb-20">WORKING WITH</p>
                            </div>
                            
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-x-5">
                                <div className="col-span-6">
                                    <div class="">
                                        <div className="flex">
                                            <div className="date">Present</div>
                                            <h3 className=" text-3xl font-bold pb-14">Red <br/>drifting
                                            </h3>
                                        </div>
                                    <p className="text-xl pb-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                                    </p>
                                    </div>
                                </div>

                                <div className="col-span-6">
                                        <div className="flex">
                                            <div className="date">2021-2022</div>
                                            <h3 className=" text-3xl font-bold pb-14">Art Director <br/>Faedevs</h3>
                                        </div>
                                        <p className="text-xl">Cras dapibus. VAenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                                            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                             Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
                                            lorem.  
                                        </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>  

                                                 {/* EDUCATION */}

                    <div className="border-b border-neutral-200 border-solid py-28">
                        <div className="w-4/5 mx-auto pt-24 text-white">
                                <h2 className="text-white text-7xl font-bold" >Education</h2>
                                <p className="text-teal-500 text-lg pt-11 pb-20 font-bold">STUDIED AT</p>
                            
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-x-5">
                                <div className="col-span-6">
                                        <div className="flex">
                                            <div className="date font-bold">2011-2015</div>
                                            <h3 className=" text-3xl font-bold pb-14">Mathematics
                                            </h3>
                                        </div>
                                        <p className="text-xl pb-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                           Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                          natoque penatibus et magnis dis parturient montes, 
                                          nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                                        </p>
                                </div>

                                <div className="col-span-6">
                                        <div className="flex">
                                            <div className="date font-bold">2021-2022</div>
                                            <h3 className=" text-3xl font-bold pb-14">Programming Course</h3>
                                        </div>
                                        <p className="text-xl">Cras dapibus. VAenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                                            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                             Nam eget dui. Etiam rhoncus.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                            {/* CODING SKILLS */}
     <div className="border-b border-neutral-200 border-solid py-28">
        <div className="text-white w-4/5 mx-auto pt-24">
            <div>
                <h2 className="text-7xl font-bold">Coding <br/>Skills</h2>
                    <p className="text-teal-500 text-lg pt-11 pb-20 font-bold">DEVELOPING ON</p>
            </div>

        <div className="grid md:grid-cols-12 grid-cols-2 md:grid-rows-2 gap-x-4">
            <div className="md:col-span-4">
                <div class="coding-skill-circle">
                    <i class="fa-brands fa-wordpress-simple fa-3x"></i>
                </div>
                <h4 className="font-bold text-2xl pt-8">Bootstrap, Tailwind</h4> <br/>
                <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div>
            </div>

                                    <div className="col-span-4">
                                        <div class="coding-skill-circle">
                                            <i class="fa-brands fa-php fa-2x"></i>
                                            <i class="fa-solid fa-database fa-2x"></i>
                                        </div>
                                    <h4 className="font-bold text-2xl pt-8">POSTGRESQL, MYSQL</h4> <br/>
                                    <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div>
                                    </div>

                                        <div className="col-span-4">
                                            <div class="coding-skill-circle">
                                                <i class="fa-brands fa-js fa-3x"></i>
                                            </div>
                                        <h4 className="font-bold text-2xl pt-8">JavaScript</h4><br/>
                                        <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div>
                                        </div>

                                            <div className="col-span-4">
                                                <div class="coding-skill-circle">
                                                    <i class="fa-brands fa-react fa-3x"></i>
                                                </div>
                                            <h4 className="font-bold text-2xl pt-8">React</h4><br/>
                                            <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div>
                                            </div>

                                                <div className="col-span-4">
                                                    <div class="coding-skill-circle">
                                                        <i class="fa-brands fa-html5 fa-2x"></i>
                                                        <i class="fa-brands fa-css3 fa-2x"></i>
                                                    </div>
                                                <h4 className="font-bold text-2xl pt-8">HTML, CSS</h4><br/>
                                                <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div>
                                                </div>

                                                    <div className="col-span-4">
                                                        <div class="coding-skill-circle">
                                                            <i class="fa-brands fa-python fa-3x"></i>
                                                        </div>
                                                    <h4 className="font-bold text-2xl pt-8">Python</h4><br/>
                                                    <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div>
                                                    </div>
                                    
                            </div>   
                        </div>
                    </div>

                    {/* CLIENTS */}

                    <div className="border-b border-neutral-200 border-solid py-28">
                        <div className="text-white w-4/5 mx-auto pt-24">
                            <div class="clients-section">
                                <div id="clients-title-header">
                                    <h2 className="text-7xl font-bold pb-10">Clients</h2>
                                    <p className="text-teal-500 pb-9">MY PARTNERS</p>
                                </div>
                                <div className="images-of-partners md:flex">
                                    <img class="vintage" src="https://myour-jekyll.netlify.app/assets/img/clients/client4.png" />
                                    <img class="sunshine" src="https://myour-jekyll.netlify.app/assets/img/clients/client1.png" />
                                    <img class="vintage-studio" src="https://myour-jekyll.netlify.app/assets/img/clients/client3.png"/>
                                    <img class="classic" src="https://myour-jekyll.netlify.app/assets/img/clients/client2.png"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>    

                  
        </>
    )
}

export default Resume;
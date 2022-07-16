const Home = () => {
    return (
       <>
          <div className="border-b border-neutral-200 border-solid">
            <menu className="w-4/5 mx-auto">
            <h1 className="name hidden md:block text-white text-5xl w-4/5 mx-auto">
                     MO' <br />
                     Fola
                 </h1> 

                 <h1 className="name-sm md:hidden text-white text-5xl">
                     MO'
                     Fola
                 </h1> 
              <h1 className="text-teal-700 uppercase font-bold text-4xl pb-8"> Front-End Developer</h1>
              <div className="text-white text-2xl">
              Hello! I am a Frontend Web Developer from Lagos State, Nigeria. I have
              rich experience in web site design and building, data analytics and data science. I love to talk with you about our unique.
             </div>
             <button className="contactButton">Contact Me &nbsp;&nbsp;</button>
            </menu>
                  
          </div>
       </>
    )
 }

 export default Home;

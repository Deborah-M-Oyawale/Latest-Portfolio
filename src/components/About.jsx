const About =() =>{
    return(
        <>
        <div className="border-b border-neutral-200 border-solid py-28">
            <div className="w-4/5 mx-auto">
            <h2 className="my-20 text-white text-5xl font-bold ">About Me
            </h2>
            <h3 className="my-10 text-2xl font-bold uppercase text-teal-500" >MY STORY</h3>
            <p className="my-14 text-xl text-white ">Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.<br/><br/><br/>

            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
             
            <div className="grid md:grid-cols-12 grid-cols-1 pb-8">
                <div className="col-span-6 text-white">
                    <p> <span className="text-teal-500 font-bold"> AGE:</span> &nbsp;&nbsp; 27</p>
                    <p> <span className="text-teal-500 font-bold"> FREELANCE:</span> &nbsp;&nbsp; Available</p>
                    <p> <span className="text-teal-500 font-bold"> PHONE:</span> &nbsp;&nbsp; +234 8169854145</p>
                </div>
                <div className="col-span-6 text-white">
                    <p> <span className="text-teal-500 font-bold"> RESIDENCE:</span> &nbsp;&nbsp; NIGERIA</p>
                    <p> <span className="text-teal-500 font-bold"> ADDRESS:</span> &nbsp;&nbsp; Lagos Nigeria</p>
                    <p> <span className="text-teal-500 font-bold"> E-MAIL:</span> &nbsp;&nbsp; mosadijesuoyawale@gmail.com</p>
                </div>
            </div>
        
         </div>
        </div>
       
</>



        
    )
}

export default About;
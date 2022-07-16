// import '../App.css'
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom';
import { useState } from "react";
const TopNav = () => {
    const [menu, setMenu] = useState(false)

    const handleClick =()=> {
        
    }


    return(
    <>
        <header className="w-full h-24 mt-20 fixed z-zin">
          <nav className="lg:w-4/5 bg-zinc-700 md:rounded-rb w-full mx-auto flex justify-between h-full items-center z-zin">
            {/* <div className="w-11/12 md:flex justify-between"> */}
                <div className="text-red-500 px-7">
                    <h1>logo</h1>
                </div>
                {/* <div> */}
                <ul className="links text-white text-lg uppercase hidden md:flex items-center space-x-7 h-full pr-7" id="menu">
                        
                    <li>
                         <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/">About</Link>
                    </li>
                    <li>
                         <Link to="/">Resume</Link>
                    </li>
                    <li>
                         <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                         <Link to="/">Contact</Link>
                    </li>
                    <li>
                         <Link to="/">Download CV</Link>
                    </li>
                </ul>
            {/* </div> */}
         {/* </div> */}            
                <div onClick={handleClick} className="px-4 cursor-pointer block md:hidden" id="burger">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
               </div>
            </nav>
         </header>
        {
            menu && 
            <ul className="text-black text-lg uppercase block md:hidden items-center h-full">
                        
            <li>
                    <Link to="/">Home</Link>
            </li>
            <li>
                    <Link to="/">About</Link>
            </li>
            <li>
                    <Link to="/">Resume</Link>
            </li>
            <li>
                    <Link to="/">Portfolio</Link>
            </li>
            <li>
                    <Link to="/">Contact</Link>
            </li>
            <button className="bg-red-500 text-white rounded-rb py-3">
                <Link to="/">Download CV</Link>
            </button>
                    
        </ul>
        }
         {/* <button className="bg-red-500 text-white rounded-rb py-3">
            check
         </button> */}
        </>

    // <header class="font-bold position: fixed; uppercase text-xl text-zinc-200 bg-zinc-800 h-28 w-full md:flex md:justify-end">
    // <nav class="flex w-5/6 mx-auto h-full px-1.5 space-x-24 text-align: justify;">
    //     <div class="flex justify-around">
    //         <div class="flex h-full text-align: justify;">
    //             <img className = "logo w-5 h-7" src={logo} alt="logo" />
    //             <h1 className="my-name">Mo' <br /> Fola</h1>
    //         </div>
    //         <div className="px-4 cursor-pointer md:hidden">
    //             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 me-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    //                 <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    //             </svg>
    //         </div>
    //     </div>
          
    //         <ul class="flex text-align: center; w-full h-full space-x-24 ">
    //             <li className="links">
    //                 <a href="#">Home</a>
    //             </li>
    //             <li>
    //                 <a href="#">About</a>
    //             </li>
    //             <li>
    //                 <a href="#">Resume</a>
    //             </li>
    //             <li>
    //                 <a href="#">Portfolio</a>
    //             </li>
    //             <li>
    //                 <a href="#">Contact</a>
    //             </li>
    //             <li>
    //                 <button btn >Download CV</button>
    //             </li>
    //         </ul>
            
    //     </nav>
    // </header>
    )
}
export default TopNav;

{/* <script src="index."></script> */}
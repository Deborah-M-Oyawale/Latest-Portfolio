const contact =() =>{
    return(
        <>

            <div>
                <div className="text-white w-4/5 mx-auto pt-24">
                    <div className="pb-24">
                        <h2 className="text-7xl font-bold">Contact</h2>
                        <p className="text-lg font-bold text-teal-600">LET'S TALK</p>
                    </div>
                    
                <div className="contact-wrapper lg:flex gap-64">
                    <form className="lg:w-1/2 -pt-10 information-wrapper">
                        <div className="text-in">
                            <label htmlFor='text' className="label-text">Fullname<span className="text-teal-500"><strong>*</strong></span></label> <br/>
                            <input type="text" className="border border-neutral-200 border-solid absolute mb-40 label-border" placeholder="Mosadijesu Fola" /> <br/><br/>
                        </div>
                        <div className="text-in">
                            <label htmlFor='text' className="label-text">Email<span className="text-teal-500"><strong>*</strong></span></label><br/>
                            <input type="email" className="border border-neutral-200 border-solid label-border" placeholder="johndoe@gmail.com" /><br/><br/>
                        </div>

                        <div class="text-in">
                            <label htmlFor='text' className="label-text">Message<span className="text-teal-500"><strong>*</strong></span></label> <br/>
                            <textarea placeholder="To write" className="border border-neutral-200 border-solid label-border"></textarea><br/>
                            <button >Send Message &nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></button>
                        </div>

                    </form>

                    <div class="authors-information">
                <h2 >Mo' Fola</h2>
                <p  className="authors-role text-teal-500">CONSULTANT & DEVELOPER</p>
                <p> <span className="text-teal-500">AGE:</span> &nbsp;&nbsp; 26</p>
                <p> <span className="text-teal-500">FREELANCE:</span> &nbsp;&nbsp; Available</p>
                <p> <span className="text-teal-500">PHONE:</span> &nbsp;&nbsp; +234 8169854145</p>
                <p><span className="text-teal-500">RESIDENCE:</span>&nbsp;&nbsp; NIGERIA</p>
                <p><span className="text-teal-500">ADDRESS:</span> &nbsp;&nbsp; Lagos Nigeria</p>
                <p><span className="text-teal-500">E-MAIL:</span> &nbsp;&nbsp; mosadijesuoyawale@gmail.com</p>
                <p class="signature" >Mo' Fola</p>
         </div>
 
                </div>
                    
                </div>
            </div>

        {/*<div class="contact-wrapper">
                <div class="contact-form">
                    <form class="information-wrapper">
                        <div class="text-in">
                            <label class="label-text">Fullname<span style="color: #68e0cf;"><strong>*</strong></span></label> <br/>
                            <input type="text" class="label-border" placeholder="Mosadijesu Fola" /> <br/><br/>
                        </div>
                        <div class="text-in">
                            <Label class="label-text">Email<span style="color: #68e0cf;"><strong>*</strong></span></Label><br/>
                            <input type="email" class="label-border" placeholder="johndoe@gmail.com" style="padding-top:30px"/><br/><br/>
                        </div>

                        <div class="text-in">
                            <label class="label-text">Message<span style="color: #68e0cf;"><strong>*</strong></span></label> <br/>
                            <textarea placeholder="To write" class="label-border" style="padding-bottom:60px"></textarea><br/>
                            <button >Send Message &nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i></button>
                        </div>

                    </form>


            <div class="authors-information">
                <h2 style="color: #fff">Mo' Fola</h2>
                <p style="color: #68e0cf;" class="authors-role">CONSULTANT & DEVELOPER</p>
                <p> <span style="color:#68e0cf">AGE:</span> &nbsp;&nbsp; 26</p>
                <p> <span style="color:#68e0cf">FREELANCE:</span> &nbsp;&nbsp; Available</p>
                <p> <span style="color:#68e0cf">PHONE:</span> &nbsp;&nbsp; +234 8169854145</p>
                <p><span style="color:#68e0cf">RESIDENCE:</span>&nbsp;&nbsp; NIGERIA</p>
                <p><span style="color:#68e0cf">ADDRESS:</span> &nbsp;&nbsp; Lagos Nigeria</p>
                <p><span style="color:#68e0cf">E-MAIL:</span> &nbsp;&nbsp; mosadijesuoyawale@gmail.com</p>
                <p class="signature" style="padding-bottom: 0;">Mo' Fola</p>
         </div>
        </div> */}
        
    </>

)}
export default contact;
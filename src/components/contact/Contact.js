import React from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { useForm} from '@formspree/react';

const Contact = () => {
  const redShadowStyle = {
    boxShadow: "0 0 10px gray",
  };
  

  

  // ========== Email Validation start here ==============

  // ========== Email Validation end here ================

  
  const [state, handleSubmit] = useForm("xrgwdnle");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft /><br></br>
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gray-200 text-black flex flex-col gap-8 p-4 lgl:p-8 shadow-red"
 style={redShadowStyle} >
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" >
         
             
              <div className="w-full flex flex-col lgl:flex-row gap-10 colo">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-black font-bold uppercase tracking-wide">
                    Your name
                  </p>
                  <input
  id="email"
       
 
  className='bg-gray-100 h-10 p-2 rounded-md'
  type="text" name='Name' requirede
/>

                </div>
                
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black font-bold uppercase tracking-wide">
                  Email
                </p>
                <input
                  className='bg-gray-100 h-10 p-2 rounded-md'
                  id="email"
        type="email" 
        name="email"
                 required
                
                />
                
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black  font-bold uppercase tracking-wide">
                  Subject
                </p>
                <input
                  className='bg-gray-100 h-10 p-2 rounded-md'
                   name='Subject'
                 
                  type="text" required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black font-bold uppercase tracking-wide ">
                  Message
                </p>
                <textarea
                
                  className=' rounded-md'
                  cols="30"
                  rows="8" name='message' required
                ></textarea>
              </div>
              <div className="w-full">
                <button
                 type="submit"  disabled={state.submitting}
                  className="w-full h-12 bg-[gray] font-bold rounded-lg text-base text-black tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
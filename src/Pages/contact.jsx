import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-main flex flex-col md:flex-row justify-between'>
      <div className='contact-left flex flex-col p-6 md:p-9'> 
        <h1 className="text-3xl md:text-4xl font-bold text-black font-tt-wellingtons py-6 md:py-9">Contact Us</h1>
        <div className="mb-4"> 
          <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-2">ADDRESS</h4>
          <h6 className="text-sm md:text-base text-black font-tt-wellingtons">BPIT, PSP-4, Dr KN Katju </h6>
          <h6 className="text-sm md:text-base text-black font-tt-wellingtons">Marg, Sector 17, Rohini,</h6>
          <h6 className="text-sm md:text-base text-black font-tt-wellingtons">Delhi 110089</h6>
        </div>
        <div className="mb-4"> 
          <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-1">EMAIL ADDRESS</h4>
          <h6 className="text-sm md:text-base text-black font-tt-wellingtons">drishtibpit@gmail.com</h6>
        </div>
        <div className="mb-8 md:mb-14"> 
          <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-1">Phone Number</h4>
          <h6 className="text-sm md:text-base text-black font-open-sauce">+91 79732-58997</h6>
        </div>
        <div>
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-6 md:py-8">Our Socials</h4>
            <div className="flex">
              <div className="pr-4">
                <FaFacebook size={40} color="#000" />
              </div>
              <div className="pr-4">
                <FaTwitter size={40} color="#000" />
              </div>
              <div className="pr-4">
                <FaInstagram size={40} color="#000" />
              </div>
              <div>
                <FaLinkedin size={40} color="#000" />
              </div>
            </div>
        </div>
      </div>
      <div className='contact-right flex flex-col p-6 md:p-14 pr-6 md:pr-20'>
        <h1 className="text-3xl md:text-4xl font-bold text-black font-tt-wellingtons py-4 md:py-5">Suggestions</h1> 
        <form className="max-w-md md:max-w-sm mx-auto">
          <div className="mb-4">
            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs md:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" />
          </div>
          <div className="mb-4">
            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail ID" />
          </div>
          <div className="mb-4">
            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[100px] md:h-[calc(100px)]" placeholder="Message" />
          </div>
          <button className="bg-yellow-400 text-black w-full px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

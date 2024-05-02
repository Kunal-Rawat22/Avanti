import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='contact-main flex justify-between'>
      <div className='contact-left flex flex-col p-9'> 
        <h1 className="text-4xl font-bold text-black font-tt-wellingtons py-9">Contact Us</h1>
        <div className="mb-4"> 
          <h4 className="text-xl font-bold text-black font-tt-wellingtons py-2">ADDRESS</h4>
          <h6 className="text-sm  text-black font-tt-wellingtons">BPIT, PSP-4, Dr KN Katju </h6>
          <h6 className="text-sm  text-black font-tt-wellingtons">Marg, Sector 17, Rohini,</h6>
          <h6 className="text-sm  text-black font-tt-wellingtons">Delhi 110089</h6>
        </div>
        <div className="mb-4"> 
          <h4 className="text-xl font-bold text-black font-tt-wellingtons py-1">EMAIL ADDRESS</h4>
          <h6 className="text-sm  text-black font-tt-wellingtons">drishtibpit@gmail.com</h6>
        </div>
        <div className="mb-14"> 
          <h4 className="text-xl font-bold text-black font-tt-wellingtons py-1">Phone Number</h4>
          <h6 className="text-sm  text-black font-open-sauce ">+91 79732-58997</h6>
        </div>
        <div>
            <h4 className="text-xl font-bold text-black font-tt-wellingtons py-8">Our Socials</h4>
            <div className="flex">
                <div className="pr-4"> {/* Apply padding to increase spacing */}
                    <FaFacebook size={40} color="#3b5998" />
                </div>
                <div className="pr-4">
                    <FaTwitter size={40} color="#1da1f2" />
                </div>
                <div className="pr-4">
                    <FaInstagram size={40} color="#c13584" />
                </div>
                <div>
                    <FaLinkedin size={40} color="#0077b5" />
                </div>
            </div>
        </div>
      </div>
      <div className='contact-right flex flex-col p-14 pr-20'>
        <h1 className="text-4xl font-bold text-black font-tt-wellingtons py-5">Suggestions</h1> 
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail ID</label>
            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
           <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-main flex justify-between pt-10">
      {/* Contact Left Div */}
      <div className="contact-left flex flex-col pt-4 p-12 w-1/3">
        <div className="w-4/5 mx-auto Contact-Details">
          {/* Contact Heading */}
          <h1 className="text-3xl font-bold text-black font-tt-wellingtons py-6 ">
            Contact Us
          </h1>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-2">
              ADDRESS
            </h4>
            <h6 className="text-sm md:text-base text-black font-tt-wellingtons">
              BPIT, PSP-4, Dr KN Katju Marg, Sector 17, Rohini, Delhi 110089
            </h6>
          </div>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-1">
              EMAIL ADDRESS
            </h4>
            <h6 className="text-sm md:text-base text-black font-tt-wellingtons">
              drishtibpit@gmail.com
            </h6>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-1">
              Phone Number
            </h4>
            <h6 className="text-sm md:text-base text-black font-open-sauce">
              +91 79732-58997
            </h6>
          </div>
          <div className="Socials">
            <h4 className="text-xl font-bold text-black font-tt-wellingtons py-6">
              Our Socials
            </h4>
            <div className="flex gap-4">
              <div>
                <FaFacebook size={40} color="#000" />
              </div>
              <div>
                <FaTwitter size={40} color="#000" />
              </div>
              <div>
                <FaInstagram size={40} color="#000" />
              </div>
              <div>
                <FaLinkedin size={40} color="#000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Right Div */}
      <div className="contact-right flex flex-col pt-4 p-12 w-1/3">
        <h1 className="text-3xl font-bold text-black font-tt-wellingtons py-6 text-center w-4/5 mx-auto">
          Suggestions
        </h1>
        <form className="w-4/5 mx-auto flex flex-col gap-4">
          <div className="Name">
            <input
              type="text"
              id="Name"
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Name"
            />
          </div>
          <div className="PhNo">
            <input
              type="text"
              id="PhNo"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
              placeholder="Phone Number"
            />
          </div>
          <div className="EmailId">
            <input
              type="text"
              id="EmailId"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 "
              placeholder="E-mail ID"
            />
          </div>
          <div className="Message">
            <textarea
              type="text-area"
              id="Message"
              rows={4}
              cols={40}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Message"
            />
          </div>
          <button className="bg-yellow-400 text-gray-700 text-lg font-bold w-full px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

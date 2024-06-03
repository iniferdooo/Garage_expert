import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6">
      <div className="flex-1 p-4 md:mr-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex-1 p-4 md:ml-4 mt-6 md:mt-0">
        <div className="flex justify-center md:justify-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.276964885526!2d112.61020594682007!3d-7.939974846265719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788211bc384919%3A0xdd8bda6f37230a4f!2sUniversitas%20Islam%20Malang!5e0!3m2!1sid!2sid!4v1716965580632!5m2!1sid!2sid"
            className="border-none w-full h-48 sm:w-[300px] sm:h-[200px] md:w-[600px] md:h-[300px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

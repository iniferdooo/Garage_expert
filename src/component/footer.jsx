import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Company Name</h2>
          <p className="text-sm">© 2024 All Rights Reserved.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
            <li><a href="#" className="text-sm hover:text-gray-400">About</a></li>
            <li><a href="#" className="text-sm hover:text-gray-400">Services</a></li>
            <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <ul className="flex space-x-4">
            <li><a href="#" aria-label="Facebook" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" aria-label="Twitter" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" aria-label="Instagram" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

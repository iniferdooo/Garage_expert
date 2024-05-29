// import React, { useEffect, useState } from 'react';

// const Jam = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const updateStatus = () => {
//       const now = new Date();
//       const hours = now.getUTCHours() + 7; // Convert UTC to WIB (UTC+7)
//       const adjustedHours = hours >= 24 ? hours - 24 : hours;
//       const openStatus = adjustedHours >= 7 && adjustedHours < 16;

//       setIsOpen(openStatus);
//     };

//     updateStatus();
//     const intervalId = setInterval(updateStatus, 60000); // Update every minute

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-4xl font-bold mb-6 text-white">Status Bengkel</h1>
//       <div className='flex justify-center'>
//       <div
//         id="status"
//         className={` text-white text-2xl font-semibold py-4 px-8 rounded-lg w-1/3 ${
//           isOpen ? 'bg-green-500' : 'bg-red-500'
//         } transition-colors duration-300`}
//       >
//         {isOpen ? 'Buka' : 'Tutup'}
//       </div>
//       </div>
//       <p className="mt-4 text-gray-300">
//         {isOpen
//           ? 'Kami buka sekarang! Silakan datang untuk pelayanan terbaik.'
//           : 'Kami tutup saat ini. Silakan datang kembali nanti.'}
//       </p>
//     </div>
//   );
// };

// export default Jam;

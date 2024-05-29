import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const initialData = [
  { id: 1, name: 'Ahmad', status: 'Hadir' },
  { id: 2, name: 'Budi', status: 'Hadir' },
  { id: 3, name: 'Chandra', status: 'Tidak Hadir' },
  { id: 4, name: 'Dewi', status: 'Hadir' },
  { id: 5, name: 'Eka', status: 'Tidak Hadir' },
  { id: 6, name: 'Firman', status: 'Hadir' },
];

const Statuspekerja = () => {
  const [workers, setWorkers] = useState(initialData);

  const updateStatuses = () => {
    const currentHour = new Date().getHours();
    let updatedWorkers = [...workers];

    if (currentHour >= 7 && currentHour < 12) {
      updatedWorkers = workers.map((worker, index) => ({
        ...worker,
        status: index < 3 ? 'Hadir' : 'Tidak Hadir',
      }));
    } else if (currentHour >= 12 && currentHour < 16) {
      updatedWorkers = workers.map((worker, index) => ({
        ...worker,
        status: index >= 3 ? 'Hadir' : 'Tidak Hadir',
      }));
    } else {
      updatedWorkers = workers.map((worker) => ({
        ...worker,
        status: 'Bengkel Tutup',
      }));
    }
    setWorkers(updatedWorkers);
  };

  useEffect(() => {
    updateStatuses();
    const intervalId = setInterval(updateStatuses, 60000); // Update every minute
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Daftar Pekerja Bengkel</h1>
      <div className="flex flex-wrap -mx-4">
        {workers.map(worker => (
          <div key={worker.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover" src={`image/${worker.name.toLowerCase()}.jpg`} alt={worker.name} />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{worker.name}</h2>
                <p className={`mt-2 text-lg ${worker.status === 'Hadir' ? 'text-green-600' : worker.status === 'Tidak Hadir' ? 'text-red-600' : 'text-gray-500'}`}>
                  Status: {worker.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="items-center w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.276964885526!2d112.61020594682007!3d-7.939974846265719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788211bc384919%3A0xdd8bda6f37230a4f!2sUniversitas%20Islam%20Malang!5e0!3m2!1sid!2sid!4v1716965580632!5m2!1sid!2sid"
          width="700"
          height="400"
          className="border-none" // Menggunakan kelas Tailwind untuk menghilangkan border
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Statuspekerja;

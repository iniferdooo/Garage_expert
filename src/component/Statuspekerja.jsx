import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const initialData = [
  { id: 1, name: 'Ahmad', status: 'Hadir', image: 'https://alazharpeduli.oss-ap-southeast-5.aliyuncs.com/laz-artikelberita/62a9894c6969c-22020202990829_kisah-nazri-penyadap-karet-yang-kini-mandiri-dengan-membuka-usaha-bengkel.jpg' },
  { id: 2, name: 'Budi', status: 'Hadir', image: 'https://alazharpeduli.oss-ap-southeast-5.aliyuncs.com/laz-artikelberita/62a9894c6969c-22020202990829_kisah-nazri-penyadap-karet-yang-kini-mandiri-dengan-membuka-usaha-bengkel.jpg' },
  { id: 3, name: 'Chandra', status: 'Tidak Hadir', image: 'https://alazharpeduli.oss-ap-southeast-5.aliyuncs.com/laz-artikelberita/62a9894c6969c-22020202990829_kisah-nazri-penyadap-karet-yang-kini-mandiri-dengan-membuka-usaha-bengkel.jpg' },
  { id: 4, name: 'Dewi', status: 'Hadir', image: 'https://alazharpeduli.oss-ap-southeast-5.aliyuncs.com/laz-artikelberita/62a9894c6969c-22020202990829_kisah-nazri-penyadap-karet-yang-kini-mandiri-dengan-membuka-usaha-bengkel.jpg' },
  { id: 5, name: 'Eka', status: 'Tidak Hadir', image: 'https://alazharpeduli.oss-ap-southeast-5.aliyuncs.com/laz-artikelberita/62a9894c6969c-22020202990829_kisah-nazri-penyadap-karet-yang-kini-mandiri-dengan-membuka-usaha-bengkel.jpg' },
  { id: 6, name: 'Firman', status: 'Hadir', image: 'https://alazharpeduli.oss-ap-southeast-5.aliyuncs.com/laz-artikelberita/62a9894c6969c-22020202990829_kisah-nazri-penyadap-karet-yang-kini-mandiri-dengan-membuka-usaha-bengkel.jpg' },
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
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Daftar Pekerja Bengkel</h1>
      <div className="flex flex-wrap -mx-2">
        {workers.map(worker => (
          <div key={worker.id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover" src={worker.image} alt={worker.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{worker.name}</h2>
                <p className={`mt-2 text-lg ${worker.status === 'Hadir' ? 'text-green-600' : worker.status === 'Tidak Hadir' ? 'text-red-600' : 'text-gray-500'}`}>
                  Status: {worker.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statuspekerja;

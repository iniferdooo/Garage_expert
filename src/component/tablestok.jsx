import React, { useState } from 'react';

const initialStockData = [
  { id: 1, name: 'Oli Mesin', stock: 50, price: 75000 },
  { id: 2, name: 'Filter Udara', stock: 30, price: 50000 },
  { id: 3, name: 'Busi', stock: 100, price: 20000 },
  { id: 4, name: 'Aki', stock: 20, price: 650000 },
  { id: 5, name: 'Ban', stock: 15, price: 300000 },
  { id: 6, name: 'Kampas Rem', stock: 40, price: 100000 },
  { id: 7, name: 'Shockbreaker', stock: 25, price: 450000 },
  { id: 8, name: 'Lampu Depan', stock: 60, price: 85000 },
  { id: 9, name: 'V-Belt', stock: 45, price: 120000 },
  { id: 10, name: 'Minyak Rem', stock: 70, price: 35000 },
];

const StockTable = () => {
  const [stockData, setStockData] = useState(initialStockData);

  const handleInputChange = (id, field, value) => {
    setStockData(stockData.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Daftar Stok Bengkel</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Nama Barang</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Stok (Unit)</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Harga per Unit (IDR)</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 border-b border-gray-300">{item.name}</td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={item.stock}
                    onChange={(e) => handleInputChange(item.id, 'stock', parseInt(e.target.value, 10))}
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={item.price}
                    onChange={(e) => handleInputChange(item.id, 'price', parseInt(e.target.value, 10))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;

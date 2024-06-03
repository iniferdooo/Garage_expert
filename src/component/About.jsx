// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6" id='About'>
      <div className="flex-1 p-4">
        <img src="https://c8.alamy.com/comp/2F1BE1W/take-a-look-inside-automotive-expert-chris-andrewsapos-amazing-home-garage-the-centerpiece-of-his-shop-is-the-hydraulic-lift-photo-by-ross-haileyfort-worth-star-telegrammctsipa-usa-2F1BE1W.jpg" alt="Garage" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-3xl font-bold mb-4">tentang garage expert</h2>
        <p className="text-lg mb-4">
        Selamat datang di garasi kami! Kami berdedikasi untuk menyediakan layanan dan perbaikan otomotif berkualitas tinggi. Mekanik kami yang berpengalaman menggunakan peralatan dan teknik terkini untuk memastikan kendaraan Anda dalam kondisi prima. Apakah Anda memerlukan perawatan rutin atau perbaikan ekstensif, kami siap membantu Anda.
        </p>
        <p className="text-lg mb-4">
        Misi kami adalah memberikan layanan yang andal, jujur, dan profesional kepada pelanggan kami. Kami memahami pentingnya kendaraan Anda dalam kehidupan sehari-hari, dan kami berupaya meminimalkan waktu henti dan ketidaknyamanan. Kunjungi kami hari ini dan rasakan perbedaan garasi tepercaya!
        </p>
      </div>
    </div>
  );
};

export default About;

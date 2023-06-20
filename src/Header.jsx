import React, { useState, useEffect } from 'react';

function ResponsiveHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  /**Blok ini menggunakan useEffect untuk menangani efek samping terkait perubahan ukuran jendela. Ketika komponen ResponsiveHeader dipasang, event listener untuk event resize ditambahkan, dan fungsi handleResize akan dipanggil saat terjadi perubahan ukuran jendela. Nilai isMobile akan diperbarui berdasarkan ukuran jendela saat ini. Fungsi handleResize juga dipanggil secara langsung setelah event listener ditambahkan untuk menginisialisasi nilai isMobile sesuai dengan ukuran jendela awal.
Pada saat komponen di-unmount (dihapus dari DOM), event listener untuk event resize dihapus dengan menggunakan fungsi kembalian (return) dari useEffect.
Daftar ketergantungan pada array kosong ([]) menunjukkan bahwa efek samping hanya akan dipanggil sekali saat komponen dipasang, dan tidak ada ketergantungan yang mengubah efek samping ini. */

  return (
    <header className={isMobile ? 'mobile-header' : 'desktop-header'}>
      <nav className="flex items-center justify-between bg-gray-700 py-4 px-8">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" className="text-white hover:text-white">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-white">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-white">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-white">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    /**ini mendefinisikan struktur tampilan komponen ResponsiveHeader. Nilai isMobile digunakan untuk menentukan kelas CSS yang akan diterapkan pada elemen header (mobile-header atau desktop-header). Kemudian, ada sebuah nav dengan daftar ul yang berisi tautan menu navigasi. */
  );
}

export default ResponsiveHeader;


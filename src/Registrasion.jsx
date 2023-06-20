import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  /**const [formData, setFormData] = useState({ ... });
Dalam komponen RegistrationForm, kita menggunakan hooks useState untuk membuat keadaan formData dan fungsi setFormData yang akan digunakan untuk mengelola data formulir. Nilai awal dari formData adalah objek dengan properti name, email, dan address yang diinisialisasi dengan string kosong. */
  const [errors, setErrors] = useState({});
/**Selanjutnya, kita menggunakan hooks useState untuk membuat keadaan errors dan fungsi setErrors yang akan digunakan untuk mengelola pesan kesalahan validasi. Nilai awal dari errors adalah objek kosong. */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  /**Fungsi handleInputChange akan dipanggil saat ada perubahan nilai pada input dalam formulir. Fungsi ini akan memperbarui keadaan formData dengan nilai terbaru berdasarkan nama input yang berubah. */

  const handleSubmit = (event) => {
    event.preventDefault();
    /**Fungsi handleSubmit akan dipanggil saat formulir dikirim. Fungsi ini akan melakukan validasi formulir menggunakan fungsi validateForm dan mengirim data ke server jika formulir valid. Jika terdapat kesalahan validasi, fungsi ini akan memperbarui keadaan errors dengan objek yang berisi pesan kesalahan. */

    const validationErrors = validateForm(formData); // Fungsi validasi form
    /**Fungsi validateForm digunakan untuk memvalidasi data formulir. Fungsi ini menerima objek formData sebagai argumen dan memeriksa apakah nama, email, dan alamat sudah diisi dengan benar. Jika terdapat kesalahan, fungsi ini akan mengembalikan objek errors yang berisi pesan kesalahan yang sesuai. */

    if (Object.keys(validationErrors).length === 0) {
      // Kirim data ke server
      console.log(formData);
      alert('Terima kasih, pendaftaran berhasil!');
      setFormData({ name: '', email: '', address: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Nama harus diisi';
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email harus diisi';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Email tidak valid';
    }

    if (formData.address.trim() === '') {
      errors.address = 'Alamat harus diisi';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Validasi email menggunakan regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  /**Fungsi isValidEmail digunakan untuk memvalidasi format email menggunakan ekspresi reguler (regular expression). Fungsi ini menerima alamat email sebagai argumen dan mengembalikan true jika alamat email valid, dan sebaliknya. */

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className=" bg-gray-200 rounded shadow-md p-8 w-96">
        <h2 className="text-2xl text-gray-700 font-bold mb-6">Registration Form</h2>
        <div className="mb-4 flex flex-col">
          <label htmlFor="name" className="text-left text-gray-700 font-medium mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-left text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="address" className="text-left text-gray-700 font-medium mb-2">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.address && <span className="text-red-500">{errors.address}</span>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
    /**Pada bagian return komponen, kita merender elemen HTML yang membentuk formulir pendaftaran. Ketika formulir disubmit, fungsi handleSubmit akan dipanggil. Input dan area teks dalam formulir terhubung dengan keadaan formData untuk menampilkan nilai dan mendeteksi perubahan menggunakan fungsi handleInputChange. Jika terdapat kesalahan validasi, pesan kesalahan akan ditampilkan. */
  );
}

export default RegistrationForm;








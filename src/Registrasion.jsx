import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData); // Fungsi validasi form

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
  );
}

export default RegistrationForm;






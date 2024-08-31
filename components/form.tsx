'use client'
import React, { useState } from 'react';

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    selectedItem: '',
    dateOfPickup: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col py-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          className="border-2 p-3 border-gray-300"
          required
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col py-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="border-2 p-3 border-gray-300"
            placeholder='Your e-mail address*'
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            className="border-2 p-3 border-gray-300"
            placeholder='Your phone number'
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <input
          id="address"
          name="address"
          type="text"
          placeholder='Address'
          value={formData.address}
          onChange={handleChange}
          className="border-2 p-3 border-gray-300"
          required
        />
      </div>
      <div className="flex flex-col py-2">
        <select
          id="selectedItem"
          name="selectedItem"
          value={formData.selectedItem}
          onChange={handleChange}
          className="border-2 p-3 border-gray-300"
          required
        >
          <option value="" disabled>Service</option>
          <option value="Laundry Service">Laundry Service</option>
          <option value="Dry Cleaning">Dry Cleaning</option>
          <option value="Steam Ironing">Steam Ironing</option>
          <option value="Shoe Washing">Shoe Washing</option>
        </select>
      </div>
      <div className="flex flex-col py-2">
        <input
          id="dateOfPickup"
          name="dateOfPickup"
          type="date"
          value={formData.dateOfPickup}
          onChange={handleChange}
          className="border-2 p-3 border-gray-300"
          placeholder='Pick-Up Date'
          required
        />
      </div>
      <div className="flex flex-col py-2">
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder='Your comment'
          className="border-2 p-3 border-gray-300"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Order Now
      </button>
    </form>
  );
};

export default Form;

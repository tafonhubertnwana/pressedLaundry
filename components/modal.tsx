import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    selectedItem: '',
    dateOfPickup: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Form submitted successfully');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="bg-white p-6 shadow-lg w-[700px] max-w-lg h-[700px] relative">
        <button
          onClick={onClose}
          className="absolute text-4xl top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className='py-8 mt-6'>
          <h3>Schedule for PickUp</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col py-2">
          <input
              id="name"
              name="name"
              type="text"
              placeholder='name'
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
              placeholder='address'
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
              <option value="Item 1">Laundry Service</option>
              <option value="Item 2">Dry Cleaning</option>
              <option value="Item 3">Steam Ironing</option>
              <option value="Item 4">Shoe Washing</option>
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
          <div className="flex flex-col py-2" >
            
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
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from 'react';
import toast from 'react-hot-toast';

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

  // Updated handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, selectedOptions } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    // Handle select element
    if (type === 'select-one') {
      const selectedValue = (selectedOptions as HTMLOptionsCollection)[0].value;
      setFormData({
        ...formData,
        [name]: selectedValue,
      });
    } else {
      // Handle input and textarea elements
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(`Hey ${formData.name}, your schedule was sent successfully`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          selectedItem: '',
          dateOfPickup: '',
          comment: '',
        });
        onClose(); // Close the modal after successful submission
      } else {
        const errorText = await response.text();
        toast.error(`Failed to send schedule: ${errorText}`);
      }
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error('An error occurred while sending your schedule.');
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
        <div className='py-8 mt-4'>
          <h3>Schedule for Pick-Up</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col ">
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
          <div className="grid md:grid-cols-2 gap-4 w-full ">
            <div className="flex flex-col ">
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
            <div className="flex flex-col ">
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
          <div className="flex flex-col "> 
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
          <div className="flex flex-col ">
            <select
              id="selectedItem"
              name="selectedItem"
              value={formData.selectedItem}
              onChange={handleChange}
              className="border-2 p-3 border-gray-300"
              required
            >
              <option value="" disabled>Select Service</option>
              <option value="Laundry Service">Laundry Service</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
              <option value="Steam Ironing">Steam Ironing</option>
              <option value="Shoe Washing">Shoe Washing</option>
            </select>
          </div>
          <div className="flex flex-col ">  
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
          <div className="flex flex-col " >
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
            className="inline-flex justify-center p-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

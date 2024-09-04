import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  selectedItem: string;
  dateOfPickup: string;
  comment: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  address,
  selectedItem,
  dateOfPickup,
  comment
}) => {
  return (
    <div>
      <h1>Pick-Up details from {name}!</h1>
      <p>Email: {email}</p>
      <p>tel: {phone}</p>
      <p>Address: {address}</p>
      <p>Service: {selectedItem}</p>
      <p>Pickup: {dateOfPickup}</p>
      <p>Comment: {comment}</p>
      <p>Thank you.</p>
    </div>
  );
}

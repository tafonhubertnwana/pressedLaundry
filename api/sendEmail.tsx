import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, address, selectedItem, dateOfPickup, comment } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com',
      subject: 'New Laundry Pickup',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nSelected Item: ${selectedItem}\nDate of Pickup: ${dateOfPickup}\nComment: ${comment}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

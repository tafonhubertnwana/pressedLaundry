import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    
    // Destructure the body to extract relevant fields
    const { name, email, phone, address, selectedItem, dateOfPickup, comment } = body;

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Contact From <onboarding@resend.dev>',
      to: 'tafonsoftwarespecialist@gmail.com',
      subject: 'Laundry Pick-Up',
      react: EmailTemplate({
        name: name,
        email: email,
        phone: phone,
        address: address,
        selectedItem: selectedItem,
        dateOfPickup: dateOfPickup,
        comment: comment,
      }),
    });

    // Log the response data to understand its structure
    console.log('Response data:', data);

    // Check for successful response based on structure
    if (data && typeof data === 'object') {
      // If no error is thrown and response is an object, assume success
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } else {
      // Handle cases where the response is not in the expected format
      return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'An error occurred while sending the email.' }, { status: 500 });
  }
}

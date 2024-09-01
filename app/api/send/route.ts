import {EmailTemplate} from '@/components/emailTemplate';
import  {NextResponse } from 'next/server'
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST () {
  try{
    const body = await request.json();
    console.log('body', body)
    const { name, email, phone, address, selectedItem, dateOfPickup, comment, message } = body;
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
        comment: comment
      })
    });

    if(data.status === 'success'){
      return NextResponse.json({message: 'Email Successfully Sent!'})
    }
    return NextResponse.json(data)

  } catch (error) {
    console.log('error', error)
  }
}


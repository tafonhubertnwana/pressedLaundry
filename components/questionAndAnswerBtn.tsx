// components/QuestionAndAnswer.tsx

import React from 'react';
import Image from 'next/image';
import img3 from '@/public/assets/img05.jpg';

// Define the type for the FAQ item
interface FAQItem {
  question: string;
  answer: string;
  defaultChecked?: boolean;
}

// Define the props for the QuestionAndAnswer component
interface QuestionAndAnswerProps {
  faqs: FAQItem[];
}

// Reusable FAQ Item Component
const FAQItem: React.FC<FAQItem> = ({ question, answer, defaultChecked = false }) => (
  <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
    <input type="radio" name="my-accordion-3" defaultChecked={defaultChecked} />
    <div className="collapse-title text-xl font-bold">{question}</div>
    <div className="collapse-content">
      <p className="text-xl">{answer}</p>
    </div>
  </div>
);

const QuestionAndAnswer: React.FC<QuestionAndAnswerProps> = ({ faqs }) => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-4 p-8">
          {/* Image Section */}
          <div className="w-full">
            <div className="relative w-full h-full">
              <Image src={img3} alt="FAQ Image" layout="responsive"  />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="col-span-2">
            <h2 className="font-bold text-xl mb-4">Question / Answer</h2>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultChecked={faq.defaultChecked}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Default props for the component (optional)
QuestionAndAnswer.defaultProps = {
  faqs: [
    {
      question: "What if my clothes are heavily stained?",
      answer: "If your clothes are heavily stained, please inform us at the time of pickup. We will assess the stains and use specialized treatments to address them. Note that while we strive to remove all stains, some may be difficult to fully eliminate depending on the fabric and nature of the stain.",
      defaultChecked: true
    },
    {
      question: "How long do you take to return the garments?",
      answer: "The typical turnaround time for returning garments is 1 to 3 business days. For special or bulk orders, or if additional treatment is required, it may take slightly longer. We will provide an estimated return time at the time of pickup and keep you updated on the status of your order."
    },
    {
      question: "How can I pay for the services?",
      answer: "You can pay for our services through various methods, including cash, credit/debit cards, and mobile payment apps. For convenience, you can also set up automatic billing if you have a recurring service. Please check with our customer service team for specific payment options available in your area."
    },
    {
      question: "Does Dry cleaning process remove all the stains?",
      answer: "Dry cleaning is effective at removing many stains, but it may not remove all types. The success of stain removal depends on the type of stain, the fabric, and how long the stain has been set. Our team will use specialized treatments to address stains as effectively as possible, but some stains may be challenging to completely remove."
    }
  ]
};

export default QuestionAndAnswer;

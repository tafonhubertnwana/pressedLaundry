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
  <div className="collapse border-2 group  transition-colors duration-300 bg-white collapse-plus rounded-none  my-4">
    <input type="radio" name="my-accordion-3" defaultChecked={defaultChecked} />
    <div className="collapse-title  font-bold group-hover:text-[#18F0F0]">{question}</div>
    <div className="collapse-content">
      <p className="">{answer}</p>
    </div>
  </div>
);

const QuestionAndAnswer: React.FC<QuestionAndAnswerProps> = ({ faqs }) => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-4 p-8">
          {/* Image Section */}
          <div className="hidden lg:flex w-full">
            <div className="relative w-full h-full">
              <Image src={img3} alt="FAQ Image w-full" layout="responsive"  />
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

 


export default QuestionAndAnswer;

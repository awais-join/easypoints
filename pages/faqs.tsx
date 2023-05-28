import React, {useState} from 'react';
import {NextPage} from 'next';
import Layout from '@/components/views/Layout';
import Container from '@/components/views/Container';
import SearchForm from '@/components/faqs/SearchForm';
import {ArrowSmallLeftIcon} from '@heroicons/react/24/outline';
import QuestionsAccordion from '@/components/faqs/QuestionsAccordion';
import {Disclosure, Transition} from '@headlessui/react';
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import ArrowIcon from 'components/icons/ArrowIcon';

const Faqs: NextPage = () => {
  const [displayfaqs, setDisplayFaqs] = useState(false);
  const [title, setTitle] = useState('');
  const [currentFaq, setCurrentFaq] = useState({});

  const faqDetails = [
    {
      id: 1,
      title: 'General Questions',
      questions: [
        'What is EasyPoints?',
        'How does EasyPoints work?',
        'Why is EasyPoints a better deal?',
        'How much can I save by using EasyPoints?',
        'Is EasyPoints free to use?'
      ],
      answers: [
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      ]
    },
    {
      id: 2,
      title: 'Finding Flights You Can Book With Points',
      questions: [
        'What is EasyPoints 1?',
        'How does EasyPoints work?',
        'Why is EasyPoints a better deal?',
        'How much can I save by using EasyPoints?',
        'Is EasyPoints free to use?'
      ],
      answers: [
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      ]
    },
    {
      id: 3,
      title: 'Finding Flights You Can Book With Points',
      questions: [
        'What is EasyPoints 2?',
        'How does EasyPoints work?',
        'Why is EasyPoints a better deal?',
        'How much can I save by using EasyPoints?',
        'Is EasyPoints free to use?'
      ],
      answers: [
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      ]
    },
    {
      id: 4,
      title: 'Work with a Concierge',
      questions: [
        'What is EasyPoints 3?',
        'How does EasyPoints work?',
        'Why is EasyPoints a better deal?',
        'How much can I save by using EasyPoints?',
        'Is EasyPoints free to use?'
      ],
      answers: [
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      ]
    },
    {
      id: 5,
      title: 'Manage Your Account',
      questions: [
        'What is EasyPoints 4?',
        'How does EasyPoints work?',
        'Why is EasyPoints a better deal?',
        'How much can I save by using EasyPoints?',
        'Is EasyPoints free to use?'
      ],
      answers: [
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      ]
    }
  ];
  const handleClick = (faq: any) => {
    setDisplayFaqs(true);
    setCurrentFaq({
      id: faq.id,
      questions: faq.questions,
      answers: faq.answers
    });
    setTitle(faq.title);
  };

  return (
    <>
      <Layout>
        <div className="max-w-full mx-3 p-6 bg-light rounded-b-3xl">
          <section className="py-20">
            <Container>
              <div className="mx-auto max-w-5xl">
                <div>
                  <h1 className="text-3xl  md:text-6xl font-bold leading-normal md:leading-snug mb-4">
                    How can we help you today?
                  </h1>
                  <h4 className="text-2xl leading-normal font-semibold text-black75 mb-6">
                    Search for anything
                  </h4>
                </div>
                <SearchForm />
              </div>
            </Container>
          </section>
        </div>
        {!displayfaqs && (
          <div className="max-w-full mx-3 xl:mx-auto p-6 lg:p-12 mt-12 mb-4">
            <div className="mx-auto max-w-5xl">
              <ul className="space-y-6 ">
                {faqDetails.map(faq => (
                  <li key={faq.id}>
                    <button
                      onClick={() => handleClick(faq)}
                      className="w-full p-6 rounded-2xl flex items-center gap-4 text-lg md:text-2xl group  hover:bg-light shadow-lg"
                    >
                      <ArrowIcon className="autofocus h-6 w-6 min-w-[1.6rem] text-primary-500 group-hover:text-primary-700" />
                      <span>{faq.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div
          className={`max-w-7xl mx-3 xl:mx-auto p-6 lg:p-12 mb-10 mt-4 ${
            displayfaqs && 'bg-light'
          }  rounded-3xl`}
        >
          <div className="mx-auto max-w-4xl">
            {displayfaqs && (
              <>
                <div className="flex  flex-1 lg:flex-row mb-12">
                  <div className="flex mr-2 items-center">
                    <ArrowSmallLeftIcon
                      className="cursor-pointer"
                      onClick={() => {
                        setDisplayFaqs(false);
                        setCurrentFaq({});
                      }}
                      width={20}
                      height={20}
                    />
                    <h4
                      onClick={() => {
                        setDisplayFaqs(false);
                        setCurrentFaq({});
                      }}
                      className="cursor-pointer text-lg  text-black ml-2 "
                    >
                      Back
                    </h4>
                  </div>

                  <div className="flex-1 items-center">
                    <div className="relative ">
                      <h2 className="text-2xl md:text-4xl text-center font-bold leading-10 tracking-tight">
                        {title}
                      </h2>
                    </div>
                  </div>
                </div>
                <QuestionsAccordion faqs={currentFaq} />
              </>
            )}
            <div className="mt-8 lg:mt-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold leading-10 mb-6">
                Still have a question?
              </h2>
              <Link
                href="#"
                className="inline-flex gap-2 items-center justify-center rounded-full shadow-sm border bg-white px-10 py-5 text-lg font-bold text-black hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faqs;

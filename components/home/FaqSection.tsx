import React from "react";
import Container from "../views/Container";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const faqs = [
  {
    question: "What is EasyPoints?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How does EasyPoints work?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why is EasyPoints a better deal?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How much can I save by using EasyPoints?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Is EasyPoints free to use?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

const FaqSection = () => {
  return (
    <section className="py-8 lg:py-12">
      <Container>
        <div className="max-w-7xl mx-auto p-6 lg:p-12 bg-light rounded-4xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl text-center font-bold leading-10 tracking-tight">
              Have any questions?
            </h2>
            <dl className="mt-8 lg:mt-10 space-y-6">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="p-6 bg-white border border-lightGray rounded-3xl"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span
                            title={faq.question}
                            className="text-xl line-clamp-1 font-semibold leading-7"
                          >
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
            <div className="mt-8 lg:mt-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold leading-10 mb-6">
                Still have a question?
              </h2>
              <Link
                href="#"
                className="inline-flex gap-2 items-center justify-center rounded-full shadow-sm border bg-white px-10 py-5 text-lg font-bold text-black hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                <span>Visit help center</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;

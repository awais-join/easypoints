import {useState} from 'react';
import {Disclosure, Transition} from '@headlessui/react';
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/react/24/outline';

const QuestionsAccordion = (props: any) => {
  console.log(props.faqs);
  const questions = props.faqs.questions;
  const answers = props.faqs.answers;
  let index = 0;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <dl className="mt-8 lg:mt-10 space-y-6 mb-24 ">
      {questions.map((question: any, index: number) => (
        <Disclosure
          as="div"
          key={question}
          className="p-6 bg-white border border-lightGray rounded-3xl"
        >
          {({open}) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                  <span
                    title={question}
                    className="text-xl line-clamp-1 font-semibold leading-7"
                  >
                    {question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
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
                    {answers[index]}
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
};

export default QuestionsAccordion;

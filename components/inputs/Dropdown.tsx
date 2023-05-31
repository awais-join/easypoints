import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({title, children}) => {
  return (
    <Popover>
      {({open}) => (
        <>
          <Popover.Button
            className={`relative w-full flex items-center gap-2 cursor-pointer rounded-full bg-white py-2 pl-4 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none sm:text-sm sm:leading-6 ${
              open && 'ring-2 ring-primary-500'
            }`}
          >
            <span className="block truncate text-base">{title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className={`h-6 w-6 text-black75 transition-all duration-300 ${
                  open && 'rotate-180'
                }`}
              />
            </span>
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-10 mt-1 space-y-2 rounded-2xl bg-white p-6 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Dropdown;

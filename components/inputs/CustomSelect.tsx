import {Fragment, useState,useEffect,Dispatch} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface ListItem {
  name: string;
  value?: string;
}

interface CustomSelectProps {
  list: ListItem[];
  placeholder?: string;
  selected: ListItem;
  setSelected:Dispatch<SetStateAction<ListItem>>
}

export default function CustomSelect({list, placeholder , selected, setSelected}: CustomSelectProps) {
  // const [selected, setSelected] = useState<ListItem | null>(
  //   placeholder ? null : list[0]
  // );

  useEffect(() => {
    //setSelected(placeholder ? null : list[0])
  }, [selected])
  

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({open}) => (
        <>
          <div>
            <Listbox.Button
              className={`w-full flex cursor-pointer rounded-full bg-white py-2 pl-4 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none sm:text-sm sm:leading-6 ${
                open && 'ring-2 ring-primary-500'
              }`}
            >
              <span className="block truncate text-base">
                {selected ? selected.name : placeholder}
              </span>
              <span className="pointer-events-none flex items-center">
                <ChevronDownIcon
                  className={`h-6 w-6 text-black75 transition-all duration-300 ${
                    open && 'rotate-180'
                  } `}
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 space-y-2 max-h-60 md:min-w-[15rem] overflow-auto rounded-2xl bg-white p-3 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map(item => (
                  <Listbox.Option
                    key={item.name}
                    className={({active, selected}) =>
                      classNames(
                        active
                          ? 'bg-primary-500/10 border-primary-500 text-black'
                          : 'text-black border-transparent',
                        'relative cursor-default select-none p-2 rounded-lg border-2',
                        selected ?
                          'bg-primary-500/10 border-primary-500 text-black' : ''
                      )
                    }
                    value={item}
                  >
                    <span className="block truncate font-medium">
                      {item.name}
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

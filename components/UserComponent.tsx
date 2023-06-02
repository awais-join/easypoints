import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import Image from 'next/image';
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon
} from '@heroicons/react/20/solid';
import SettingsIcon from './icons/SettingsIcon';
import Link from 'next/link';
import FaceIcon from './icons/FaceIcon';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const UserComponent = () => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex items-center gap-4">
          <span className="flex items-center justify-center h-14 w-14 min-w-[3.5rem] bg-primary-500 rounded-full">
            <span className="text-white font-medium text-2xl">X</span>
            {/* <Image
              fill
              className="rounded-full"
              src="/assets/user.jpg"
              alt=".."
            /> */}
          </span>
          <div className="text-left">
            <div className="font-medium text-black75 text-sm mb-1">
              Active Plan
            </div>
            <h6 className="font-medium text-black text-base line-clamp-1">
              Xavier Klatt
            </h6>
          </div>
          <span className="ms-6">
            <ChevronDownIcon className="h-6 w-6 text-black75" />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({active}) => (
              <Link
                href="#"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'flex items-center gap-2 px-4 py-2 font-semibold text-base text-black'
                )}
              >
                <SettingsIcon className="w-5 min-w-[1.25rem] h-5 text-gray-400" />
                <span>Account settings</span>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <Link
                href="#"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'flex items-center gap-2 px-4 py-2 font-semibold text-base text-black'
                )}
              >
                <FaceIcon className="w-5 min-w-[1.25rem] h-5 text-gray-400" />
                <span>Get in Touch</span>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <Link
                href="#"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'flex items-center gap-2 px-4 py-2 font-semibold text-base text-black'
                )}
              >
                <ArrowLeftOnRectangleIcon className="w-5 min-w-[1.25rem] h-5 text-gray-400" />
                <span>Log out</span>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserComponent;

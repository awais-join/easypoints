import {Fragment, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Dialog, Popover, Transition} from '@headlessui/react';
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Container from './Container';
import UserComponent from '../UserComponent';

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Questions?', href: '/faqs'},
  {name: 'Our services & pricing', href: '/pricing'}
];

const morePages = [
  {name: 'About us', href: '#'},
  {name: 'Careers', href: 'careers'},
  {name: 'Support', href: '#'},
  {name: 'Press', href: '#'},
  {name: 'Blog', href: '#'}
];

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-light rounded-t-3xl m-3 mb-0">
      <Container>
        <nav className="w-full flex items-center justify-between py-4">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="block w-52 h-16 relative">
              <Image fill src="/assets/logo.png" alt="logo" />
            </span>
          </Link>
          <div className="flex xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden xl:flex xl:gap-x-10 items-center">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  router.pathname === item.href && 'active'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 nav-link">
                More Pages
                <ChevronDownIcon
                  className="h-4 w-4 flex-none"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                  {morePages.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 nav-link hover:bg-primary-500/5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>
            {router.pathname !== '/flight-search' ? (
              <div className="flex gap-4">
                <Link
                  href="/sign-up"
                  className="rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Sign up
                </Link>
                <Link
                  href="/sign-in"
                  className="rounded-full bg-light px-8 py-4 text-base font-bold text-primary-500 border border-primary-500 shadow-sm hover:bg-primary-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Login
                </Link>
              </div>
            ) : (
              <UserComponent />
            )}
          </div>
        </nav>
      </Container>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="block w-52 h-16 relative">
                <Image fill src="/assets/logo.png" alt="logo" />
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 hover:bg-primary-500/5 nav-link ${
                      router.pathname === item.href && 'active bg-primary-500/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Popover className="relative">
                  <Popover.Button className="w-full flex items-center gap-x-1 -mx-3 rounded-lg px-3 py-2 hover:bg-primary-500/5 nav-link">
                    More Pages
                    <ChevronDownIcon
                      className="h-4 w-4 flex-none"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                      {morePages.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 nav-link hover:bg-primary-500/5"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </div>
              <div className="pb-6 flex gap-4">
                <Link
                  href="/sign-up"
                  className="rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Sign up
                </Link>
                <Link
                  href="/sign-in"
                  className="rounded-full bg-light px-8 py-4 text-base font-bold text-primary-500 border border-primary-500 shadow-sm hover:bg-primary-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Login
                </Link>
              </div>
              <div className="pb-6">
                <UserComponent />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;

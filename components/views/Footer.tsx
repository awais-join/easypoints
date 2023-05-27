import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  //   { name: "Home", href: "/" },
  { name: "Questions?", href: "/questions" },
  { name: "Our services & pricing", href: "/services" },
  { name: "Become an affiliate", href: "/affiliate" },
  { name: "Careers", href: "/careers" },
];

const termsLinks = [
  { name: "Earn more points", href: "/earn" },
  { name: "Terms of use", href: "/terms" },
  { name: "Privacy policy", href: "/privacy-policy" },
];

const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 300 300">
        <g
          style={{
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "none",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "currentColor",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <path
            d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "currentColor",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-primary-900 text-white py-10 rounded-t-[2.5rem]">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1 border-b xl:border-b-0 xl:border-r border-borderLight md:pt-12 pb-12 xl:pr-12">
            <div className="space-y-6">
              <Link href="/" className="block">
                <span className="block w-40 h-14 relative">
                  <Image fill src="/assets/logo-2.png" alt="dark-logo" />
                </span>
              </Link>
              <p className="text-lg leading-9">
                we find the lowest cost of a flight in terms of airline miles
                and points
              </p>
              <div>
                <h4 className="font-semibold text-2xl mb-6">
                  subscribe to newslatter
                </h4>
                <form className="relative">
                  <input
                    className="w-full bg-primary-900 pl-6 pr-36 py-4 rounded-full text-white placeholder:text-gray-100"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email..."
                    required
                  />
                  <span className="absolute top-0 right-0">
                    <button
                      type="submit"
                      className="rounded-full bg-primary-500 px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                    >
                      Subscribe
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
          {/* == */}
          <div className="xl:col-span-2 md:pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:pl-6">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-lg hover:text-primary-400 ${
                        router.pathname === item.href
                          ? "active text-primary-400"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {termsLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-lg hover:text-primary-400 ${
                        router.pathname === item.href
                          ? "active text-primary-400"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:pl-6 border-t border-borderLight mt-8 pt-8">
              <h4 className="font-semibold text-2xl md:pt-8">
                Follow us on social media
              </h4>
              <ul className="flex gap-6 md:pt-8">
                {social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded border border-borderLight text-primary-400 hover:bg-primary-500 hover:text-white"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-borderLight pt-8 text-center">
          <span>© 2023 easypoints, Inc. | All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

// import { Fragment, useState } from "react";
// import { Logo } from "@/assets/images";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Transition,
// } from "@headlessui/react";
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
// } from "@heroicons/react/20/solid";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "#",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers’ data will be safe and secure",
//     href: "#",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools",
//     href: "#",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Automations",
//     description: "Build strategic funnels that will convert",
//     href: "#",
//     icon: ArrowPathIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white">
//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
//         aria-label="Global"
//       >
//         <div className="flex lg:flex-1">
//           <a href="#" className="">
//             <span className="sr-only">Your Company</span>
//             <Image className="h-[110px] w-[150px]" src={Logo} alt=""></Image>
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <PopoverGroup className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//               Product
//               <ChevronDownIcon
//                 className="h-5 w-5 flex-none text-gray-400"
//                 aria-hidden="true"
//               />
//             </PopoverButton>

//             <Transition
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-4">
//                   {products.map((item) => (
//                     <div
//                       key={item.name}
//                       className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//                     >
//                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                         <item.icon
//                           className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
//                           aria-hidden="true"
//                         />
//                       </div>
//                       <div className="flex-auto">
//                         <a
//                           href={item.href}
//                           className="block font-semibold text-gray-900"
//                         >
//                           {item.name}
//                           <span className="absolute inset-0" />
//                         </a>
//                         <p className="mt-1 text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                   {callsToAction.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                     >
//                       <item.icon
//                         className="h-5 w-5 flex-none text-gray-400"
//                         aria-hidden="true"
//                       />
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </PopoverPanel>
//             </Transition>
//           </Popover>

//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Services
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Menu
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             About Us
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Contact Us
//           </a>
//         </PopoverGroup>
//       </nav>
//       <Dialog
//         className="lg:hidden"
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//       >
//         <div className="fixed inset-0 z-10" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img className="h-8 w-auto p-4" src={Logo} alt="logo" />
//             </a>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                         Product
//                         <ChevronDownIcon
//                           className={classNames(
//                             open ? "rotate-180" : "",
//                             "h-5 w-5 flex-none"
//                           )}
//                           aria-hidden="true"
//                         />
//                       </DisclosureButton>
//                       <DisclosurePanel className="mt-2 space-y-2">
//                         {[...products, ...callsToAction].map((item) => (
//                           <DisclosureButton
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </DisclosureButton>
//                         ))}
//                       </DisclosurePanel>
//                     </>
//                   )}
//                 </Disclosure>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Services
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Menu
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   About Us
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   );
// }
import Link from "next/link";
import React from "react";
import { Logo } from "@/assets/images";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row justify-around items-center w-full h-20 py-3 shadow-bottom max-sm:justify-between pl-2 pr-4">
      <div>
        <Image className="h-[120px] w-[170px]" src={Logo} alt=""></Image>
      </div>
      <div className="max-sm:hidden ">
        <ul className="flex gap-10 list-none justify-center items-center font-merriweather">
          <li>
            <Link href="/" className="hover:text-red transition-colors duration-500 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-red transition-colors duration-500 ease-in-out">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-red transition-colors duration-500 ease-in-out">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-red transition-colors duration-500 ease-in-out">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-sm:hidden m-8">
        <a href="#service"><button className="btn-primary">Book Now</button></a>
      </div>
      <div className="sm:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;

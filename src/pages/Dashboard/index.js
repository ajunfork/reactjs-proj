import {
  AnnotationIcon,
  ArrowRightIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CheckCircleIcon,
  PaperClipIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import {
  BriefcaseIcon,
  CalendarIcon,
  CashIcon,
  ChartPieIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  CogIcon,
  HomeIcon,
  InboxInIcon,
  InformationCircleIcon,
  LockOpenIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  SparklesIcon,
  SupportIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Disclosure } from "@headlessui/react";
import HeaderImage from "../../assets/images/Header-image.png";
import Logo from "../../assets/images/Logo.png";
import Play from "../../assets/images/play.png";
import React from "react";
import RightCarat1 from "../../assets/images/right-caret-1.png";
import RightCarat2 from "../../assets/images/right-carat-2.png";
import RightCarat3 from "../../assets/images/right-carat-3.png";
import Styles from "./style.module.scss";
import barChart from "../../assets/images/chart-last5th-left.png";
import customerImage1 from "../../assets/images/customer-image1.png";
import customerImage2 from "../../assets/images/customer-image2.png";
import customerImage3 from "../../assets/images/customer-image3.png";
import customerImage4 from "../../assets/images/customer-image4.png";
import customerImage5 from "../../assets/images/customer-image5.png";
import decrease from "../../assets/images/decrease.svg";
import increase from "../../assets/images/increase.svg";
import lineChart from "../../assets/images/line-chart-last5th-right.png";
import lineChart1 from "../../assets/images/line-chart1.png";
import lineChart2 from "../../assets/images/line-chart2.png";
import lineChart3 from "../../assets/images/line-chart3.png";
import notApplicable from "../../assets/images/not-applicable.svg";
import pieChart from "../../assets/images/pie-chart.png";

const Dashboard = () => {
  return (
    <div className={``}>
      <Example />
    </div>
  );
};

export default Dashboard;

const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    current: true,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "E-Commerce",
    href: "#",
    icon: ShoppingCartIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Community",
    href: "#",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Finance",
    href: "#",
    icon: CashIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Job Board",
    href: "#",
    icon: BriefcaseIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Tasks",
    href: "#",
    icon: ClipboardListIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  { name: "Messages", href: "#", icon: ChatAltIcon, current: false, count: 4 },
  { name: "Inbox", href: "#", icon: InboxInIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Campaigns", href: "#", icon: SparklesIcon, current: false },
  {
    name: "Settings",
    href: "#",
    icon: CogIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Utility",
    href: "#",
    icon: QuestionMarkCircleIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const secondaryNavigation = [
  {
    name: "Authentication",
    href: "#",
    icon: LockOpenIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Onboarding",
    href: "#",
    icon: SupportIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Components",
    href: "#",
    icon: ChartPieIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <img className='h-8 w-auto' src={Logo} alt='mosaic' />
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='px-2 space-y-1'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:top-9 md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
            <div className='flex items-center h-16 flex-shrink-0 px-4 bg-gray-900'>
              <img className='h-8 w-auto' src={Logo} alt='mosaic logo' />
            </div>
            <div className='flex-1 flex flex-col overflow-y-auto'>
              <nav className='flex-1 px-2 py-4 space-y-1'>
                {navigation.map(item =>
                  !item.children ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          className={classNames(
                            item.current
                              ? "bg-blue"
                              : "bg-[#6366F1] group-hover:bg-gray-200",
                            "ml-3 inline-block py-1 px-2 text-xs font-medium rounded-md"
                          )}
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  ) : (
                    <Disclosure as='div' key={item.name} className='space-y-1'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            )}
                          >
                            <item.icon
                              className='mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                              aria-hidden='true'
                            />
                            <span className='flex-1'>{item.name}</span>
                            <svg
                              className={classNames(
                                open
                                  ? "text-gray-400 rotate-90"
                                  : "text-gray-300",
                                "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                              )}
                              viewBox='0 0 20 20'
                              aria-hidden='true'
                            >
                              <path
                                d='M6 6L14 10L6 14V6Z'
                                fill='currentColor'
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className='space-y-1'>
                            {item.children.map(subItem => (
                              <Disclosure.Button
                                key={subItem.name}
                                as='a'
                                href={subItem.href}
                                className='group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium  rounded-md text-gray-300 hover:bg-gray-700 hover:text-white'
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>

              <div className='space-y-1'>
                <h3
                  className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
                  id='projects-headline'
                >
                  Projects
                </h3>
                <nav className='flex-1 px-2 py-4 space-y-1'>
                  {secondaryNavigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          className={classNames(
                            item.current
                              ? "bg-white"
                              : "bg-gray-100 group-hover:bg-gray-200",
                            "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                          )}
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='md:pl-64 flex flex-col relative top-9'>
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex-1 px-4 flex justify-end'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>Search</span>
                  <SearchIcon className='h-6 w-6' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>Your chats</span>
                  <ChatAlt2Icon className='h-6 w-6' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>Information</span>
                  <InformationCircleIcon
                    className='h-6 w-6'
                    aria-hidden='true'
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src={Play}
                        alt=''
                      />{" "}
                      Acne Inc.{" "}
                      <ChevronDownIcon className='h-6 w-6' aria-hidden='true' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map(item => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className='flex-1 bg-[#F1F5F9]'>
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6'>
                {/* Replace with your content */}
                {/* Header section starts here */}
                <div className='relative bg-indigo-800'>
                  <div className='absolute inset-0'>
                    <img
                      className='w-full h-full object-cover'
                      src={HeaderImage}
                      alt=''
                    />
                    <div
                      className='absolute inset-0 bg-indigo-800 mix-blend-multiply'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-5 sm:px-6 lg:px-8'>
                    <h1 className='text-[30px] font-extrabold tracking-tight text-white sm:text-[30px] lg:text-[30px] leading-10'>
                      Good afternoon, Acne Inc. 👋
                    </h1>
                    <p className='mt-6 text-xl text-indigo-100 max-w-3xl'>
                      Here is what’s happening with your projects today:
                    </p>
                  </div>
                </div>
                {/* Header section ends here */}
                {/* Stats starts here */}
                <div>
                  <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {stats.map(item => (
                      <div
                        key={item.id}
                        className='relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'
                      >
                        <dt className={`flex flex-col gap-2`}>
                          <div className=''>
                            <img
                              className='h-6 w-6 text-white'
                              aria-hidden='true'
                              src={item.icon}
                              alt=''
                            />
                          </div>
                          <p className='text-xl font-medium text-gray-900 truncate'>
                            {item.name}
                          </p>
                          <p className='text-sm font-medium text-gray-500 truncate'>
                            {item.title}
                          </p>
                        </dt>
                        <dd className='pb-6 flex items-baseline sm:pb-7'>
                          <p className='text-3xl leading-10 font-semibold text-gray-900'>
                            {item.stat}
                          </p>

                          <p
                            className={`${classNames2(
                              item.changeType === "increase"
                                ? "text-green-600 py-1 px-2 bg-green-100"
                                : "text-red-600 py-1 px-2 bg-red-100",
                              "ml-2 flex items-baseline text-sm font-semibold"
                            )} relative -top-4 left-2`}
                          >
                            {item.changeType === "increase" ? (
                              <ArrowSmUpIcon
                                className='self-center flex-shrink-0 h-5 w-5 text-green-500 bg-green-100'
                                aria-hidden='true'
                              />
                            ) : (
                              <ArrowSmDownIcon
                                className='self-center flex-shrink-0 h-5 w-5 text-red-500 bg-red-100'
                                aria-hidden='true'
                              />
                            )}

                            <span className='sr-only'>
                              {item.changeType === "increase"
                                ? "Increased"
                                : "Decreased"}{" "}
                              by
                            </span>
                            {item.change}
                          </p>
                        </dd>
                        <img src={item.lineChart} alt='' />
                      </div>
                    ))}
                  </dl>
                </div>
                {/* Stats ends here */}
                {/* Last 5th table starts here */}
                <div className='flex justify-between gap-4 w-full'>
                  <div className='px-4 sm:px-6 lg:px-8 w-[50%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Direct VS Indirect<div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Direct VS Indirect
                        </h1>
                      </div>
                    </div>
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          {/* <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'> */}
                          {/* <table className='min-w-full divide-y divide-gray-300'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Email
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Spent
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Country
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.email}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.spent}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.country}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table> */}
                          {/* </div> */}
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Direct VS Indirect
                              </h1>
                            </div>
                          </div>
                          <div className={`flex flex-wrap`}>
                            <h2>$1.7K Direct</h2>
                            <h2>$2.4K Indirect</h2>
                          </div>
                          <div>
                            <img
                              src={barChart}
                              alt='research shows huge growth in business'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 sm:px-6 lg:px-8 w-[50%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          AVG Order Value
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          {/* <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'> */}
                          {/* <table className='min-w-full divide-y divide-gray-300'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Email
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Spent
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Country
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.email}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.spent}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.country}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table> */}
                          {/* </div> */}
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                AVG Order Value
                              </h1>
                            </div>
                          </div>
                          <div className={`flex flex-wrap`}>
                            <h2>$1.7K Direct</h2>
                            <h2>$2.4K Indirect</h2>
                          </div>
                          <div>
                            <img
                              src={lineChart}
                              alt='research shows huge growth in business'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Last 5th table ends here */}
                {/* Last 4th table starts here */}
                <div className='flex justify-between gap-4'>
                  <div className='px-4 sm:px-6 lg:px-8 w-[33%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Top Countries
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='min-w-full py-2 align-middle md:px-6 lg:px-8 flex flex-col justify-between'>
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Top Countries
                              </h1>
                            </div>
                          </div>
                          <img src={pieChart} alt='' />
                          <div className={`flex flex-row gap-4`}>
                            <button
                              type='button'
                              className='inline-flex items-center px-3 py-2 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-800 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              <CheckCircleIcon
                                className='-ml-0.5 mr-2 h-4 w-4'
                                aria-hidden='true'
                              />
                              United States
                            </button>
                            <button
                              type='button'
                              className='inline-flex items-center px-3 py-2 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-800 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              <CheckCircleIcon
                                className='-ml-0.5 mr-2 h-4 w-4'
                                aria-hidden='true'
                              />
                              Italy
                            </button>
                            <button
                              type='button'
                              className='inline-flex items-center px-3 py-2 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-800 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              <CheckCircleIcon
                                className='-ml-0.5 mr-2 h-4 w-4'
                                aria-hidden='true'
                              />
                              Other
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 sm:px-6 lg:px-8 w-[66%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Top Channels
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Top Channels
                              </h1>
                            </div>
                          </div>
                          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Source
                                  </th>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Visitors
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Revenues
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Sales
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Conversions
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people4.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.source}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.visitors}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.revenues}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.sales}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.conversions}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Last 4th table ends here */}
                {/* Last 3rd table starts here */}
                <div className='flex justify-between gap-4 w-full'>
                  <div className='px-4 sm:px-6 lg:px-8 w-[50%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Sales Over Time ( all stores )
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Sales Over Time ( all stores )
                              </h1>
                            </div>
                          </div>
                          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Email
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Spent
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Country
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.email}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.spent}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.country}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 sm:px-6 lg:px-8 w-[50%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Sales VS Refunds
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Sales VS Refunds
                              </h1>
                            </div>
                          </div>
                          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Email
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Spent
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Country
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.email}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.spent}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.country}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Last 3rd table ends here */}
                {/* Last 2nd table starts here */}
                <div className='flex justify-between gap-4 w-full'>
                  <div className='px-4 sm:px-6 lg:px-8 w-[50%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Customers
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Customers
                              </h1>
                            </div>
                          </div>
                          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                              {/* <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Email
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Spent
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Country
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead> */}
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.email}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.spent}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.country}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 sm:px-6 lg:px-8 w-[50%] bg-white'>
                    {/* <div className='sm:flex sm:items-center'>
                      <div className='sm:flex-auto'>
                        <h1 className='text-xl font-semibold text-gray-900'>
                          Reason for Refunds
                        </h1>
                      </div>
                    </div> */}
                    <div className='mt-8 flex flex-col'>
                      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                          <div className='sm:flex sm:items-center'>
                            <div className='sm:flex-auto'>
                              <h1 className='text-xl font-semibold text-gray-900'>
                                Reason for Refunds
                              </h1>
                            </div>
                          </div>
                          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Email
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Spent
                                  </th>
                                  <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                  >
                                    Country
                                  </th>
                                  <th
                                    scope='col'
                                    className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                                  >
                                    <span className='sr-only'>Edit</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='divide-y divide-gray-200 bg-white'>
                                {people.map(person => (
                                  <tr key={person.email}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                      <div className='flex items-center'>
                                        <div className='h-10 w-10 flex-shrink-0'>
                                          {person.image}
                                        </div>
                                        <div className='ml-4'>
                                          <div className='font-medium text-gray-900'>
                                            {person.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-900'>
                                        {person.email}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      <div className='text-gray-500'>
                                        {person.spent}
                                      </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                      {person.role}
                                    </td>
                                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                      {person.country}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Last 2nd table ends here */}
                <div className='flex justify-between gap-4 w-full'>
                  {/* Activity list (smallest breakpoint only) */}
                  <div className='shadow sm:hidden w-[50%] bg-white'>
                    <div className='px-4 sm:px-6 lg:px-8'>
                      <div className='sm:flex sm:items-center'>
                        <div className='sm:flex-auto'>
                          <h1 className='text-xl font-semibold text-gray-900'>
                            Recent Activity
                          </h1>
                        </div>
                      </div>
                    </div>
                    <ul
                      role='list'
                      className='mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden'
                    >
                      {transactions.map(transaction => (
                        <li key={transaction.id}>
                          <a
                            href={transaction.href}
                            className='block px-4 py-4 bg-white hover:bg-gray-50'
                          >
                            <span className='flex items-center space-x-4'>
                              <span className='flex-1 flex space-x-2 truncate'>
                                {transaction.status !== "not applicable" ? (
                                  transaction.status === "increase" ? (
                                    <img src={increase} alt='' />
                                  ) : (
                                    <img src={decrease} alt='' />
                                  )
                                ) : (
                                  <img src={notApplicable} alt='' />
                                )}
                                <span className='flex flex-col text-gray-500 text-sm truncate'>
                                  <span className='truncate'>
                                    {transaction.name}
                                  </span>
                                  <span>
                                    <span className='text-[#6366F1] font-medium'>
                                      {transaction.view}
                                      <ArrowRightIcon
                                        className={`inline w-4`}
                                      />
                                    </span>
                                  </span>
                                  <time dateTime={transaction.datetime}>
                                    {transaction.date}
                                  </time>
                                </span>
                              </span>
                              <ChevronRightIcon
                                className='flex-shrink-0 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activity table (small breakpoint and up) */}
                  <div className='hidden sm:block w-[50%] bg-white'>
                    <div className='px-4 sm:px-6 lg:px-8'>
                      <div className='sm:flex sm:items-center'>
                        <div className='sm:flex-auto'>
                          <h1 className='text-xl font-semibold text-gray-900'>
                            Recent Activity
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='max-w-6xl mx-auto'>
                      <div className='flex flex-col mt-2'>
                        <div className='align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg'>
                          <table className='min-w-full divide-y divide-gray-200'>
                            <thead>
                              <tr>
                                <th
                                  className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider col-span-2'
                                  scope='col'
                                >
                                  Today
                                </th>

                                {/* <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th> */}
                              </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-100'>
                              {transactions.map(transaction => (
                                <tr key={transaction.id} className='bg-white'>
                                  <td className='max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                    <div className='flex'>
                                      <a
                                        href={transaction.href}
                                        className='group inline-flex space-x-2 truncate text-sm'
                                      >
                                        {transaction.status !==
                                        "not applicable" ? (
                                          transaction.status === "increase" ? (
                                            <img src={increase} alt='' />
                                          ) : (
                                            <img src={decrease} alt='' />
                                          )
                                        ) : (
                                          <img src={notApplicable} alt='' />
                                        )}
                                        <p className='text-gray-500 truncate group-hover:text-gray-900'>
                                          {transaction.name}
                                        </p>
                                      </a>
                                    </div>
                                  </td>
                                  <td className='px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500'>
                                    <span className='text-[#6366F1] font-medium'>
                                      {transaction.view}
                                      <ArrowRightIcon
                                        className={`inline w-4`}
                                      />{" "}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity list (smallest breakpoint only) */}
                  <div className='shadow sm:hidden w-[50%] bg-white'>
                    <div className='px-4 sm:px-6 lg:px-8'>
                      <div className='sm:flex sm:items-center'>
                        <div className='sm:flex-auto'>
                          <h1 className='text-xl font-semibold text-gray-900'>
                            Income/Expenses
                          </h1>
                        </div>
                      </div>
                    </div>
                    <ul
                      role='list'
                      className='mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden'
                    >
                      {transactionss.map(transaction => (
                        <li key={transaction.id}>
                          <a
                            href={transaction.href}
                            className='block px-4 py-4 bg-white hover:bg-gray-50'
                          >
                            <span className='flex items-center space-x-4'>
                              <span className='flex-1 flex space-x-2 truncate'>
                                {transaction.status !== "not applicable" ? (
                                  transaction.status === "increase" ? (
                                    <img src={increase} alt='' />
                                  ) : (
                                    <img src={decrease} alt='' />
                                  )
                                ) : (
                                  <img src={notApplicable} alt='' />
                                )}
                                <span className='flex flex-col text-gray-500 text-sm truncate'>
                                  <span className='truncate'>
                                    {transaction.name}
                                  </span>
                                  <span>
                                    <span className='text-gray-900 font-medium'>
                                      {transaction.amount}
                                    </span>
                                  </span>
                                  <time dateTime={transaction.datetime}>
                                    {transaction.date}
                                  </time>
                                </span>
                              </span>
                              <ChevronRightIcon
                                className='flex-shrink-0 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activity table (small breakpoint and up) */}
                  <div className='hidden sm:block w-[50%] bg-white'>
                    <div className='px-4 sm:px-6 lg:px-8'>
                      <div className='sm:flex sm:items-center'>
                        <div className='sm:flex-auto'>
                          <h1 className='text-xl font-semibold text-gray-900'>
                            Income/Expenses
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='max-w-6xl mx-auto'>
                      <div className='flex flex-col mt-2'>
                        <div className='align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg'>
                          <table className='min-w-full divide-y divide-gray-200'>
                            <thead>
                              <tr>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                  Today
                                </th>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                              {transactionss.map(transaction => (
                                <tr key={transaction.id} className='bg-white'>
                                  <td className='max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                    <div className='flex'>
                                      <a
                                        href={transaction.href}
                                        className='group inline-flex space-x-2 truncate text-sm'
                                      >
                                        {transaction.status !==
                                        "not applicable" ? (
                                          transaction.status === "increase" ? (
                                            <img src={increase} alt='' />
                                          ) : (
                                            <img src={decrease} alt='' />
                                          )
                                        ) : (
                                          <img src={notApplicable} alt='' />
                                        )}
                                        <p className='text-gray-500 truncate group-hover:text-gray-900'>
                                          {transaction.name}
                                        </p>
                                      </a>
                                    </div>
                                  </td>
                                  <td className='px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500'>
                                    {transaction.status !== "not applicable" ? (
                                      transaction.status === "increase" ? (
                                        <span className='text-green-500 font-medium'>
                                          ${transaction.amount}
                                        </span>
                                      ) : (
                                        <span className='text-gray-900 font-medium'>
                                          ${transaction.amount}
                                        </span>
                                      )
                                    ) : (
                                      <span className='text-gray-900 font-medium line-through'>
                                        ${transaction.amount}
                                      </span>
                                    )}{" "}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const stats = [
  {
    id: 1,
    name: "Acne Plus",
    title: "SALES",
    stat: "$24.780",
    icon: RightCarat1,
    change: "49%",
    changeType: "increase",
    lineChart: lineChart1,
  },
  {
    id: 2,
    name: "Acne Advanced",
    title: "SALES",
    stat: "$17.489",
    icon: RightCarat2,
    change: "14%",
    changeType: "decrease",
    lineChart: lineChart2,
  },
  {
    id: 3,
    name: "Acne Professional",
    title: "SALES",
    stat: "$9.962",
    icon: RightCarat3,
    change: "29%",
    changeType: "increase",
    lineChart: lineChart3,
  },
];

function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}

const transactions = [
  {
    id: 1,
    name: "Nick Mark mentioned Sara Smith in a new post ",
    href: "#",
    view: "view",
    status: "success",
  },
  {
    id: 2,
    name: "The post Post Name was removed by Nick Mark",
    href: "#",
    view: "view",
    status: "success",
  },
  {
    id: 3,
    name: "Patrick Sullivan published a new post ",
    href: "#",
    view: "view",
    status: "success",
  },
  {
    id: 4,
    name: "YESTERDAY",
    href: "#",
    view: "view",
    status: "success",
  },
  {
    id: 5,
    name: "240+ users have subscribed to Newsletter #1 ",
    href: "#",
    view: "view",
    status: "success",
  },
  {
    id: 6,
    name: "The post Post Name was suspended by Nick Mark",
    href: "#",
    view: "view",
    status: "success",
  },
  // More transactions...
];

const transactionss = [
  {
    id: 1,
    name: "Qonto billing",
    href: "#",
    amount: "-$49.88",
    status: "decrease",
  },
  {
    id: 2,
    name: "App.com Market Ltd 70 Wilson St London",
    href: "#",
    amount: "+249.88",
    status: "increase",
  },
  {
    id: 3,
    name: "Notion Labs Inc",
    href: "#",
    amount: "+99.99",
    status: "increase",
  },
  {
    id: 4,
    name: "Market Cap Ltd ",
    href: "#",
    amount: "+1.200,88",
    status: "increase",
  },
  {
    id: 5,
    name: "App.com Market Ltd 70 Wilson St London",
    href: "#",
    amount: "+̶99.99",
    status: "not applicable",
  },
  {
    id: 6,
    name: "Cruip.com Market Ltd 70 Wilson St London",
    href: "#",
    amount: "-$49.88",
    status: "decrease",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

const people = [
  {
    image: <img src={customerImage1} alt='' />,
    name: "Alex Shatov",
    email: "alexshatov@gmail.com",
    spent: "$2.249.88",
    country: "country",
  },
  {
    image: <img src={customerImage2} alt='' />,
    name: "Philip Harbach",
    email: "philip.h@gmail.com",
    spent: "$2.022.47",
    country: "country",
  },
  {
    image: <img src={customerImage3} alt='' />,
    name: "Mirko Fisuk",
    email: "mirkofisuk@gmail.com",
    spent: "$2.016.04",
    country: "country",
  },
  {
    image: <img src={customerImage4} alt='' />,
    name: "Olga Semklo",
    email: "olga.s@cool.design",
    spent: "$1.944.19",
    country: "country",
  },
  {
    image: <img src={customerImage5} alt='' />,
    name: "Burak Long",
    email: "longburak@gmail.com",
    spent: "$1.766.14",
    country: "country",
  },
  // More people...
];

const people4 = [
  {
    image: <img src={customerImage1} alt='' />,
    source: "Github.com",
    visitors: "2.4K",
    revenues: "$3.877",
    sales: "267",
    conversions: "4.7%",
  },
  {
    image: <img src={customerImage1} alt='' />,
    source: "Twitter",
    visitors: "2.2K",
    revenues: "$3.426",
    sales: "249",
    conversions: "4.2%",
  },
  {
    image: <img src={customerImage1} alt='' />,
    source: "Google ( organic )",
    visitors: "2.0K",
    revenues: "$2.444",
    sales: "224",
    conversions: "4.2%",
  },
  {
    image: <img src={customerImage1} alt='' />,
    source: "Viemo.com",
    visitors: "1.9K",
    revenues: "$2.236",
    sales: "220",
    conversions: "4.2%",
  },
  {
    image: <img src={customerImage1} alt='' />,
    source: "Indiehackers.com",
    visitors: "1.7K",
    revenues: "$2.034",
    sales: "204",
    conversions: "3.9%",
  },
  // More people...
];

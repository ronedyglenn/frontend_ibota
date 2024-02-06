import React from 'react'
import { Link } from 'react-router-dom'

function Messenger() {
    

  return (
        <>
            <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 border border-slate-300 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 h-24">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <a
            className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img className='pb-8'
              src="/src/img/1.png"
              style={{ height: '100px' }}
              alt="TE Logo"
              loading="lazy"
            />
          </a>

          
        </div>

        <div className="relative flex items-center">
          <div className="relative" data-te-dropdown-ref data-te-dropdown-alignment="end">
            <a
              className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-30 w-30"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                1
              </span>
            </a>
           
                                
            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div
            className="relative"
            data-te-dropdown-ref
            data-te-dropdown-alignment="end"
          >
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <img
                src="/src/img/7758834-removebg-preview.png"
                className="rounded-full"
                style={{ height: '50px', width: '50px' }}
                alt=""
                loading="lazy"
              />
            </a>

            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className='flex flex-row justify-between'>
        <div className='bg-cyan-200 w-1/4'>
        <Link to=''><button
  type="button"
  class="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs mx-3 my-3 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
  Déconnexion
</button></Link>
        </div>
    <header className="bg-white shadow w-3/4 ">
          
          <div className="mb-3 mx-3 my-3">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          id="advanced-search-input"
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
        />

        {/* Search button */}
        <button
          className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="advanced-search-button"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
        <main className='flex justify-center items-center'>
        <div class="min-w-full bg-white">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 data-size large data-[size=large]:p-8">
                <thead>
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Office</th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        {/* <!-- Add more th elements here as needed --> */}
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                    <Link to=''><td class="px-6 py-4 whitespace-nowrap">Tiger Nixon</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">System Architect</td>
                        <td class="px-6 py-4 whitespace-nowrap">Edinburgh</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                        <Link to=''><td class="px-6 py-4 whitespace-nowrap">Sonya Frost</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">Software Engineer</td>
                        <td class="px-6 py-4 whitespace-nowrap">Edinburgh</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                    <Link to=' '><td class="px-6 py-4 whitespace-nowrap">Tatyana Fitzpatrick</td></Link>
                    <td class="px-6 py-4 whitespace-nowrap">Regional Director</td>
                    <td class="px-6 py-4 whitespace-nowrap">London</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                    <Link to=''><td class="px-6 py-4 whitespace-nowrap">Tiger Nixon</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">System Architect</td>
                        <td class="px-6 py-4 whitespace-nowrap">Edinburgh</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr >
                    <Link to='File'><td class="px-6 py-4 whitespace-nowrap">Sonya Frost</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">Software Engineer</td>
                        <td class="px-6 py-4 whitespace-nowrap">Edinburgh</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                        <Link to='Agent'><td class="px-6 py-4 whitespace-nowrap">Tatyana Fitzpatrick</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">Regional Director</td>
                        <td class="px-6 py-4 whitespace-nowrap">London</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                    <Link to=''><td class="px-6 py-4 whitespace-nowrap">Tiger Nixon</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">System Architect</td>
                        <td class="px-6 py-4 whitespace-nowrap">Edinburgh</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                    <Link to=''><td class="px-6 py-4 whitespace-nowrap">Sonya Frost</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">Software Engineer</td>
                        <td class="px-6 py-4 whitespace-nowrap">Edinburgh</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                    <tr>
                    <Link to=''><td class="px-6 py-4 whitespace-nowrap">Tatyana Fitzpatrick</td></Link>
                        <td class="px-6 py-4 whitespace-nowrap">Regional Director</td>
                        <td class="px-6 py-4 whitespace-nowrap">London</td>
                        <td class="px-6 py-4 whitespace-nowrap flex flex-row gap-5">
                        <img
                src="/src/img/telephone.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
              <img
                src="/src/img/mail.png"
                className="rounded-full"
                style={{ height: '40px', width: '40px' }}
                alt=""
                loading="lazy"
              />
                        </td>
                        {/* <!-- Add more td elements here as needed --> */}
                    </tr>
                </tbody>
                
            </table>
<nav className="float-right">
  <ul class="list-style-none flex">
    <li>
      <a
        class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
        >Previous</a
      >
    </li>
    <li>
      <a
        class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#!"
        >1</a
      >
    </li>
    <li aria-current="page">
      <a
        class="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
        href="#!"
        >2
        <span
          class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
          >(current)</span
        >
      </a>
    </li>
    <li>
      <a
        class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#!"
        >3</a
      >
    </li>
    <li>
      <a
        class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        href="#!"
        >Next</a
      >
    </li>
  </ul>
</nav>
        </div>
    </div>
</div>

        </main>
        </header>
    </div>
    
            
    
        </>
  )
}

export default Messenger
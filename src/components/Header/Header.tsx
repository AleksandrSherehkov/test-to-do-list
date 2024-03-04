import { Link } from 'react-router-dom'

import { Navigation } from '../Navigation/Navigation'


export const Header = ():JSX.Element => {
  return (
    <header className=" py-4 px-4 w-full flex flex-wrap   gap-10 md:flex-row items-center">
      <Link
        to="/"
        className="cursor-pointer flex title-font   title-font font-medium items-center text-gray-900  transform transition-transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-amber-400 fill-fuchsia-600 w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl text-sky-950">TWEETS</span>
      </Link>

      <Navigation />
    </header>
  )
}
import { NavLink } from 'react-router-dom'

import { links } from '../../utils/navLinks'

export const Navigation = (): JSX.Element => {
  const activeLink =
    'text-blue-800  font-bold transition-all  duration-300 ease-in-out hover:text-yellow-500 '
  return (
    <nav className=" flex flex-wrap gap-8  items-center text-yellow-500 font-semibold justify-center ">
      {links.map(({ path, title }) => 
        <NavLink
          to={path}
          key={title}
          className={({ isActive }) =>
            isActive ? activeLink : 'text-white  transition-all  duration-300 ease-in-out hover:text-yellow-500 '
          }
        >
          {title}
        </NavLink>
      )}
    </nav>
  )
}
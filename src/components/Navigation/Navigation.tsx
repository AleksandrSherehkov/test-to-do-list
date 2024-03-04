import { NavLink } from 'react-router-dom'

import { links } from '../../utils/navLinks'

export const Navigation = (): JSX.Element => {
  const activeLink =
    ' text-white  shadow-link  transition-all duration-500 ease-in-out hover:text-white font-bold  rounded'
  return (
    <nav className=" flex flex-wrap gap-8  items-center text-yellow-500 font-semibold justify-center ">
      {links.map(({ path, title }) => 
        <NavLink
          to={path}
          key={title}
          className={({ isActive }) =>
            isActive ? activeLink : ' hover:text-white  transition-all  duration-300 ease-in-out shadow-'
          }
        >
          {title}
        </NavLink>
      )}
    </nav>
  )
}
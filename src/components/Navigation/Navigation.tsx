import { LINKS_LIST } from '@/constants/navLinks';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = (): JSX.Element => {
  const activeLink =
    'text-blue-800  font-bold transition-all  duration-300 ease-in-out hover:text-yellow-500 ';
  return (
    <nav className=" flex flex-wrap gap-8  items-center text-yellow-500 font-semibold justify-center ">
      {LINKS_LIST.map(({ path, title }) => (
        <NavLink
          to={path}
          key={title}
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'text-white  transition-all  duration-300 ease-in-out hover:text-yellow-500 '
          }
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

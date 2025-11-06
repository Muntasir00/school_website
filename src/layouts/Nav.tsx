import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

const Nav = () => {
  const mainRoutes = routes[0].children?.filter(r => r.path !== '*');
  return (
    <div className='font-outfit border-2 rounded-lg bg-white flex justify-between  ml-[50px] mr-[50px] mt-3.5 '>
      {/* left */}
      <div className='flex justify-center items-center border-r-2 bg-[#FF8D4D] px-5 py-6 gap-2.5'>
        <img src='/public/image/logo.svg' alt='logo' />
        <h2 className='text-[#262626]'>Little learners</h2>
      </div>

      {/* right */}
      <div className='flex items-center'>
        <div className='h-full flex justify-center items-center xl:hidden border-l-2 px-[30px] py-4 bg-[#FFEFE5] rounded-r-lg '>
          <img src='/public/image/menu.svg' alt='' />
        </div>

        {mainRoutes?.map(r => (
          <NavLink
            key={r.path || 'home'}
            to={r.path ?? '/'}
            className='font-outfit h-full hidden xl:flex items-center py-5 px-[34px] border-l-2 text-[#262626] 2xl:text-[20px] xl:text-[16px]'
          >
            {r.index ? 'Home' : r.path?.replace('/', '').replace('-', ' ')}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;

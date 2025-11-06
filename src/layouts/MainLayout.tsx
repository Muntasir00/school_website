import Header from './Header';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const MainLayout = () => {
  return (
    <div className='max-w-[1920px] mx-auto bg-[#FFF5F0] pt-4 pb-10'>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

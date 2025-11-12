import type { sectionTitle } from '../../type/type';

const SectionHeading = ({
  badgetitle,
  badgeheader,
  badgebody,
}: sectionTitle) => {
  return (
    <div className='flex flex-col gap-3.5 items-center px-[200px]'>
      <div className='border-2 rounded-md py-2 px-3.5 text-center bg-white mx-auto'>
        <p className='text-[16px] text-[#000000]'>{badgetitle}</p>
      </div>
      <h1 className='font-raleway font-bold text-[48px] text-[#1A1A1A] '>
        {badgeheader}
      </h1>
      <p className='font-medium text-center text-[16px] text-[#333333]'>
        {badgebody}
      </p>
    </div>
  );
};

export default SectionHeading;

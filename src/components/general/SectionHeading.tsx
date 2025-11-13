import type { sectionTitle } from '../../type/type';

const SectionHeading = ({
  badgetitle,
  badgeheader,
  badgebody,
}: sectionTitle) => {
  return (
    <div className='flex flex-col gap-3.5 items-center sm:px-4 xl:px-[200px]'>
      <div className='border-2 rounded-md  text-center bg-white mx-auto  xl:py-2 px-3.5'>
        <p className='sm:text-[14px] xl:text-[16px] text-[#000000]'>
          {badgetitle}
        </p>
      </div>
      <h1 className='font-raleway font-bold text-[#1A1A1A] text-center text-[38px] xl:text-[48px]  '>
        {badgeheader}
      </h1>
      <p className='font-medium text-center text-[16px] text-[#333333]'>
        {badgebody}
      </p>
    </div>
  );
};

export default SectionHeading;

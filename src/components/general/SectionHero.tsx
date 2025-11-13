import type { sectionHero } from '../../type/type';
const SectionHero = ({ badgetitle, heroheading, herobody }: sectionHero) => {
  return (
    <div className='relative font-outfit flex flex-col lg:flex-row items-center xl:flex-row gap-[50px] border-2 rounded-xl  shadow-[0_8px_8px_#1E1E1E] mx-[50px] bg-white py-[50px] pl-[30px] pr-[30px] lg:py-[150px]  mt-[50px]'>
      <img
        src='/image/heroimage.svg'
        alt=''
        className='absolute top-0 left-0 h-[100px] lg:h-[140px] w-[140px]'
      />
      <div className='flex flex-col items-center xl:items-start gap-3.5  max-w-full lg:max-w-[50%]'>
        <div className='border-2 rounded-lg bg-white text-[14px] lg:text-[18px] text-[#333333] font-medium py-2.5 px-5'>
          {badgetitle}
        </div>
        <div>
          <h1 className='text-[28px] xl:text-[48px] font-bold text-[#1A1A1A]'>
            {heroheading}
          </h1>
        </div>
      </div>
      <div className='flex justify-center items-center max-w-full lg:max-w-[50%]'>
        <p className='text-[16px] xl:text-[20px] font-medium text-[#333333]'>
          {herobody}
        </p>
      </div>
    </div>
  );
};

export default SectionHero;

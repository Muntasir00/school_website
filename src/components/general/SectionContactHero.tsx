import type { sectionHero } from '../../type/type';
const SectionContactHero = ({
  badgetitle,
  heroheading,
  herobody,
}: sectionHero) => {
  return (
    <div className='relative font-outfit flex gap-[50px] border-2 rounded-xl py-[150px] px-[120px] mt-[50px] shadow-[0_8px_8px_#1E1E1E] mx-[50px] bg-white'>
      <img
        src='/image/heroimage.svg'
        alt=''
        className='absolute top-0 left-0 h-[200px] w-[200px]'
      />
      <div className='flex flex-col items-start gap-3.5   max-w-[50%]'>
        <div className='border-2 rounded-lg bg-white text-[18px] text-[#333333] font-medium py-2.5 px-5'>
          {badgetitle}
        </div>
        <div>
          <h1 className='text-[48px] font-bold text-[#1A1A1A]'>
            {heroheading}
          </h1>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center max-w-[50%]'>
        <p className='text-[20px] font-medium text-[#333333]'>{herobody}</p>
        <div className='grid grid-cols-2 gap-6 mt-5'>
          <div className='border-2 rounded-xl p-4 flex items-center gap-2.5 bg-[#FFFCFA]'>
            <div className='border-2 rounded-md bg-[#FFF5F0] p-2 '>
              <img src='/image/message.svg' alt='' />
            </div>
            <p className='text-[16px] font-medium font-outfit text-[#262626]'>
              hello@littlelearners.com
            </p>
          </div>
          <div className='border-2 rounded-xl p-4 flex items-center gap-2.5 bg-[#FFFCFA]'>
            <div className='border-2 rounded-md bg-[#FFF5F0] p-2 '>
              <img src='/image/phone.svg' alt='' />
            </div>
            <p className='text-[16px] font-medium font-outfit text-[#262626]'>
              +91 91813 23 2309
            </p>
          </div>

          <div className='border-2 rounded-xl p-4 flex items-center gap-2.5 bg-[#FFFCFA]'>
            <div className='border-2 rounded-md bg-[#FFF5F0] p-2 '>
              <img src='/image/location.svg' alt='' />
            </div>
            <p className='text-[16px] font-medium font-outfit text-[#262626]'>
              Somewhere in the World
            </p>
          </div>
          <div className='border-2 rounded-xl p-4 flex items-center gap-2.5 bg-[#FFFCFA]'>
            <div className='border-2 rounded-md bg-[#FFF5F0] p-2 '>
              <img src='/image/location.svg' alt='' />
            </div>
            <p className='text-[16px] font-medium font-outfit text-[#262626]'>
              Office Hours - 9am - 6 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContactHero;

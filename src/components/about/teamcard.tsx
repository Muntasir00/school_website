import type { teamcards } from '../../type/type';

const Teamcard = ({ img, img_icon, name, body_heading, body }: teamcards) => {
  return (
    <div className='flex flex-col border-2 rounded-xl p-[50px] gap-[30px] shadow-[0_6px_6px_#1E1E1E] bg-white'>
      <div className='flex justify-between'>
        <div className='flex items-start gap-4'>
          <img src={img} alt='img' />
          <h1 className='font-extrabold text-[30px] font-raleway'>{name}</h1>
        </div>
        <div className='border-2 rounded-lg p-4 bg-[#FFDECC]'>
          <img src={img_icon} alt='img' />
        </div>
      </div>
      <div className='flex flex-col  gap-5 bg-[#FFF5F0] p-[30px] border-2 rounded-xl'>
        <h1 className='text-24px font-semibold text-[#333333]'>
          {body_heading}
        </h1>
        <p className='text-justify font-medium text-[20px] text-[#333333]'>
          {body}
        </p>
      </div>
    </div>
  );
};

export default Teamcard;

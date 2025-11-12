import type { benefitCards } from '../../type/type';
const NavigateCard = ({ title, body, img }: benefitCards) => {
  return (
    <div className='flex flex-col border-2 rounded-lg p-20 gap-[30px] items-center justify-center bg-white shadow-[0_6px_6px_#1E1E1E]'>
      <h1 className='font-raleway font-bold text-[48px] text-center text-[#1A1A1A]'>
        {title}
      </h1>
      <img src={img} alt='' />
      <p className='font-medium text-[20px] text-[#4C4C4D] text-center'>
        {body}
      </p>
      <div className='flex border-2 rounded-[10px] mt-5 bg-[#FFDECC] items-center justify-center pt-[18px] pb-[18px] w-full shadow-[0_4px_4px_#1E1E1E]'>
        <p>Learn More</p>
        <img src='/image/arrow right.svg' alt='' />
      </div>
    </div>
  );
};

export default NavigateCard;

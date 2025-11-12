import type { benefitCards } from '../../type/type';
const AwardCard = ({ title, body, img }: benefitCards) => {
  return (
    <div className='flex flex-col border-2 rounded-xl shadow-[0_6px_6px_#1E1E1E] bg-white pt-20 pb-[50px] pr-[50px] pl-[50px] relative gap-5'>
      <div className='flex justify-center items-center left-[30px] -top-9 border-2 rounded-xl bg-[#FFDECC] absolute p-5'>
        <img src={img} alt='img' />
      </div>
      <h1 className='font-raleway font-bold text-[28px] text-[#1A1A1A]'>
        {title}
      </h1>
      <p className='font-outfit font-medium text-[20px] text-[#4C4C4D]'>
        {body}
      </p>
    </div>
  );
};

export default AwardCard;

import type { benefitCards } from '../../type/type';
const BenefitCards = ({ title, body, img }: benefitCards) => {
  return (
    <div className='relative flex flex-col gap-5 pt-20 pb-[50px] pr-[50px] pl-[50px] border-2 rounded-xl shadow-[0_6px_6px_#1E1E1E] bg-white mt-5'>
      <div className='border-2 rounded-xl bg-[#FFDECC] absolute -top-9 left-[30px] p-5'>
        {img && <img src={img} alt='img' className='' />}
      </div>

      <h2 className='font-bold text-[28px] text-[#1A1A1A]'>{title}</h2>
      <p className='font-medium text-[20px] text-[#4C4C4D]'>{body}</p>
    </div>
  );
};

export default BenefitCards;

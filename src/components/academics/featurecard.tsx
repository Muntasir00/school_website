import type { benefitCards } from '../../type/type';

const Featurecard = ({ title, body, img }: benefitCards) => {
  return (
    <div className='border-2 rounded-xl flex flex-col bg-white gap-5 pt-20 pr-[50px] pl-[50px] pb-[50px] relative'>
      <div className='absolute left-[30px] -top-[30px] border-2 rounded-xl p-5 flex justify-center items-center bg-[#FFDECC]'>
        <img src={img} alt='img' />
      </div>
      <h1 className='font-bold text-[28px] text-[#1A1A1A]'>{title}</h1>
      <p className='font-medium text-[20px] text-[#4C4C4D]'>{body}</p>
    </div>
  );
};

export default Featurecard;

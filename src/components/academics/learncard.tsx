import type { benefitCards } from '../../type/type';

const Learncard = ({ img, title, body }: benefitCards) => {
  return (
    <div className='flex flex-col border-2 rounded-xl p-[50px] gap-[50px] relative bg-white shadow-[0_6px_6px_#1E1E1E]'>
      <div className='absolute border-2 rounded-b-xl bg-[#FFEFE5] h-[250px] w-[125px] top-0 left-[100px] right-[100px] z-0'></div>
      <div className='border-2 rounded-xl z-10 '>
        <img src={img} alt='' w-full h-full />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-[28px] text-center text-[#1A1A1A]'>
          {title}
        </h1>
        <p className='font-medium text-[20px] text-center text-[#4C4C4D]'>
          {body}
        </p>
      </div>
    </div>
  );
};

export default Learncard;

import type { admissionCards } from '../../type/type';

const Admissioncard = ({ cardnum, title, body }: admissionCards) => {
  return (
    <div className='flex flex-col gap-[30px] items-start '>
      <div className='border-2 rounded-xl bg-white flex justify-center items-center pt-3.5  pl-[30px] pr-[30px]'>
        <h1 className='font-extrabold text-[60px] text-[#1A1A1A]'>
          0{cardnum}
        </h1>
      </div>
      <div className='border-2 rounded-xl p-10 flex flex-col gap-3 bg-white min-h-80 max-h-80'>
        <h1 className='font-raleway font-bold text-[30px]  text-[#1A1A1A]'>
          {title}
        </h1>
        <p className='font-medium text-[16px] text-[#4C4C4D] text-justify '>
          {body}
        </p>
      </div>
    </div>
  );
};

export default Admissioncard;

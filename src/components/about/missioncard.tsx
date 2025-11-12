import type { benefitCards } from '../../type/type';
const MissionCard = ({ title, body, img }: benefitCards) => {
  return (
    <div className='flex flex-col border-2 rounded-xl p-[60px] gap-[60px] bg-white shadow-[0_6px_6px_#1E1E1E]'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-[48px] font-raleway text-[#1A1A1A]'>
          {title}
        </h1>
        <img src={img} alt='mission' className='h-20 w-20' />
      </div>

      <p className='font-outfit font-medium text-[20px] text-[#333333] text-justify'>
        {body}
      </p>
    </div>
  );
};

export default MissionCard;

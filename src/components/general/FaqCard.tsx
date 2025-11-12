import { useState } from 'react';
import type { faqCards } from '../../type/type';

const FaqCard = ({ question, answer }: faqCards) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`border-2 rounded-lg py-[34px] px-10 transition-all 
      ${open ? 'bg-white' : 'bg-[#FFEFE5]'}`}
    >
      <div className='flex justify-between items-center'>
        <p>{question} </p>
        <div
          className='flex justify-center items-center border-2 rounded-md bg-[#FFF5F0] p-2 cursor-pointer '
          onClick={handleClick}
        >
          {!open && <img src='/image/plus.svg' alt='' />}
          {open && <img src='/image/minus.svg' alt='' />}
        </div>
      </div>
      {open && <p>{answer}</p>}
    </div>
  );
};

export default FaqCard;

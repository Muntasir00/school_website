import type { testimonialCards } from '../../type/type';
const TestimonialCard = ({
  title,
  body,
  img,
  img_review,
}: testimonialCards) => {
  return (
    <div className='flex flex-col border-2 rounded-xl shadow-[0_6px_6px_#1E1E1E] items-center justify-center p-[50px] mt-[100px] bg-white gap-2.5'>
      <div>
        <div className='border-2 rounded-full bg-[#FFF5F0] p-2.5'>
          <img src={img} alt='image' />
        </div>
      </div>
      <h1 className='text-[24px] font-semibold mt-3'>{title}</h1>
      <div className='mt-[15px]'>
        <img src={img_review} alt='review' />
      </div>
      <p className='text-center font-medium text-[20px] mt-[15px] text-[#333333]'>
        {body}
      </p>
    </div>
  );
};

export default TestimonialCard;

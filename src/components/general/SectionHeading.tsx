import type { sectionTitle } from '../../type/type';

const SectionHeading = ({
  badgetitle,
  badgeheader,
  badgebody,
}: sectionTitle) => {
  return (
    <div className='flex flex-col gap-3.5'>
      <div className='border-2 rounded-md py-2 px-3.5 text-center'>
        <p className='text-[16px]'>{badgetitle}</p>
      </div>
      <h1 className='font-bold text-[48px] '>{badgeheader}</h1>
    </div>
  );
};

export default SectionHeading;

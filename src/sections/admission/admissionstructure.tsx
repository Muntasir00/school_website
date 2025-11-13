import Admissionforum from '../../components/admission/admission_forum';
import SectionHeading from '../../components/general/SectionHeading';

const Admissionstructure = () => {
  return (
    <div className='mt-[200px]'>
      <SectionHeading
        badgetitle='Our Features'
        badgeheader='Fee Structure'
        badgebody='Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.'
      />
      <Admissionforum />
    </div>
  );
};

export default Admissionstructure;

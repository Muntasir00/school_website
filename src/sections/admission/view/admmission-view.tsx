import SectionHero from '../../../components/general/SectionHero';
import Admissionprocess from '../admissionprocess';
import Admissionstructure from '../admissionstructure';

export function AdmissionView() {
  return (
    <div className='font-outfit'>
      <SectionHero
        badgetitle='Admission'
        heroheading='Join Our Family of Young Learners'
        herobody="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <Admissionprocess />
      <Admissionstructure />
    </div>
  );
}

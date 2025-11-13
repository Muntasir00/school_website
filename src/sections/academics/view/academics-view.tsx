import SectionHero from '../../../components/general/SectionHero';
import Feature from '../feature';
import Learn from '../learn';

export function AcademicsView() {
  return (
    <div className='font-outfit'>
      <SectionHero
        badgetitle='Academics'
        heroheading='Nurturing Young Minds for Success'
        herobody="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <Feature />
      <Learn />
    </div>
  );
}

import Featurecard from '../../../components/academics/featurecard';
import SectionHero from '../../../components/general/SectionHero';
import Activities from '../activities';
import Events from '../events';
import Support from '../support';

export function Studentlifeview() {
  return (
    <div>
      <SectionHero
        badgetitle='Enriching Student Life'
        heroheading='Embracing Learning with Discovery and Joy'
        herobody="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />
      <Activities />
      <Events />
      <Support />
      <div className='mt-[100px] grid grid-cols-3 mx-40 gap-10 mb-[100px]'>
        <Featurecard
          img='/image/support.svg'
          title='Counseling'
          body='Professional counselors offer guidance and support to students, addressing their emotional and social well-being.'
        />
        <Featurecard
          img='/image/support_2.svg'
          title='Learning Support'
          body='Our educators provide additional assistance to students who may require extra support in their academic journey.'
        />
        <Featurecard
          img='/image/support_3.svg'
          title='Parent-Teacher Collaboration'
          body="We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
        />
      </div>
    </div>
  );
}

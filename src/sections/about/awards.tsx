import AwardCard from '../../components/about/awardcard';
import SectionHeading from '../../components/general/SectionHeading';

const Awards = () => {
  return (
    <div className='mt-100px'>
      <SectionHeading
        badgetitle='Our Achievements'
        badgeheader='Our Awards and Recognitions'
        badgebody="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <div className='flex px-40 mt-[100px] gap-[50px]'>
        <AwardCard
          title='Outstanding Early Childhood Education Awar'
          body="Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
          img='/image/awards.svg'
        />
        <AwardCard
          title='Outstanding Early Childhood Education Awar'
          body="Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
          img='/image/awards.svg'
        />
        <AwardCard
          title='Outstanding Early Childhood Education Awar'
          body="Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
          img='/image/awards.svg'
        />
      </div>
    </div>
  );
};

export default Awards;

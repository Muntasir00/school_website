import Learncard from '../../components/academics/learncard';
import SectionHeading from '../../components/general/SectionHeading';

const Learn = () => {
  return (
    <div className='mt-[100px] mx-40'>
      <SectionHeading
        badgetitle='Our Features'
        badgeheader='What Students Learn'
        badgebody='At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include'
      />
      <div className='grid grid-cols-3 gap-[50px] mt-[100px]'>
        <Learncard
          title='Language Arts'
          img='/image/learner_1.svg'
          body='Reading, writing, storytelling, and communication skills.'
        />
        <Learncard
          title='Language Arts'
          img='/image/learner_1.svg'
          body='Reading, writing, storytelling, and communication skills.'
        />
        <Learncard
          title='Language Arts'
          img='/image/learner_1.svg'
          body='Reading, writing, storytelling, and communication skills.'
        />
        <Learncard
          title='Language Arts'
          img='/image/learner_1.svg'
          body='Reading, writing, storytelling, and communication skills.'
        />
        <Learncard
          title='Language Arts'
          img='/image/learner_1.svg'
          body='Reading, writing, storytelling, and communication skills.'
        />
        <Learncard
          title='Language Arts'
          img='/image/learner_1.svg'
          body='Reading, writing, storytelling, and communication skills.'
        />
      </div>
    </div>
  );
};

export default Learn;

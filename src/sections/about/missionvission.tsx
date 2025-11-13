import MissionCard from '../../components/about/missioncard';
import SectionHeading from '../../components/general/SectionHeading';

const MissionVission = () => {
  return (
    <div className='mt-[200px] mb-[100px]'>
      <SectionHeading
        badgetitle='Mission & Visions'
        badgeheader='Our Mission & Visions'
        badgebody='We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'
      />
      <div className='flex flex-col mx-[16px] lg:flex-row mx-40 mt-[100px] gap-[60px] flex-wrap'>
        <MissionCard
          title='Mission'
          img='/image/Icon.svg'
          body='At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.'
        />
        <MissionCard
          title='Vision'
          body='Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.
'
          img='/image/vision.svg'
        />
      </div>
    </div>
  );
};

export default MissionVission;

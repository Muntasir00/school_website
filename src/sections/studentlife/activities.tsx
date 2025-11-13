import Featurecard from '../../components/academics/featurecard';
import SectionHeading from '../../components/general/SectionHeading';

const Activities = () => {
  return (
    <div className='mt-[200px]'>
      <SectionHeading
        badgetitle='Our Features'
        badgeheader='Extracurricular Activities'
        badgebody='At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including'
      />
      <div className='mt-[100px]  gap-[50px] mx-[16px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3mx-40'>
        <Featurecard
          title='Sports and Athletics'
          body='Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.'
          img='/image/activities_1.svg'
        />
        <Featurecard
          title='Sports and Athletics'
          body='Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.'
          img='/image/activities_1.svg'
        />
        <Featurecard
          title='Sports and Athletics'
          body='Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.'
          img='/image/activities_1.svg'
        />
        <Featurecard
          title='Sports and Athletics'
          body='Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.'
          img='/image/activities_1.svg'
        />
        <Featurecard
          title='Sports and Athletics'
          body='Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.'
          img='/image/activities_1.svg'
        />
        <Featurecard
          title='Sports and Athletics'
          body='Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.'
          img='/image/activities_1.svg'
        />
      </div>
    </div>
  );
};

export default Activities;

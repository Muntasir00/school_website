import Teamcard from '../../components/about/teamcard';
import SectionHeading from '../../components/general/SectionHeading';

const Teammates = () => {
  return (
    <div className='mt-[100px] mb-[150px]'>
      <SectionHeading
        badgetitle='Our Teachers With Experties'
        badgeheader='Our Team Members'
        badgebody='At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.'
      />
      <div className='grid grid-cols-2 mx-40 mt-25 gap-[50px]'>
        <Teamcard
          img='/image/teammember.png'
          img_icon='/public/image/teamicon.svg'
          name='Ms. Sarah Anderson'
          body_heading="Qualification:Bachelor's Degree in Early Childhood Education"
          body='Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
        />
        <Teamcard
          img='/image/teammember.png'
          img_icon='/public/image/teamicon.svg'
          name='Ms. Sarah Anderson'
          body_heading="Qualification:Bachelor's Degree in Early Childhood Education"
          body='Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
        />
        <Teamcard
          img='/image/teammember.png'
          img_icon='/public/image/teamicon.svg'
          name='Ms. Sarah Anderson'
          body_heading="Qualification:Bachelor's Degree in Early Childhood Education"
          body='Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
        />
        <Teamcard
          img='/image/teammember.png'
          img_icon='/public/image/teamicon.svg'
          name='Ms. Sarah Anderson'
          body_heading="Qualification:Bachelor's Degree in Early Childhood Education"
          body='Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
        />
        <Teamcard
          img='/image/teammember.png'
          img_icon='/public/image/teamicon.svg'
          name='Ms. Sarah Anderson'
          body_heading="Qualification:Bachelor's Degree in Early Childhood Education"
          body='Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
        />
        <Teamcard
          img='/image/teammember.png'
          img_icon='/public/image/teamicon.svg'
          name='Ms. Sarah Anderson'
          body_heading="Qualification:Bachelor's Degree in Early Childhood Education"
          body='Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
        />
      </div>
    </div>
  );
};

export default Teammates;

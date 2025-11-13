import Learncard from '../../components/academics/learncard';
import SectionHeading from '../../components/general/SectionHeading';
const Events = () => {
  return (
    <div className='mt-[200px]'>
      <SectionHeading
        badgetitle='Our Features'
        badgeheader='Events & Celebrations'
        badgebody='At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include'
      />
      <div className='mt-[100px] gap-[50px] mx-[16px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-40'>
        <Learncard
          img='/public/image/events.svg'
          title='Annual Sports Day'
          body='Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.'
        />
        <Learncard
          img='/public/image/events.svg'
          title='Annual Sports Day'
          body='Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.'
        />
        <Learncard
          img='/public/image/events.svg'
          title='Annual Sports Day'
          body='Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.'
        />
        <Learncard
          img='/public/image/events.svg'
          title='Annual Sports Day'
          body='Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.'
        />
        <Learncard
          img='/public/image/events.svg'
          title='Annual Sports Day'
          body='Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.'
        />
        <Learncard
          img='/public/image/events.svg'
          title='Annual Sports Day'
          body='Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.'
        />
      </div>
    </div>
  );
};

export default Events;

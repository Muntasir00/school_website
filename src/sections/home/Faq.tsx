import FaqCard from '../../components/general/FaqCard';
import SectionHeading from '../../components/general/SectionHeading';

const Faq = () => {
  return (
    <div className='mt-[200px] font-outfit mx-20 xl:mx-40  2xl:mt-20'>
      <SectionHeading
        badgetitle='Solutions For The Doubts'
        badgeheader='Frequently Asked Questions'
        badgebody="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <div className='grid grid-cols-2 gap-[50px] mt-[100px]'>
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
        <FaqCard
          question='What are the school hours at Little Learners Academy?'
          answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        />
      </div>
    </div>
  );
};

export default Faq;

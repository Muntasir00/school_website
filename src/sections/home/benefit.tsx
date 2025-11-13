import SectionHeading from '../../components/general/SectionHeading';
import BenefitCards from '../../components/general/BenefitCards';

const Benefit = () => {
  return (
    <div className='font-outfit mx-20 xl:mx-40 mt-[60px] 2xl:mt-20'>
      <SectionHeading
        badgetitle='Children Deserve Bright Future'
        badgeheader='Our Benefits'
        badgebody="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-20'>
        <BenefitCards
          title='Holistic Learning Approach'
          body='Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
          img='/image/benefit_1.svg'
        />
        <BenefitCards
          title='Holistic Learning Approach'
          body='Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
          img='/image/benefit_2.svg'
        />
        <BenefitCards
          title='Holistic Learning Approach'
          body='Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
          img='/image/benifit_3.svg'
        />
        <BenefitCards
          title='Holistic Learning Approach'
          body='Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
          img='/image/benefit_1.svg'
        />
        <BenefitCards
          title='Holistic Learning Approach'
          body='Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
          img='/image/benefit_1.svg'
        />
        <BenefitCards
          title='Holistic Learning Approach'
          body='Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
          img='/image/benefit_1.svg'
        />
      </div>
    </div>
  );
};

export default Benefit;

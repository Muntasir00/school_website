import SectionHeading from '../../components/general/SectionHeading';
import TestimonialCard from '../../components/general/TestimonialCard';

const Testimonial = () => {
  return (
    <div className='font-outfit mx-20 xl:mx-40 mt-[60px] 2xl:mt-20'>
      <SectionHeading
        badgetitle='Their Happy Words 🤗'
        badgeheader='Our Testimonials'
        badgebody='Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'
      />

      <div className='grid grid-cols-1 gap-[50px] lg:grid-cols-3'>
        <TestimonialCard
          img='/image/testimonial_card_img.svg'
          title='David K'
          img_review='/image/review.svg'
          body='Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.'
        />
        <TestimonialCard
          img='/image/testimonial_card_img.svg'
          title='Emily L'
          img_review='/image/review.svg'
          body="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        />
        <TestimonialCard
          img='/image/testimonial_card_img.svg'
          title='Jennifer B'
          img_review='/image/review.svg'
          body='Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'
        />
      </div>
    </div>
  );
};

export default Testimonial;

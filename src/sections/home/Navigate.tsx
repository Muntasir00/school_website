import NavigateCard from '../../components/general/NavigateCard';
import SectionHeading from '../../components/general/SectionHeading';

const Navigate = () => {
  return (
    <div className=' font-outfit mx-20 xl:mx-40 mt-[200px]'>
      <SectionHeading
        badgetitle='Explore More'
        badgeheader='Navigate through our Pages'
        badgebody='Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school'
      />
      <div className='grid grid-cols-2 gap-[50px] mt-[100px]'>
        <NavigateCard
          title='About Us'
          body='Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
          img='/public/image/bar.svg'
        />
        <NavigateCard
          title='Academics'
          body='Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
          img='/public/image/bar.svg'
        />
        <NavigateCard
          title='Student Life'
          body='Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
          img='/public/image/bar.svg'
        />
        <NavigateCard
          title='Admissions'
          body='Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
          img='/public/image/bar.svg'
        />
      </div>
    </div>
  );
};

export default Navigate;

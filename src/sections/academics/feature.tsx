import Featurecard from '../../components/academics/featurecard';
import SectionHeading from '../../components/general/SectionHeading';

const Feature = () => {
  return (
    <div className='mt-[200px] mb-[100px]'>
      <SectionHeading
        badgetitle='Our Features'
        badgeheader='Our Special Features'
        badgebody='Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'
      />
      <div className='mt-[100px] grid grid-cols-3 gap-[50px] mx-40'>
        <Featurecard
          title='Thematic Learning'
          body="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
          img='/image/featureicon.svg'
        />
        <Featurecard
          title='Thematic Learning'
          body="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
          img='/image/featureicon.svg'
        />
        <Featurecard
          title='Thematic Learning'
          body="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
          img='/image/featureicon.svg'
        />
        <Featurecard
          title='Thematic Learning'
          body="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
          img='/image/featureicon.svg'
        />
        <Featurecard
          title='Thematic Learning'
          body="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
          img='/image/featureicon.svg'
        />
        <Featurecard
          title='Thematic Learning'
          body="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
          img='/image/featureicon.svg'
        />
      </div>
    </div>
  );
};

export default Feature;

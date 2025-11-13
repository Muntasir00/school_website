import Gallerycard from '../../components/general/Gallerycard';
import SectionHeading from '../../components/general/SectionHeading';

const Gallery = () => {
  return (
    <div className='mt-[200px] mb-[100px]'>
      <SectionHeading
        badgetitle='Our Gallery'
        badgeheader='Our Rooms Gallery'
        badgebody='Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'
      />

      <div className='flex gap-2.5 mx-[300px] items-center mt-[50px] cursor-pointer'>
        <div className='border-2 rounded-md bg-white py-2.5 px-4'>All</div>
        <div className='border-2 rounded-md bg-white py-2.5 px-4'>
          Classrooms
        </div>
        <div className='border-2 rounded-md bg-white py-2.5 px-4'>Library</div>
        <div className='border-2 rounded-md bg-white py-2.5 px-4'>
          Science Lab
        </div>
        <div className='border-2 rounded-md bg-white py-2.5 px-4'>
          Computer Lab
        </div>
        <div className='border-2 rounded-md bg-white py-2.5 px-4'>
          Garden and Nature Area
        </div>
      </div>

      <div className='flex flex-col gap-[150px] mt-[200px]'>
        <Gallerycard />
        <Gallerycard />
        <Gallerycard />
        <Gallerycard />
        <Gallerycard />
      </div>
    </div>
  );
};

export default Gallery;

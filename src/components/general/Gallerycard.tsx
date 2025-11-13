const Gallerycard = () => {
  return (
    <div className='flex flex-col gap-30px px-10 pb-10 bg-white relative border-2 rounded-xl pt-[180px] mx-20 '>
      <div className='absolute left-10 -top-[30%]  overflow-hidden flex gap-10'>
        <img src='/image/gallery.svg' alt='' />
        <img src='/image/gallery_2.svg' alt='' />
        <img src='/image/gallery_3.svg' alt='' />
        <img src='/image/gallery_4.svg' alt='' />
      </div>
      <h1 className='font-raleway font-bold text-[34px] text-[#1A1A1A]'>
        Classrooms
      </h1>
      <p className='font-medium text-[20px] text-[#4C4C4D]'>
        Our well-equipped classrooms are designed to provide a nurturing and
        stimulating learning environment. Each classroom is thoughtfully
        arranged to inspire creativity, curiosity, and engagement.
      </p>
    </div>
  );
};

export default Gallerycard;

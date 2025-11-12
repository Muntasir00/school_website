const Hero = () => {
  return (
    <div className='mx-20 xl:mx-40 mt-[60px] 2xl:mt-20'>
      <div className='flex gap-[50px]'>
        <div className='max-w-[50%]'>
          <img
            src='/public/image/left-hero.png'
            alt='Left hero'
            className='w-full'
          />
        </div>

        <div className='flex flex-col justify-center items-center max-w-[50%]'>
          <div className=''>
            <div className='flex flex-col gap-2'>
              <p className='border-b-2 text-[18px]  font-medium'>
                Welcome to Little Learners Academy
              </p>
              <h1 className='text-[40px] text-4xl font-extrabold'>
                Where Young Minds Blossom and{' '}
                <span className='text-[#FF8D4D]'>Dreams Take Flight.</span>
              </h1>
              <p className='font-medium text-[16px] text-[#333333] mt-5'>
                Our kinder garden school provides a nurturing and stimulating
                environment, fostering a love for learning that lasts a
                lifetime. Join us as we embark on an exciting educational
                journey together!
              </p>
            </div>
            <div className='flex gap-2.5 border-2 shadow-[0_6px_6px_#FFBE99] rounded-[10px] py-5 px-10 bg-[#FFEFE5] justify-around mt-[50px]'>
              <div className='flex flex-col'>
                <p className='font-extrabold text-[34px] text-[#262626]'>
                  +7000
                </p>
                <p className='font-medium text-[16px] text-[#262626]'>
                  Students Passed Out
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='font-extrabold text-[34px] text-[#262626]'>+37</p>
                <p className='font-medium text-[16px] text-[#262626]'>
                  Awards & Recognitions
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='font-extrabold text-[34px] text-[#262626]'>+15</p>
                <p className='font-medium text-[16px] text-[#262626]'>
                  Experience Educators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

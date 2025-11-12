const Footer = () => {
  return (
    <div className='border-2 rounded-xl shadow-[0_6px_6px_#1E1E1E] pt-[100px] pr-[113px] pb-10 pl-[113px] mx-[50px] mt-20 bg-white'>
      {/* upper footer */}

      <div className='font-outfit flex justify-between flex-wrap gap-10 xl:gap-20'>
        {/* link section */}
        <div className='flex flex-col  2xl:max-w-[529px] xl: max-w-[393px] mb-5'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 flex-start items-center'>
              <img src='/image/logo.svg' alt='log' className='size-[40]' />
              <h1 className='font-bold text-[#4C4C4D] text-2xl'>
                Little Learners
              </h1>
            </div>
            <div>
              <p className='text-[18px] font-medium leading-6 text-[#4C4C4D]'>
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-6 mt-[30px]'>
            <div className='flex gap-2.5 items-center'>
              <div className='flex justify-center items-center border-2 rounded-md p-2 bg-[#FFF5F0]'>
                <img src='/image/message.svg' alt='message' />
              </div>
              <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
                hello@littlelearners.com
              </p>
            </div>

            <div className='flex gap-2.5 items-center flex-start'>
              <div className='flex justify-center items-center border-2 rounded-md p-2 bg-[#FFF5F0]'>
                <img src='/image/phone.svg' alt='message' />
              </div>
              <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
                +91 91813 23 2309
              </p>
            </div>

            <div className='flex gap-2.5 items-center'>
              <div className='flex justify-center items-center border-2 rounded-md p-2 bg-[#FFF5F0]'>
                <img src='/image/location.svg' alt='message' />
              </div>
              <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
                Somewhere in the World
              </p>
            </div>
          </div>
        </div>

        {/* home section */}
        <div className='flex flex-col gap-6 '>
          <p className='font-semibold text-[16px] text-[#262626] 2xl:text-[20px]'>
            Home
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Features
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Our Testimonials
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            FAQ
          </p>
        </div>

        {/* About Us */}
        <div className='flex flex-col gap-6 '>
          <p className='font-semibold text-[16px] text-[#262626] 2xl:text-[20px]'>
            About Us
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Our Mission
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Our Vission
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Awards and Recognitions
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            History
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Teachers
          </p>
        </div>

        {/* home section */}
        <div className='flex flex-col gap-6 '>
          <p className='font-semibold text-[16px] text-[#262626] 2xl:text-[20px]'>
            Academics
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Special Features
          </p>
          <p className='font-medium text-[16px] 2xl:text-[20px] text-[#333333]'>
            Gallery
          </p>
        </div>
      </div>
      {/* lower footer */}
      <div className='flex flex-col gap-5'>
        <div className='flex pt-5 pb-5 justify-between border-t-2 border-b-2 items-center'>
          <div className='flex gap-2.5'>
            <p className='text-[16px] border-r-2 pr-2'>Terms of Service</p>
            <p className='text-[16px] border-r-2 pr-2'>Privacy policy</p>
            <p className='text-[16px] '>Cookie policy</p>
          </div>

          <div className=' flex gap-2.5  '>
            <div className='border-2 rounded-md bg-[#FFDECC] p-3.5'>
              <img src='/image/fb.svg' alt='' />
            </div>

            <div className='border-2 rounded-md bg-[#FFDECC] p-3.5'>
              <img src='/image/twiter.svg' alt='' />
            </div>

            <div className='border-2 rounded-md bg-[#FFDECC] p-3.5'>
              <img src='/image/linkedIn.svg' alt='' />
            </div>
          </div>
        </div>

        <div className='text-center text-[16px] text-[#656567]'>
          <p>
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

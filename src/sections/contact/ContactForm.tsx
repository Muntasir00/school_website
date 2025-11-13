import SectionHeading from '../../components/general/SectionHeading';

const ContactForm = () => {
  return (
    <div className='mt-[200px] mb-[100px]'>
      <SectionHeading
        badgetitle='Contact Form'
        badgeheader='Student Information'
        badgebody='If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs'
      />
      <div className='border-2 rounded-xl relative mt-[100px] mx-40 bg-white p-[100px] shadow-[0_8px_8px_#1E1E1E]'>
        <div className='absolute border-2 rounded-md bg-[#FFDECC] -top-9 left-[330px] py-4 px-[50px] '>
          <img src='/image/fb.svg' />
        </div>
        <div className='absolute border-2 rounded-md bg-[#FFDECC] -top-9 left-[520px] py-4 px-[50px] '>
          <img src='/image/twiter.svg' />
        </div>
        <div className='absolute border-2 rounded-md bg-[#FFDECC] -top-9 left-[703px] py-4 px-[50px] '>
          <img src='/image/linkedIn.svg' />
        </div>

        <div className='grid grid-cols-2 gap-[50px]'>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold font-outfit text-[22px] text-[#4C4C4C]'>
              Parent Name
            </p>
            <div className='border-2 rounded-lg bg-[#FFFCFA] p-[30px]'>
              Enter Parent Name
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold font-outfit text-[22px] text-[#4C4C4C]'>
              Email Address
            </p>
            <div className='border-2 rounded-lg bg-[#FFFCFA] p-[30px]'>
              Enter Email Address
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold font-outfit text-[22px] text-[#4C4C4C]'>
              Phone Number
            </p>
            <div className='border-2 rounded-lg bg-[#FFFCFA] p-[30px]'>
              Enter Phone Number
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold font-outfit text-[22px] text-[#4C4C4C]'>
              Student Name
            </p>
            <div className='border-2 rounded-lg bg-[#FFFCFA] p-[30px]'>
              Enter Student Name
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold font-outfit text-[22px] text-[#4C4C4C]'>
              Student Age
            </p>
            <div className='border-2 rounded-lg bg-[#FFFCFA] p-[30px]'>
              Enter Student Age
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold font-outfit text-[22px] text-[#4C4C4C]'>
              Program of Intrest
            </p>
            <div className='border-2 rounded-lg bg-[#FFFCFA] p-[30px]'>
              Select Program
            </div>
          </div>
        </div>

        <div className='mt-[50px]'>
          <p className='font-outfit font-semibold text-[22px] text-[#4C4C4C]'>
            Message
          </p>
          <div className='border-2 rounded-lg bg-[#FFFCFA] pt-[30px] pl-[30px] pr-[30px] pb-[100px] mt-5'>
            <p className='font-medium text-[20px] font-outfit text-[#59595A] '>
              Enter your Message
            </p>
          </div>
        </div>

        <div className='border-2 rounded-xl flex justify-center items-center bg-[#FFAE80] py-[30px] px-[34px] mt-[50px]'>
          <p className='font-outfit font-medium text-[24px] '>Submit</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

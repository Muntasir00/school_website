import Admissioncard from '../../components/admission/admissioncard';
import SectionHeading from '../../components/general/SectionHeading';

const Admissionprocess = () => {
  return (
    <div className='mt-[200px]'>
      <SectionHeading
        badgetitle='Process'
        badgeheader='Admission Process'
        badgebody='Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school'
      />

      <div className='grid gap-[50px] mt-[100px] mx-[16px] grid-col-1 lg:grid-cols-2 xl:grid-cols-3  mx-40 '>
        <Admissioncard
          cardnum='1'
          title='Inquiry'
          body='Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.'
        />
        <Admissioncard
          cardnum='2'
          title='School Tour'
          body='Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.
'
        />
        <Admissioncard
          cardnum='3'
          title='Application Form'
          body="Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
        />
        <Admissioncard
          cardnum='4'
          title='Parent Interview'
          body="We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
        />
        <Admissioncard
          cardnum='5'
          title='Student Assessment'
          body='For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.'
        />
        <Admissioncard
          cardnum='6'
          title='Acceptance'
          body='Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.'
        />
      </div>
    </div>
  );
};

export default Admissionprocess;

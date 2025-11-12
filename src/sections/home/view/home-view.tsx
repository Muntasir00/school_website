import Hero from '../hero';
import Benefit from '../benefit';
import Testimonial from '../testimonial';
import Faq from '../Faq';
import Navigate from '../Navigate';

export function HomeView() {
  return (
    <div className='font-outfit '>
      <Hero />
      <Benefit />
      <Testimonial />
      <Faq />
      <Navigate />
    </div>
  );
}

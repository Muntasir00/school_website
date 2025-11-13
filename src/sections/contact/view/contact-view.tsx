import SectionContactHero from '../../../components/general/SectionContactHero';
import ContactForm from '../ContactForm';

export function ContactView() {
  return (
    <div>
      <SectionContactHero
        badgetitle='Contact Us'
        heroheading='Feel Free To Connect With Us'
        herobody='We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods'
      />
      <ContactForm />
    </div>
  );
}

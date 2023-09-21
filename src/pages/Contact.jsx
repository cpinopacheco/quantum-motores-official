import ContactSection from "../components/contactSection/ContactSection";
import Title from "../components/title/Title";
import VisitUs from "../components/visitUs/VisitUs";

const Contact = () => {
  return (
    <>
      <div data-aos="fade-up">
        <Title title="Contáctenos"></Title>
      </div>
      <ContactSection></ContactSection>
      <div data-aos="fade-up">
        <Title title="Visítenos"></Title>
      </div>
      <VisitUs></VisitUs>
    </>
  );
};

export default Contact;

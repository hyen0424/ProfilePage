import { contactText } from "../contents/textdata";
function Contact() {
  return (
    <section id="contact">
      <div className="contact_inner">
        <h2 className="contact_title"> Contact Me </h2>
        <div className="contact_text">
          <div className="text">
            {contactText.map((contact, index) => (
              <div key={index}>
                <a
                  href={contact.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id='contact' className="py-20 px-6 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6 text-cyberRed">
        Contact Me
      </h3>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-dark border border-gray-700 rounded focus:border-cyberRed outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 bg-dark border border-gray-700 rounded focus:border-cyberRed outline-none"
        />
        <textarea
          placeholder="Message"
          className="p-3 bg-dark border border-gray-700 rounded focus:border-cyberRed outline-none"
          rows="5"
        ></textarea>
        <button className="px-6 py-3 border border-cyberRed text-cyberRed rounded-lg hover:bg-cyberRed hover:text-dark transition">
          Send Message
        </button>
      </form>
      <div className="flex justify-center flex-wrap md:gap-15 mt-3">
        <div className="text-center p-1">
          <a
            href="https://www.instagram.com/lagevade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            id="instagram"
            target="_blank"
            className="text-red-700 md:text-4xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <p>Lagevade</p>
        </div>
        <div className="text-center p-1">
          <a
            href="https://www.instagram.com/bid_battle_store/?utm_source=ig_web_button_share_sheet"
            id="instagram"
            target="_blank"
            className="text-red-700 md:text-4xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <p>Bid Battle Store</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

function Contact() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
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
    </section>
  );
}

export default Contact;

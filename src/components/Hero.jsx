function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center h-[90vh] px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold">
        Hello, I’m <span className="text-cyberRed">Daffa Saputra</span>
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        Cyber Security Specialist | Penetration Tester | Ethical Hacker
      </p>
      <button className="mt-6 px-6 py-3 border border-cyberRed text-cyberRed rounded-lg hover:bg-cyberRed hover:text-dark transition">
        Contact Me
      </button>
    </section>
  );
}

export default Hero;

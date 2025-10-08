function Certificate() {
  const certificates = [
    {
      title: "Certificate of Completion Classical Cryptography for Beginner",
      file: "/certificates/Certificate-of-Completion-Classical-Cryptography-for-Beginner.pdf",
    },
    {
      title: "Certificate of Completion Introduction to Information Security",
      file: "/certificates/Certificate-of-Completion-Introduction-to-Information-Security.pdf",
    },
    {
      title: "Certificate of ResponsibleAI by AI Opportunity",
      file: "/certificates/Certificate-of-ResponsibleAI-by-AI-Opportunity.pdf",
    },
    {
      title: "IT Essentials certificate",
      file: "/certificates/IT_Essentials_certificate.pdf",
    },
  ];

  return (
    <section className="bg-black py-16 px-6 text-white">
      <h3 className="text-3xl font-bold text-center mb-10 text-cyberRed">
        Certificates
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((c, i) => (
          <a
            key={i}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-dark border border-cyberRed rounded-lg hover:shadow-[0_0_20px_#ff0033] transition block hover:scale-105"
          >
            <h4 className="text-xl font-semibold text-cyberRed mb-3">
              {c.title}
            </h4>
            <p className="text-gray-400">Klik untuk melihat sertifikat</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificate;

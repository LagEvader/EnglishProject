function Projects() {
  const projectList = [
    { title: "Project 1", desc: "Penetration Testing Dashboard" },
    { title: "Project 2", desc: "Threat Intelligence Platform" },
    { title: "Project 3", desc: "Security Monitoring Tool" },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-10 text-cyberRed">
        Projects
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-dark border border-cyberRed rounded-lg hover:shadow-[0_0_20px_#ff0033] transition"
          >
            <h4 className="text-xl font-semibold text-cyberRed">{p.title}</h4>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

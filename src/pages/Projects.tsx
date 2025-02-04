import Navigation from "../components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "Quantum Field Theory Simulation",
      description: "A numerical simulation of quantum field interactions using Python and NumPy.",
      github: "https://github.com/yourusername/qft-sim",
      tags: ["Python", "Physics", "QFT"],
    },
    {
      title: "Particle Physics Analysis",
      description: "Analysis of particle collision data from CERN using machine learning techniques.",
      github: "https://github.com/yourusername/particle-analysis",
      tags: ["Python", "ML", "Physics"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Projects</h1>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-foreground font-medium"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
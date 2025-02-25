
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
    <div className="min-h-screen bg-background">
      {/* Background image with reduced opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-background-lighter p-6 rounded-lg shadow-lg border border-primary/20">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium"
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


import Navigation from "../components/Navigation";

const Teaching = () => {
  const experiences = [
    {
      role: "Mathematics Tutor",
      institution: "University of Cape Town",
      period: "2020 - 2022",
      description: "Conducted tutorial sessions for undergraduate mathematics courses, including Advanced Calculus and Linear Algebra. Developed supplementary learning materials and provided one-on-one assistance to students.",
    },
    {
      role: "Physics Teaching Assistant",
      institution: "Department of Physics, UCT",
      period: "2019 - 2021",
      description: "Assisted in laboratory sessions for first and second-year physics students. Guided students through experimental procedures and data analysis techniques.",
    },
    {
      role: "Science Outreach Coordinator",
      institution: "Cape Town Science Centre",
      period: "2018 - 2020",
      description: "Organized and led workshops for high school students in quantum mechanics and relativity. Developed interactive demonstrations to make complex physics concepts accessible.",
    }
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
          <h1 className="text-4xl font-bold text-white mb-8">Teaching Experience</h1>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-background-lighter p-6 rounded-lg shadow-lg border border-primary/20">
                <h2 className="text-2xl font-bold text-white mb-2">{exp.role}</h2>
                <div className="text-primary mb-2">{exp.institution}</div>
                <div className="text-gray-300 mb-3">{exp.period}</div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teaching;

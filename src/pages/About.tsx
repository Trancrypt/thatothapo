
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-primary mb-8">About Me</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              I completed my primary and secondary education at St. John's College in Johannesburg, where I developed a strong foundation in mathematics and sciences. Following this, I pursued my undergraduate studies at the University of Cape Town (UCT), where I earned a Bachelor of Science degree with honors in Physics and Mathematics in 2019.
            </p>
            
            <p className="leading-relaxed">
              Building on my passion for theoretical physics, I continued my academic journey at UCT, completing my Master's degree in Applied Mathematics in 2022. My master's research focused on Theoretical Cosmology, where I explored mathematical models of the early universe and their implications for our understanding of cosmic evolution. This rigorous academic background has equipped me with the analytical and problem-solving skills that I now apply to both research and teaching.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

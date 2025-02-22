
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";

const Index = () => {
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
        <section className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center gap-8 mb-6">
            <Avatar className="h-48 w-48 rounded-full border-4 border-white shadow-lg">
              <AvatarImage src="/lovable-uploads/6ffacc28-72dd-4ad6-91e9-90209b58a247.png" alt="Thato Thapo" className="object-cover" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold text-primary">
                Thato Thapo
              </h1>
              <p className="text-xl text-gray-600 mt-4 mb-4">
                Masters graduate in Applied Mathematics from the University of Cape Town focusing on Theoretical Cosmology. A passion for physics and championing science outreach.
              </p>
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Latest Blog Posts</h2>
              <div className="space-y-4">
                <Link to="/blog/1" className="block hover:bg-gray-50 p-3 rounded-md transition-colors">
                  <h3 className="font-bold text-lg mb-1">Recent Developments in String Theory</h3>
                  <p className="text-gray-600 text-sm">Exploring the latest breakthroughs in string theory...</p>
                </Link>
                <Link to="/blog/2" className="block hover:bg-gray-50 p-3 rounded-md transition-colors">
                  <h3 className="font-bold text-lg mb-1">Quantum Computing Progress</h3>
                  <p className="text-gray-600 text-sm">Analyzing recent advancements in quantum computing...</p>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Recent Projects</h2>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h3 className="font-medium text-gray-900">Quantum Field Simulator</h3>
                  <p className="text-gray-600 text-sm">Interactive visualization of quantum fields</p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-medium text-gray-900">Dark Matter Detection</h3>
                  <p className="text-gray-600 text-sm">Analysis of particle physics data</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Cosmological Models</h3>
                  <p className="text-gray-600 text-sm">Mathematical modeling of universe expansion</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Teaching & Tutoring</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-accent">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Mathematics</h3>
                    <p className="text-gray-600 text-sm">Advanced calculus and linear algebra</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Physics</h3>
                    <p className="text-gray-600 text-sm">Quantum mechanics and relativity</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Coding</h3>
                    <p className="text-gray-600 text-sm">Python for scientific computing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

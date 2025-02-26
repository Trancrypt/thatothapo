
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleClick = (path: string) => {
    console.log(`Attempting to navigate to: ${path}`);
  };
  
  return (
    <nav className="bg-background-lighter shadow-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="font-serif text-xl font-bold text-white hover:text-primary transition-colors"
          >
            Thato Thapo
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/blog"
              onClick={() => handleClick("/blog")}
              className={`${
                isActive("/blog")
                  ? "text-primary font-medium"
                  : "text-gray-300 hover:text-primary"
              } transition-colors`}
            >
              Blog
            </Link>
            <Link
              to="/projects"
              onClick={() => handleClick("/projects")}
              className={`${
                isActive("/projects")
                  ? "text-primary font-medium"
                  : "text-gray-300 hover:text-primary"
              } transition-colors`}
            >
              Projects
            </Link>
            <Link
              to="/teaching"
              onClick={() => handleClick("/teaching")}
              className={`${
                isActive("/teaching")
                  ? "text-primary font-medium"
                  : "text-gray-300 hover:text-primary"
              } transition-colors`}
            >
              Teaching
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

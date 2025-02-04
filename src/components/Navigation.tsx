import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-xl font-bold text-primary">
            Thato Thapo
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-accent font-medium"
                  : "text-gray-600 hover:text-accent"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`${
                isActive("/blog")
                  ? "text-accent font-medium"
                  : "text-gray-600 hover:text-accent"
              } transition-colors`}
            >
              Blog
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive("/projects")
                  ? "text-accent font-medium"
                  : "text-gray-600 hover:text-accent"
              } transition-colors`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
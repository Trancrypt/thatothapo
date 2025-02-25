
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Recent Developments in String Theory",
      excerpt: "Exploring the latest breakthroughs in string theory and their implications for our understanding of the universe.",
      date: "2024-02-20",
    },
    {
      id: 2,
      title: "Quantum Computing Progress",
      excerpt: "Analyzing recent advancements in quantum computing and their potential impact on computational physics.",
      date: "2024-02-15",
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
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-background-lighter p-6 rounded-lg shadow-lg border border-primary/20">
                <time className="text-gray-300 text-sm">{post.date}</time>
                <h2 className="text-2xl font-bold text-white mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;

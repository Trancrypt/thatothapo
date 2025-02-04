import Navigation from "../components/Navigation";

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-2xl font-bold text-primary mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-accent hover:text-accent-foreground font-medium"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
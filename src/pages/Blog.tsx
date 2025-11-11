import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Boost Your Immunity the Ayurvedic Way',
    excerpt: 'Discover simple Ayurvedic herbs and daily habits that can help you strengthen your immunity naturally and maintain vitality.',
    image: '/assets/images/blog/blog1.jpg'
  },
  {
    id: 2,
    title: 'Managing Diabetes Holistically',
    excerpt: 'Understand how integrating modern medicine with Ayurvedic diet principles can help manage diabetes more effectively.',
    image: '/assets/images/blog/blog2.jpg'
  },
  {
    id: 3,
    title: 'Stress Relief Through Ayurveda',
    excerpt: 'Learn how herbal therapies, breathing techniques, and lifestyle changes from Ayurveda can balance your mind and emotions.',
    image: '/images/blog/stress.jpg'
  },
  {
    id: 4,
    title: 'Monsoon Health Tips',
    excerpt: "Stay safe this monsoon with expert preventive measures from both modern medicine and Ayurveda's seasonal regimen (Ritu Charya).",
    image: '/images/blog/remedies.jpg'
  },
  {
    id: 6,
    title: 'Daily Diet According to Ayurveda',
    excerpt: 'Balance your Doshas through mindful eating — discover how meal timing and food combinations affect overall health.',
    image: '/images/blog/diet.jpg'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Health Blog | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Read expert blogs and health tips from Saanvi Healthcare Centre — combining modern medicine and Ayurveda for holistic wellbeing." 
        />
        <meta 
          name="keywords" 
          content="Ayurveda Blog, Health Tips, Holistic Care, General Medicine Articles, Saanvi Healthcare Centre" 
        />
      </Helmet>

      <section className="pt-24 pb-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Health & Wellness Blog</h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Stay informed with the latest health insights, Ayurveda lifestyle tips, and medical advice curated by our doctors.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-green-700 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-gray-600 mt-8">No articles found matching your search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;

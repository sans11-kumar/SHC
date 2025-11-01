import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

const BlogCard = ({ id, title, excerpt, image, category, date, author }: BlogPostProps) => {
  return (
    <article className="blog-card bg-white rounded-2xl overflow-hidden shadow-lg">
      <Link to={`/blog/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={`/assets/images/blog/${image}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-sm font-medium bg-emerald-500 text-white rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center text-emerald-600 font-medium">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
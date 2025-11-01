import { Link } from 'react-router-dom';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ id, title, description, icon, link }: ServiceProps) => {
  return (
    <div className="reveal bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
        <img src={`/assets/images/icons/${icon}`} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
      >
        Learn More
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
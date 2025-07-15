import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  slug: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.article
      variants={cardVariants}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="p-6">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">{post.category}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className={`text-gray-600 mb-4 leading-relaxed ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {post.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              <span className="mr-2">
                {language === 'cs' ? 'Číst více' : 'Читать далее'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
            {featured && (
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {language === 'cs' ? 'Doporučujeme' : 'Рекомендуем'}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

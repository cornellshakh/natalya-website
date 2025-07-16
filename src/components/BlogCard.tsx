import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost } from '../data/blogPosts';
import { Badge } from './ui/badge';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.article
      className="bg-neutral-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 overflow-hidden group"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="p-8">
          {/* Header with Category and Date */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20">
                <Tag className="w-3 h-3 mr-1" />
                {post.category[language]}
              </Badge>
              {post.featured && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                  {language === 'cs' ? 'Doporučeno' : 'Рекомендуемое'}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} {language === 'cs' ? 'min' : 'мин'}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-brand-emerald transition-colors leading-tight">
            {post.title[language]}
          </h3>

          {/* Excerpt */}
          <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
            {post.excerpt[language]}
          </p>

          {/* Read More */}
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center text-brand-emerald font-medium group-hover:text-brand-emerald/80 transition-colors">
              <span className="mr-2 text-lg">{language === 'cs' ? 'Číst více' : 'Читать далее'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

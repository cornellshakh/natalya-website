import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Search, Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

import { Input } from '../components/ui/Input';
import { SkeletonBlogPost } from '../components/ui/Skeleton';
import SEOHead from '../components/SEO/SEOHead';
import BlogCard from '../components/BlogCard';

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

export default function Blog() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading state for demonstration
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: t('blog.posts.0.title'),
      excerpt: t('blog.posts.0.excerpt'),
      content: t('blog.posts.0.content'),
      category: t('blog.categories.tax'),
      date: '2025-01-10',
      readTime: 5,
      slug: 'dan-z-prijmu-2025',
      featured: true,
    },
    {
      id: '2',
      title: t('blog.posts.1.title'),
      excerpt: t('blog.posts.1.excerpt'),
      content: t('blog.posts.1.content'),
      category: t('blog.categories.accounting'),
      date: '2025-01-08',
      readTime: 4,
      slug: 'ucetni-uzaverka-2024',
    },
    {
      id: '3',
      title: t('blog.posts.2.title'),
      excerpt: t('blog.posts.2.excerpt'),
      content: t('blog.posts.2.content'),
      category: t('blog.categories.business'),
      date: '2025-01-05',
      readTime: 6,
      slug: 'dph-2025-zmeny',
    },
    {
      id: '4',
      title: t('blog.posts.3.title'),
      excerpt: t('blog.posts.3.excerpt'),
      content: t('blog.posts.3.content'),
      category: t('blog.categories.tips'),
      date: '2025-01-03',
      readTime: 3,
      slug: 'mesicni-ucetnictvi-tipy',
    },
    {
      id: '5',
      title: t('blog.posts.4.title'),
      excerpt: t('blog.posts.4.excerpt'),
      content: t('blog.posts.4.content'),
      category: t('blog.categories.tax'),
      date: '2024-12-28',
      readTime: 7,
      slug: 'danove-optimalizace',
    },
    {
      id: '6',
      title: t('blog.posts.5.title'),
      excerpt: t('blog.posts.5.excerpt'),
      content: t('blog.posts.5.content'),
      category: t('blog.categories.business'),
      date: '2024-12-25',
      readTime: 5,
      slug: 'digitalizace-ucetnictvi',
    },
  ];

  const categories = useMemo(() => {
    const cats = ['all', ...new Set(blogPosts.map(post => post.category))];
    return cats;
  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchTerm, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <SEOHead
        title={t('meta.blogTitle')}
        description={t('meta.blogDescription')}
        keywords={t('meta.blogKeywords')}
        canonical="https://www.natalyashakh.cz/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-emerald via-brand-emerald to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient-animate">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {t('blog.subtitle')}
            </p>
            
            {/* Enhanced Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-md mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <Input
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-200"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-brand-emerald text-white shadow-lg'
                  : 'bg-white text-neutral-600 hover:bg-brand-emerald/10 hover:text-brand-emerald border border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category === 'all' ? t('blog.allCategories') : category}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-emerald rounded-full"></span>
              {t('blog.featured')}
            </h2>
            {isLoading ? (
              <SkeletonBlogPost className="h-80" />
            ) : (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-100 card-hover"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20">
                        {featuredPost.category}
                      </Badge>
                      <span className="text-sm text-neutral-500">•</span>
                      <div className="flex items-center text-sm text-neutral-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <span className="text-sm text-neutral-500">•</span>
                      <div className="flex items-center text-sm text-neutral-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime} min
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 line-clamp-2">
                      {featuredPost.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="btn-hover group">
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="md:w-1/2 bg-gradient-to-br from-brand-emerald/10 to-teal-50 flex items-center justify-center p-8">
                    <div className="text-6xl opacity-20">📊</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-emerald rounded-full"></span>
            {t('blog.allPosts')}
            <span className="text-lg font-normal text-neutral-500">
              ({filteredPosts.length})
            </span>
          </h2>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Array.from({ length: 6 }, (_, i) => (
                  <SkeletonBlogPost key={i} />
                ))}
              </motion.div>
            ) : filteredPosts.length > 0 ? (
              <motion.div
                key="loaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts
                  .filter(post => !post.featured || selectedCategory !== 'all' || searchTerm)
                  .map((post, _index) => (
                    <motion.div
                      key={post.id}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="card-hover"
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t('blog.noResults')}
                </h3>
                <p className="text-neutral-600">
                  {t('blog.tryDifferentSearch')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

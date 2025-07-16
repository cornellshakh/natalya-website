import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/Input';
import SEOHead from '../components/SEO/SEOHead';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get all blog posts
  const posts = blogPosts;

  // Get categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(posts.map(post => post.category[language]))];
    return ['all', ...uniqueCategories];
  }, [posts, language]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category[language] === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory, language]);

  const getCategoryDisplayName = (category: string) => {
    if (category === 'all') {
      return language === 'cs' ? 'Všechny kategorie' : 'Все категории';
    }
    return category;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={t('meta.blogTitle')}
        description={t('meta.blogDescription')}
        keywords={t('meta.blogKeywords')}
        canonical="https://www.natalyashakh.cz/blog"
      />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-brand-emerald to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            {t('blog.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            {t('blog.subtitle')}
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 group-focus-within:text-white transition-colors duration-200" />
              <Input
                placeholder={t('blog.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white/20 border-white/30 text-white !placeholder-white/70 group-focus-within:!placeholder-white focus:bg-white/30 focus:border-white/50 focus:text-white transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-brand-emerald text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-brand-emerald/10 hover:text-brand-emerald'
              }`}
            >
              {getCategoryDisplayName(category)}
            </button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-neutral-600">
            {language === 'cs' ? 'Nalezeno' : 'Найдено'} {filteredPosts.length} {language === 'cs' ? 'článků' : 'статей'}
          </p>
        </motion.div>

        {/* Blog Posts Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="transition-all duration-300"
              >
                <BlogCard post={post} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-20">🔍</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {t('blog.noResults.title')}
              </h3>
              <p className="text-neutral-600">
                {t('blog.noResults.description')}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

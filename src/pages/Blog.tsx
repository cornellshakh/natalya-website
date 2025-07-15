import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Rss } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import BlogCard from '../components/BlogCard';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';

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
      featured: true
    },
    {
      id: '2',
      title: t('blog.posts.1.title'),
      excerpt: t('blog.posts.1.excerpt'),
      content: t('blog.posts.1.content'),
      category: t('blog.categories.accounting'),
      date: '2025-01-08',
      readTime: 4,
      slug: 'ucetni-uzaverka-2024'
    },
    {
      id: '3',
      title: t('blog.posts.2.title'),
      excerpt: t('blog.posts.2.excerpt'),
      content: t('blog.posts.2.content'),
      category: t('blog.categories.business'),
      date: '2025-01-05',
      readTime: 6,
      slug: 'dph-2025-zmeny'
    },
    {
      id: '4',
      title: t('blog.posts.3.title'),
      excerpt: t('blog.posts.3.excerpt'),
      content: t('blog.posts.3.content'),
      category: t('blog.categories.tips'),
      date: '2025-01-03',
      readTime: 3,
      slug: 'mesicni-ucetnictvi-tipy'
    },
    {
      id: '5',
      title: t('blog.posts.4.title'),
      excerpt: t('blog.posts.4.excerpt'),
      content: t('blog.posts.4.content'),
      category: t('blog.categories.tax'),
      date: '2024-12-28',
      readTime: 7,
      slug: 'danove-optimalizace'
    },
    {
      id: '6',
      title: t('blog.posts.5.title'),
      excerpt: t('blog.posts.5.excerpt'),
      content: t('blog.posts.5.content'),
      category: t('blog.categories.business'),
      date: '2024-12-25',
      readTime: 5,
      slug: 'digitalizace-ucetnictvi'
    }
  ];

  const categories = [
    { id: 'all', name: t('blog.categories.all') },
    { id: 'tax', name: t('blog.categories.tax') },
    { id: 'accounting', name: t('blog.categories.accounting') },
    { id: 'business', name: t('blog.categories.business') },
    { id: 'tips', name: t('blog.categories.tips') }
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === categories.find(c => c.id === selectedCategory)?.name;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={t('blog.title')}
        description={t('meta.blogDescription')}
        keywords={t('meta.blogKeywords')}
        canonical="https://natalya-website.vercel.app/blog"
      />
      <StructuredData type="organization" />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 border-white text-white">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('blog.title')}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('blog.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder={t('blog.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-neutral-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* RSS Feed */}
            <Button variant="outline" className="flex items-center space-x-2">
              <Rss className="w-4 h-4" />
              <span>RSS</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              {...fadeIn}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('blog.noResults.title')}</h3>
              <p className="text-neutral-600">{t('blog.noResults.description')}</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={post.featured ? 'lg:col-span-2' : ''}
                >
                  <BlogCard post={post} featured={post.featured} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4">
              Newsletter
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">{t('blog.newsletter.title')}</h2>
            <p className="text-lg text-neutral-600 mb-8">{t('blog.newsletter.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
              />
              <Button className="px-6 py-3">
                {t('blog.newsletter.subscribe')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useLanguage } from '../context/LanguageContext';
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '../data/blogPosts';
import SEOHead from '../components/SEO/SEOHead';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin,
  Copy,
  User,
  Tag,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useToast } from '../components/ui/Toast';
import BlogCard from '../components/BlogCard';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const { showToast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const foundPost = getBlogPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(foundPost));
      }
      setIsLoading(false);
    }
  }, [slug]);

  // Reading progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('#blog-content') as HTMLElement;
      if (article) {
        const scrollTop = window.scrollY;
        const docHeight = article.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        setReadingProgress(Math.min(scrollPercentRounded, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sharePost = async (platform: string) => {
    const url = window.location.href;
    const title = post?.title[language] || '';

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          showToast({
            type: 'success',
            title: language === 'cs' ? 'Zkopírováno!' : 'Скопировано!',
            description: language === 'cs' ? 'Odkaz byl zkopírován do schránky' : 'Ссылка была скопирована в буфер обмена'
          });
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
        break;
    }
    setShareMenuOpen(false);
  };

  // Show loading state while checking for post
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-emerald mx-auto mb-4"></div>
          <p className="text-neutral-600">
            {language === 'cs' ? 'Načítání článku...' : 'Загрузка статьи...'}
          </p>
        </div>
      </div>
    );
  }

  // Redirect to blog if post not found
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentContent = post.content[language];
  const currentTitle = post.title[language];
  const currentExcerpt = post.excerpt[language];
  const currentCategory = post.category[language];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${currentTitle} | Blog - Natalya Shakh`}
        description={currentExcerpt}
        keywords={post.seo.keywords[language]}
        canonical={`https://www.natalyashakh.cz/blog/${post.slug}`}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-emerald to-teal-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Back Navigation */}
      <div className="bg-white border-b border-neutral-100 sticky top-0 z-40 backdrop-blur-sm bg-white/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-neutral-600 hover:text-brand-emerald transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'cs' ? 'Zpět na blog' : 'Назад к блогу'}
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-sm text-neutral-500 mb-8"
        >
          <Link to="/" className="hover:text-brand-emerald transition-colors">
            {language === 'cs' ? 'Domů' : 'Главная'}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/blog" className="hover:text-brand-emerald transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="truncate max-w-xs text-neutral-400">{currentTitle}</span>
        </motion.nav>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20">
              <Tag className="w-3 h-3 mr-1" />
              {currentCategory}
            </Badge>
            {post.featured && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                {language === 'cs' ? 'Doporučeno' : 'Рекомендуемое'}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-8 leading-tight">
            {currentTitle}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl">
            {currentExcerpt}
          </p>

          {/* Share Button */}
          <div className="flex justify-start mb-12">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShareMenuOpen(!shareMenuOpen)}
                className="flex items-center space-x-2"
              >
                <Share2 className="w-4 h-4" />
                <span>{language === 'cs' ? 'Sdílet' : 'Поделиться'}</span>
              </Button>

              {/* Share Menu */}
              {shareMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 z-10"
                >
                  <button
                    onClick={() => sharePost('twitter')}
                    className="w-full px-4 py-3 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center space-x-3 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={() => sharePost('facebook')}
                    className="w-full px-4 py-3 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center space-x-3 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => sharePost('linkedin')}
                    className="w-full px-4 py-3 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center space-x-3 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    onClick={() => sharePost('copy')}
                    className="w-full px-4 py-3 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center space-x-3 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{language === 'cs' ? 'Kopírovat odkaz' : 'Копировать ссылку'}</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>


        </motion.header>

        {/* Article Content */}
        <motion.div
          id="blog-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-neutral max-w-none
            prose-headings:font-serif prose-headings:text-neutral-900
            prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-8 prose-h1:text-brand-emerald
            prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-6 prose-h2:text-neutral-900
            prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-neutral-900
            prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-3
            prose-p:mb-6 prose-p:leading-relaxed prose-p:text-neutral-700 prose-p:text-lg
            prose-a:text-brand-emerald prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-strong:text-neutral-900 prose-strong:font-semibold
            prose-ul:my-4 prose-ol:my-4
            prose-li:mb-3 prose-li:text-neutral-700 prose-li:text-lg
            prose-blockquote:border-l-4 prose-blockquote:border-brand-emerald prose-blockquote:bg-brand-emerald/5 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:my-8
            prose-code:bg-neutral-100 prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:text-neutral-800 prose-code:font-mono prose-code:text-sm
            prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold text-brand-emerald mb-4 mt-8">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-neutral-900 mb-3 mt-6">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold text-neutral-900 mb-2 mt-4">{children}</h3>,
              p: ({ children }) => <p className="text-neutral-700 mb-6 leading-relaxed text-lg">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-8 mb-4 space-y-3">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-8 mb-4 space-y-3">{children}</ol>,
              li: ({ children }) => <li className="text-neutral-700 text-lg">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
              em: ({ children }) => <em className="italic text-neutral-700">{children}</em>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-brand-emerald bg-brand-emerald/5 py-6 px-8 rounded-r-xl mb-8">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-neutral-100 px-3 py-1 rounded-lg text-neutral-800 font-mono text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-neutral-900 text-neutral-100 p-6 rounded-xl overflow-x-auto mb-8">
                  {children}
                </pre>
              ),
            }}
          >
            {currentContent}
          </ReactMarkdown>
        </motion.div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-neutral-200"
          >
            <h3 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              {language === 'cs' ? 'Štítky' : 'Теги'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-neutral-600 border-neutral-300 hover:bg-neutral-100 px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl border border-neutral-200"
        >
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-brand-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-10 h-10 text-brand-emerald" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{post.author.name}</h3>
              <p className="text-brand-emerald font-medium mb-3">{post.author.title[language]}</p>
              <p className="text-neutral-600 leading-relaxed">
                {language === 'cs' 
                  ? 'Odborná daňová poradkyně s více než 10 lety zkušeností v oblasti účetnictví a daňového poradenství v České republice.' 
                  : 'Профессиональный налоговый консультант с более чем 10-летним опытом работы в области бухгалтерского учета и налогового консультирования в Чешской Республике.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-10 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-brand-emerald" />
              {language === 'cs' ? 'Související články' : 'Связанные статьи'}
            </h2>
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <BlogCard post={relatedPost} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-brand-emerald/5 to-teal-50 rounded-2xl p-12 border border-brand-emerald/20">
            <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
              {language === 'cs' ? 'Potřebujete odbornou pomoc?' : 'Нужна профессиональная помощь?'}
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {language === 'cs'
                ? 'Máte otázky k účetnictví nebo daním? Naši odborníci jsou zde, aby vám pomohli s jakýmkoliv problémem.'
                : 'У вас есть вопросы по бухгалтерскому учету или налогам? Наши специалисты готовы помочь вам с любой проблемой.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3">
                <Link to="/contact">
                  {language === 'cs' ? 'Konzultace zdarma' : 'Бесплатная консультация'}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link to="/services">
                  {language === 'cs' ? 'Naše služby' : 'Наши услуги'}
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </article>
    </div>
  );
} 
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/layout/Section';
import SEOHead from '../components/SEO/SEOHead';

export default function Terms() {
  const { t, language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={t('terms.title')}
        description={t('meta.termsDescription')}
        keywords={t('meta.termsKeywords')}
        canonical="https://natalya-website.vercel.app/terms"
      />

      {/* Header */}
      <Section spacing="sm" containerSize="content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center border-b border-neutral-200 pb-8 mb-8"
        >
          <h1 className="text-4xl font-serif font-bold text-brand-navy mb-4">
            {t('terms.title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('terms.subtitle')}
          </p>
        </motion.div>
      </Section>

      {/* Content */}
      <Section spacing="xs" containerSize="content">
        <motion.div
          {...fadeInUp}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-4">
            
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.introduction.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('terms.introduction.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.services.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('terms.services.content')}
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700 list-disc">{t('terms.services.items.0')}</li>
                <li className="text-neutral-700 list-disc">{t('terms.services.items.1')}</li>
                <li className="text-neutral-700 list-disc">{t('terms.services.items.2')}</li>
                <li className="text-neutral-700 list-disc">{t('terms.services.items.3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.responsibilities.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('terms.responsibilities.content')}
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700 list-disc">{t('terms.responsibilities.items.0')}</li>
                <li className="text-neutral-700 list-disc">{t('terms.responsibilities.items.1')}</li>
                <li className="text-neutral-700 list-disc">{t('terms.responsibilities.items.2')}</li>
                <li className="text-neutral-700 list-disc">{t('terms.responsibilities.items.3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.payment.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('terms.payment.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.confidentiality.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('terms.confidentiality.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.liability.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('terms.liability.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.termination.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('terms.termination.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.changes.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('terms.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('terms.contact.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('terms.contact.content')}
              </p>
              <div className="bg-neutral-50 p-3 rounded border">
                <p className="text-neutral-700 mb-1">
                  <strong>{t('contact.info.email')}:</strong> ucetnipraha@atlas.cz
                </p>
                <p className="text-neutral-700 mb-1">
                  <strong>{t('contact.info.phone')}:</strong> +420 722 243 337
                </p>
                <p className="text-neutral-700">
                  <strong>{t('contact.info.location')}:</strong> Vodičkova 39, 110 00 Praha
                </p>
              </div>
            </section>

            <section className="border-t border-neutral-200 pt-6">
              <div className="bg-neutral-50 p-3 rounded border">
                <p className="text-sm text-neutral-600 font-medium">
                  {t('terms.lastUpdated')}: {language === 'cs' ? '15. července 2025' : '15 июля 2025 г.'}
                </p>
              </div>
            </section>

          </div>
        </motion.div>
      </Section>
    </div>
  );
}

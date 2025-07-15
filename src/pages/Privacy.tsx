import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/layout/Section';
import SEOHead from '../components/SEO/SEOHead';

export default function Privacy() {
  const { t, language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={t('privacy.title')}
        description={t('meta.privacyDescription')}
        keywords={t('meta.privacyKeywords')}
        canonical="https://natalya-website.vercel.app/privacy"
      />

      {/* Header */}
      <Section spacing="md" containerSize="content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center border-b border-neutral-200 pb-8 mb-8"
        >
          <h1 className="text-4xl font-serif font-bold text-brand-navy mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{t('privacy.subtitle')}</p>
        </motion.div>
      </Section>

      {/* Content */}
      <Section spacing="sm" containerSize="content">
        <motion.div {...fadeInUp} className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.dataProcessing.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('privacy.dataProcessing.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.dataCollection.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('privacy.dataCollection.content')}
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700 list-disc">
                  {t('privacy.dataCollection.items.0')}
                </li>
                <li className="text-neutral-700 list-disc">
                  {t('privacy.dataCollection.items.1')}
                </li>
                <li className="text-neutral-700 list-disc">
                  {t('privacy.dataCollection.items.2')}
                </li>
                <li className="text-neutral-700 list-disc">
                  {t('privacy.dataCollection.items.3')}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.dataUsage.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('privacy.dataUsage.content')}
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700 list-disc">{t('privacy.dataUsage.items.0')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.dataUsage.items.1')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.dataUsage.items.2')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.dataUsage.items.3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.dataRetention.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('privacy.dataRetention.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.rights.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">{t('privacy.rights.content')}</p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700 list-disc">{t('privacy.rights.items.0')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.rights.items.1')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.rights.items.2')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.rights.items.3')}</li>
                <li className="text-neutral-700 list-disc">{t('privacy.rights.items.4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('privacy.contact.content')}
              </p>
              <div className="bg-neutral-50 p-3 rounded border">
                <p className="text-neutral-700 mb-1">
                  <strong>{t('contact.info.email')}:</strong> ucetnipraha@atlas.cz
                </p>
                <p className="text-neutral-700">
                  <strong>{t('contact.info.phone')}:</strong> +420 722 243 337
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-neutral-200 pb-2">
                {t('privacy.updates.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">{t('privacy.updates.content')}</p>
            </section>

            <section className="border-t border-neutral-200 pt-6">
              <div className="bg-neutral-50 p-3 rounded border">
                <p className="text-sm text-neutral-600 font-medium">
                  {t('privacy.lastUpdated')}:{' '}
                  {language === 'cs' ? '15. července 2025' : '15 июля 2025 г.'}
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

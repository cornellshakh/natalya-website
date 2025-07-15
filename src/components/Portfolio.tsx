import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  icon: React.ComponentType<{ className?: string }>;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: t('portfolio.cases.0.title'),
      category: t('portfolio.cases.0.category'),
      description: t('portfolio.cases.0.description'),
      challenge: t('portfolio.cases.0.challenge'),
      solution: t('portfolio.cases.0.solution'),
      results: [
        t('portfolio.cases.0.results.0'),
        t('portfolio.cases.0.results.1'),
        t('portfolio.cases.0.results.2')
      ],
      metrics: [
        {
          label: t('portfolio.cases.0.metrics.0.label'),
          value: t('portfolio.cases.0.metrics.0.value'),
          improvement: t('portfolio.cases.0.metrics.0.improvement')
        },
        {
          label: t('portfolio.cases.0.metrics.1.label'),
          value: t('portfolio.cases.0.metrics.1.value'),
          improvement: t('portfolio.cases.0.metrics.1.improvement')
        }
      ],
      icon: Building
    },
    {
      id: 2,
      title: t('portfolio.cases.1.title'),
      category: t('portfolio.cases.1.category'),
      description: t('portfolio.cases.1.description'),
      challenge: t('portfolio.cases.1.challenge'),
      solution: t('portfolio.cases.1.solution'),
      results: [
        t('portfolio.cases.1.results.0'),
        t('portfolio.cases.1.results.1'),
        t('portfolio.cases.1.results.2')
      ],
      metrics: [
        {
          label: t('portfolio.cases.1.metrics.0.label'),
          value: t('portfolio.cases.1.metrics.0.value'),
          improvement: t('portfolio.cases.1.metrics.0.improvement')
        },
        {
          label: t('portfolio.cases.1.metrics.1.label'),
          value: t('portfolio.cases.1.metrics.1.value'),
          improvement: t('portfolio.cases.1.metrics.1.improvement')
        }
      ],
      icon: TrendingUp
    },
    {
      id: 3,
      title: t('portfolio.cases.2.title'),
      category: t('portfolio.cases.2.category'),
      description: t('portfolio.cases.2.description'),
      challenge: t('portfolio.cases.2.challenge'),
      solution: t('portfolio.cases.2.solution'),
      results: [
        t('portfolio.cases.2.results.0'),
        t('portfolio.cases.2.results.1'),
        t('portfolio.cases.2.results.2')
      ],
      metrics: [
        {
          label: t('portfolio.cases.2.metrics.0.label'),
          value: t('portfolio.cases.2.metrics.0.value'),
          improvement: t('portfolio.cases.2.metrics.0.improvement')
        },
        {
          label: t('portfolio.cases.2.metrics.1.label'),
          value: t('portfolio.cases.2.metrics.1.value'),
          improvement: t('portfolio.cases.2.metrics.1.improvement')
        }
      ],
      icon: Users
    }
  ];

  const toggleCase = (caseId: number) => {
    setSelectedCase(selectedCase === caseId ? null : caseId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('portfolio.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              {/* Case Study Header */}
              <div
                className="p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleCase(caseStudy.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <caseStudy.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{caseStudy.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{caseStudy.category}</p>
                    </div>
                  </div>
                  <ArrowRight 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      selectedCase === caseStudy.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                <p className="mt-4 text-gray-600">{caseStudy.description}</p>
              </div>

              {/* Case Study Details */}
              {selectedCase === caseStudy.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 bg-white"
                >
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">{t('portfolio.challenge')}</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">{t('portfolio.solution')}</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>
                      </div>

                      {/* Results & Metrics */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">{t('portfolio.results')}</h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">{t('portfolio.metrics')}</h4>
                          <div className="space-y-3">
                            {caseStudy.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                                  <div className="text-xs text-gray-500">{metric.improvement}</div>
                                </div>
                                <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('portfolio.cta.title')}</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t('portfolio.cta.description')}</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('portfolio.cta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calculator, Users, Receipt, TrendingUp, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  price: string;
  period: string;
  icon: typeof Calculator;
  features: string[];
  isConsultation?: boolean;
}

interface ServiceSelectorProps {
  selectedService: ServiceOption | null;
  onServiceSelect: (service: ServiceOption) => void;
}

export default function ServiceSelector({ selectedService, onServiceSelect }: ServiceSelectorProps) {
  const { language } = useLanguage();

  // Service data based on existing pricing from Services page
  const services: ServiceOption[] = [
    {
      id: 'consultation',
      title: language === 'cs' ? 'Bezplatná konzultace' : 'Бесплатная консультация',
      description: language === 'cs' 
        ? 'Úvodní konzultace zdarma - 30 minut' 
        : 'Вводная консультация бесплатно - 30 минут',
      price: language === 'cs' ? 'Zdarma' : 'Бесплатно',
      period: language === 'cs' ? '30 min' : '30 мин',
      icon: MessageCircle,
      features: language === 'cs' 
        ? [
            'Analýza vašich potřeb',
            'Doporučení nejlepšího řešení',
            'Přehled našich služeb',
            'Cenová nabídka na míru'
          ]
        : [
            'Анализ ваших потребностей',
            'Рекомендации лучшего решения',
            'Обзор наших услуг',
            'Ценовое предложение на заказ'
          ],
      isConsultation: true
    },
    {
      id: 'accounting-basic',
      title: language === 'cs' ? 'Vedení účetnictví' : 'Ведение бухгалтерии',
      description: language === 'cs' 
        ? 'Pro malé podnikatele a OSVČ' 
        : 'Для малого бизнеса и ИП',
      price: '4.999',
      period: language === 'cs' ? 'měsíčně' : 'в месяц',
      icon: Calculator,
      features: language === 'cs' 
        ? [
            'Vedení účetních knih',
            'Zpracování faktur',
            'Účetní uzávěrka',
            'Online přístup 24/7',
            'Elektronická archivace'
          ]
        : [
            'Ведение бухгалтерских книг',
            'Обработка счетов',
            'Бухгалтерская отчетность',
            'Онлайн доступ 24/7',
            'Электронный архив'
          ]
    },
    {
      id: 'payroll',
      title: language === 'cs' ? 'Zpracování mezd' : 'Расчет зарплаты',
      description: language === 'cs' 
        ? 'Kompletní mzdová agenda' 
        : 'Полное управление зарплатой',
      price: '299',
      period: language === 'cs' ? 'za zaměstnance/měsíc' : 'за сотрудника/месяц',
      icon: Users,
      features: language === 'cs' 
        ? [
            'Výpočet mezd',
            'Zpracování výplat',
            'Sociální pojištění',
            'Zdravotní pojištění',
            'Roční zúčtování'
          ]
        : [
            'Расчет зарплаты',
            'Обработка выплат',
            'Социальное страхование',
            'Медицинское страхование',
            'Годовой расчет'
          ]
    },
    {
      id: 'tax-consulting',
      title: language === 'cs' ? 'Daňové poradenství' : 'Налоговое консультирование',
      description: language === 'cs' 
        ? 'Optimalizace daňové zátěže' 
        : 'Оптимизация налоговой нагрузки',
      price: '2.499',
      period: language === 'cs' ? 'měsíčně' : 'в месяц',
      icon: Receipt,
      features: language === 'cs' 
        ? [
            'Daňová optimalizace',
            'Daňové přiznání',
            'Zastupování před úřady',
            'DPH přiznání',
            'Kontrolní hlášení'
          ]
        : [
            'Налоговая оптимизация',
            'Налоговая декларация',
            'Представление в органах',
            'Декларация НДС',
            'Контрольная отчетность'
          ]
    },
    {
      id: 'financial-advisory',
      title: language === 'cs' ? 'Finanční poradenství' : 'Финансовое консультирование',
      description: language === 'cs' 
        ? 'Strategické finanční plánování' 
        : 'Стратегическое финансовое планирование',
      price: '1.999',
      period: language === 'cs' ? 'měsíčně' : 'в месяц',
      icon: TrendingUp,
      features: language === 'cs' 
        ? [
            'Finanční analýza',
            'Rozpočtové plánování',
            'Cash-flow management',
            'Investiční strategie',
            'Kvartální reporty'
          ]
        : [
            'Финансовый анализ',
            'Бюджетное планирование',
            'Управление денежными потоками',
            'Инвестиционная стратегия',
            'Квартальные отчеты'
          ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-brand-navy">
            {language === 'cs' ? 'Vyberte službu' : 'Выберите услугу'}
          </CardTitle>
          <p className="text-sm text-neutral-600">
            {language === 'cs' 
              ? 'Zvolte službu, kterou vás zajímá nebo začněte s bezplatnou konzultací'
              : 'Выберите интересующую вас услугу или начните с бесплатной консультации'}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md',
                  selectedService?.id === service.id
                    ? 'border-brand-emerald bg-brand-emerald/5 shadow-md'
                    : 'border-neutral-200 hover:border-brand-emerald/50',
                  service.isConsultation && 'ring-2 ring-brand-emerald/20'
                )}
                onClick={() => onServiceSelect(service)}
              >
                {service.isConsultation && (
                  <Badge className="absolute -top-2 -right-2 bg-brand-emerald text-white">
                    {language === 'cs' ? 'Doporučeno' : 'Рекомендуем'}
                  </Badge>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center',
                    service.isConsultation 
                      ? 'bg-brand-emerald/20 text-brand-emerald'
                      : 'bg-brand-emerald/10 text-brand-emerald'
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-brand-navy">{service.title}</h3>
                      <div className="text-right">
                        <span className={cn(
                          'text-lg font-bold',
                          service.isConsultation ? 'text-brand-emerald' : 'text-brand-navy'
                        )}>
                          {service.price}{!service.isConsultation && ' Kč'}
                        </span>
                        <div className="text-xs text-neutral-500">/{service.period}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                    
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-neutral-500 mt-1">
                          {language === 'cs' 
                            ? `+${service.features.length - 3} dalších funkcí`
                            : `+${service.features.length - 3} дополнительных функций`}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {selectedService?.id === service.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-6 h-6 bg-brand-emerald rounded-full flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-brand-emerald/5 border border-brand-emerald/20 rounded-lg"
            >
              <h4 className="font-medium text-brand-emerald mb-2">
                {language === 'cs' ? 'Vybraná služba:' : 'Выбранная услуга:'} {selectedService.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
} 
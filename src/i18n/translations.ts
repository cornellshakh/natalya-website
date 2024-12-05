import { Translation } from '../types';

export const translations: Record<'cs' | 'ru', Translation> = {
  cs: {
    nav: {
      home: 'Domů',
      about: 'O nás',
      services: 'Služby',
      contact: 'Kontakt'
    },
    footer: {
      description: 'Profesionální účetní služby na míru pro firmy i jednotlivce v České republice.',
      rights: 'Všechna práva vyhrazena.'
    },
    home: {
      hero: {
        title: 'Vaše účetní, daňové a finanční řešení',
        subtitle: 'Komplexní účetní a daňové poradenství pro vaše podnikání',
        cta: 'Kontaktujte nás nyní',
        welcome: 'Vítejte ve světě',
        accountingServices: 'Profesionálního Účetnictví'
      },
      about: {
        title: 'O nás',
        description: 'Poskytujeme spolehlivé účetní služby, které šetří váš čas i peníze.'
      },
      services: {
        title: 'Naše služby',
        learnMore: 'Zjistit více',
        taxConsulting: 'Daňové poradenství',
        taxConsultingDesc: 'Efektivní optimalizace daní a individuální poradenství.',
        bookkeeping: 'Vedení účetnictví',
        bookkeepingDesc: 'Přesné vedení účetnictví pro firmy a OSVČ.',
        financial: 'Finanční poradenství',
        financialDesc: 'Strategické plánování a analýzy pro váš růst.'
      },
      stats: {
        yearsExperience: 'let praxe',
        happyClients: 'spokojených klientů',
        languages: 'dostupných jazyků',
        satisfaction: 'garantovaná spokojenost'
      },
      benefits: {
        point1: 'Osobní přístup a profesionální péče',
        point2: 'Zkušenosti ověřené stovkami klientů',
        point3: 'Kvalifikovaný tým specialistů',
        point4: 'Flexibilita a řešení na míru'
      },
      cta: {
        title: 'Začněme spolupráci ještě dnes',
        description: 'Kontaktujte nás pro bezplatnou konzultaci a objevte výhody našich služeb.',
        button: 'Kontaktovat nás'
      }
    },
    about: {
      title: 'O nás',
      experience: 'Více než 10 let zkušeností v účetnictví a daňovém poradenství.',
      description: 'Nabízíme komplexní služby s důrazem na detail, efektivitu a osobní přístup.',
      approach: 'Naším cílem je podpořit vás při správě financí a minimalizaci nákladů, vždy v souladu s legislativou.'
    },
    services: {
      title: 'Naše služby',
      subtitle: 'Účetní a daňové služby, které vám usnadní život.',
      taxServices: {
        title: 'Daňové služby',
        description: 'Kompletní správa daňových povinností bez stresu.'
      },
      bookkeeping: {
        title: 'Účetnictví',
        description: 'Přehledné a profesionální vedení účetnictví.'
      },
      payroll: {
        title: 'Mzdy',
        description: 'Komplexní zpracování mezd na míru.'
      },
      financial: {
        title: 'Finanční poradenství',
        description: 'Praktické rady a plánování pro váš finanční úspěch.'
      }
    },
    contact: {
      title: 'Máte otázky? Rádi je zodpovíme',
      subtitle: 'Jsme tu pro vás',
      form: {
        title: 'Napište nám',
        name: 'Jméno',
        email: 'E-mail',
        message: 'Vaše zpráva',
        send: 'Odeslat zprávu',
        placeholder: {
          name: 'Vaše jméno',
          email: 'Váš e-mail',
          message: 'Vaše zpráva'
        }
      },
      info: {
        title: 'Kontaktní údaje',
        email: 'E-mail',
        phone: 'Telefon',
        location: 'Kancelář',
        hours: 'Otevírací doba',
        response: 'Reagujeme obvykle do 24 hodin',
        workdays: 'Pondělí - Pátek: 9:00 - 17:00'
      }
    },
    error: {
      title: 'Chyba na stránce',
      description: 'Omlouváme se, něco se pokazilo. Zkuste to znovu.',
      button: 'Obnovit stránku'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Услуги',
      contact: 'Контакты'
    },
    footer: {
      description: 'Профессиональные бухгалтерские услуги для вашего бизнеса в Чехии.',
      rights: 'Все права защищены.'
    },
    home: {
      hero: {
        title: 'Ваши бухгалтерские и налоговые решения',
        subtitle: 'Комплексные бухгалтерские и налоговые консультации для вашего бизнеса',
        cta: 'Свяжитесь с нами сейчас',
        welcome: 'Добро пожаловать в мир',
        accountingServices: 'Профессиональной Бухгалтерии'
      },
      about: {
        title: 'О нас',
        description: 'Комплексные и надежные бухгалтерские услуги для вашего спокойствия.'
      },
      services: {
        title: 'Наши услуги',
        learnMore: 'Подробнее',
        taxConsulting: 'Налоговое консультирование',
        taxConsultingDesc: 'Оптимизация налогов и индивидуальный подход.',
        bookkeeping: 'Ведение бухгалтерии',
        bookkeepingDesc: 'Точное и профессиональное ведение учета.',
        financial: 'Финансовое консультирование',
        financialDesc: 'Планирование и анализ для вашего успеха.'
      },
      stats: {
        yearsExperience: 'лет опыта',
        happyClients: 'довольных клиентов',
        languages: 'доступных языков',
        satisfaction: 'гарантированное удовлетворение'
      },
      benefits: {
        point1: 'Индивидуальный подход и забота',
        point2: 'Опыт, проверенный клиентами',
        point3: 'Профессиональная команда специалистов',
        point4: 'Решения под ваши потребности'
      },
      cta: {
        title: 'Начнем сотрудничество сегодня',
        description: 'Свяжитесь с нами для бесплатной консультации и узнайте, как мы можем помочь.',
        button: 'Связаться с нами'
      }
    },
    about: {
      title: 'О нас',
      experience: 'Более 10 лет опыта в бухгалтерии и налоговом консультировании.',
      description: 'Мы предлагаем услуги с вниманием к деталям, эффективностью и индивидуальным подходом.',
      approach: 'Наша цель - помочь вам управлять финансами и минимизировать налоги, соблюдая законодательство.'
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Бухгалтерские и налоговые услуги, которые облегчают ваш бизнес.',
      taxServices: {
        title: 'Налоговые услуги',
        description: 'Полный контроль над налогами без лишних забот.'
      },
      bookkeeping: {
        title: 'Бухгалтерия',
        description: 'Прозрачное и профессиональное ведение учета.'
      },
      payroll: {
        title: 'Зарплата',
        description: 'Комплексный расчет заработной платы.'
      },
      financial: {
        title: 'Финансовое консультирование',
        description: 'Практичные советы и планирование для вашего успеха.'
      }
    },
    contact: {
      title: 'Есть вопросы? Мы готовы помочь',
      subtitle: 'Мы здесь для вас',
      form: {
        title: 'Свяжитесь с нами',
        name: 'Имя',
        email: 'E-mail',
        message: 'Ваше сообщение',
        send: 'Отправить сообщение',
        placeholder: {
          name: 'Ваше имя',
          email: 'Ваш e-mail',
          message: 'Ваше сообщение'
        }
      },
      info: {
        title: 'Контактная информация',
        email: 'E-mail',
        phone: 'Телефон',
        location: 'Офис',
        hours: 'Рабочее время',
        response: 'Ответим в течение 24 часов',
        workdays: 'Понедельник - Пятница: 9:00 - 17:00'
      }
    },
    error: {
      title: 'Ошибка на странице',
      description: 'Извините, произошла ошибка. Попробуйте снова.',
      button: 'Обновить страницу'
    }
  }
};

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
      mainTitle: 'Natalya Shakh',
      experience: 'Více než 10 let zkušeností v účetnictví a daňovém poradenství.',
      description: 'Nabízíme komplexní služby s důrazem na detail, efektivitu a osobní přístup.',
      approach: 'Naším cílem je podpořit vás při správě financí a minimalizaci nákladů, vždy v souladu s legislativou.',
      experienceSection: {
        longTermTitle: 'Dlouholetá praxe',
        longTermDesc: 'Více než 10 let aktivního působení v oblasti účetnictví a daňového poradenství v České republice.',
        qualificationTitle: 'Odborná kvalifikace',
        qualificationDesc: 'Průběžné vzdělávání a certifikace v oblasti účetnictví, daní a české legislativy.',
        clientsTitle: 'Široké spektrum klientů',
        clientsDesc: 'Zkušenosti s vedením účetnictví pro české i mezinárodní společnosti různých velikostí a zaměření.',
        approachTitle: 'Profesionální přístup',
        approachDesc: 'Důraz na přesnost, spolehlivost a individuální přístup ke každému klientovi.'
      }
    },
    services: {
      title: 'Naše služby',
      mainTitle: 'Komplexní účetní služby',
      subtitle: 'Profesionální účetní služby přizpůsobené vašim potřebám',
      pricingTitle: 'Transparentní cenová nabídka',
      pricingSubtitle: 'Jasné ceny bez skrytých poplatků. Začněte s námi bez závazků.',
      detailedTitle: 'Detailní přehled služeb',
      startCooperation: 'Začít spolupráci',
      detailedServices: 'Detailní přehled služeb',
      currency: 'Kč',
      serviceCategories: {
        tax: {
          title: 'Daňové služby',
          description: 'Komplexní daňové poradenství a optimalizace pro fyzické i právnické osoby',
          features: [
            'Daňové přiznání',
            'Daňová optimalizace',
            'DPH',
            'Kontrolní hlášení'
          ]
        },
        accounting: {
          title: 'Účetnictví',
          description: 'Profesionální vedení účetnictví a zpracování finančních výkazů',
          features: [
            'Vedení účetnictví',
            'Finanční výkazy',
            'Analýza nákladů',
            'Reporting'
          ]
        },
        payroll: {
          title: 'Mzdy a personalistika',
          description: 'Kompletní správa mezd a personální agenda pro vaše zaměstnance',
          features: [
            'Zpracování mezd',
            'Personální agenda',
            'Sociální pojištění',
            'Zdravotní pojištění'
          ]
        }
      },
      pricing: {
        accountingBasic: {
          title: 'Vedení účetnictví',
          price: '4.999',
          period: 'měsíčně',
          description: 'Pro malé podnikatele a OSVČ',
          features: [
            'Vedení účetních knih',
            'Zpracování faktur',
            'Účetní uzávěrka',
            'Online přístup 24/7',
            'Elektronická archivace'
          ]
        },
        payroll: {
          title: 'Zpracování mezd',
          price: '299',
          period: 'za zaměstnance/měsíc',
          description: 'Kompletní mzdová agenda',
          features: [
            'Výpočet mezd',
            'Zpracování výplat',
            'Sociální pojištění',
            'Zdravotní pojištění',
            'Roční zúčtování'
          ]
        },
        taxConsulting: {
          title: 'Daňové poradenství',
          price: '2.499',
          period: 'měsíčně',
          description: 'Optimalizace daňové zátěže',
          features: [
            'Daňová optimalizace',
            'Daňové přiznání',
            'Zastupování před úřady',
            'DPH přiznání',
            'Kontrolní hlášení'
          ]
        },
        financialAdvisory: {
          title: 'Finanční poradenství',
          price: '1.999',
          period: 'měsíčně',
          description: 'Strategické finanční plánování',
          features: [
            'Finanční analýza',
            'Rozpočtové plánování',
            'Cash-flow management',
            'Investiční strategie',
            'Kvartální reporty'
          ]
        }
      },
      trustSignals: {
        quality: {
          title: 'Garantovaná kvalita',
          description: 'Pojištění odpovědnosti do 10 mil. Kč'
        },
        support: {
          title: 'Rychlá podpora',
          description: 'Reakce do 24 hodin'
        },
        certification: {
          title: 'Certifikace',
          description: 'Certifikovaní účetní profesionálové'
        }
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
        },
        success: 'Děkujeme za vaši zprávu!'
      },
      info: {
        title: 'Kontaktní údaje',
        email: 'E-mail',
        phone: 'Telefon',
        location: 'Kancelář',
        hours: 'Otevírací doba',
        response: 'Reagujeme obvykle do 24 hodin',
        workdays: 'Pondělí - Pátek: 9:00 - 17:00',
        address: 'Vodičkova 39, 110 00 Praha'
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
      mainTitle: 'Наталья Шах',
      experience: 'Более 10 лет опыта в бухгалтерии и налоговом консультировании.',
      description: 'Мы предлагаем услуги с вниманием к деталям, эффективностью и индивидуальным подходом.',
      approach: 'Наша цель - помочь вам управлять финансами и минимизировать налоги, соблюдая законодательство.',
      experienceSection: {
        longTermTitle: 'Многолетний опыт',
        longTermDesc: 'Более 10 лет активной деятельности в сфере бухгалтерского учета и налогового консультирования в Чешской Республике.',
        qualificationTitle: 'Профессиональная квалификация',
        qualificationDesc: 'Непрерывное образование и сертификация в области бухгалтерского учета, налогов и чешского законодательства.',
        clientsTitle: 'Широкий спектр клиентов',
        clientsDesc: 'Опыт ведения бухгалтерского учета для чешских и международных компаний различных размеров и направлений.',
        approachTitle: 'Профессиональный подход',
        approachDesc: 'Акцент на точность, надежность и индивидуальный подход к каждому клиенту.'
      }
    },
    services: {
      title: 'Наши услуги',
      mainTitle: 'Комплексные бухгалтерские услуги',
      subtitle: 'Профессиональные бухгалтерские услуги, адаптированные под ваши потребности',
      pricingTitle: 'Прозрачное ценовое предложение',
      pricingSubtitle: 'Четкие цены без скрытых платежей. Начните с нами без обязательств.',
      detailedTitle: 'Подробный обзор услуг',
      startCooperation: 'Начать сотрудничество',
      detailedServices: 'Подробный обзор услуг',
      currency: 'крон',
      serviceCategories: {
        tax: {
          title: 'Налоговые услуги',
          description: 'Комплексное налоговое консультирование и оптимизация для физ��ческих и юридических лиц',
          features: [
            'Налоговая декларация',
            'Налоговая оптимизация',
            'НДС',
            'Контрольная отчетность'
          ]
        },
        accounting: {
          title: 'Бухгалтерия',
          description: 'Профессиональное ведение бухгалтерского учета и подготовка финансовой отчетности',
          features: [
            'Ведение бухгалтерии',
            'Финансовая отчетность',
            'Анализ затрат',
            'Отчетность'
          ]
        },
        payroll: {
          title: 'Зарплата и кадры',
          description: 'Полное управление заработной платой и кадровое делопроизводство',
          features: [
            'Расчет зарплаты',
            'Кадровое делопроизводство',
            'Социальное страхование',
            'Медицинское страхование'
          ]
        }
      },
      pricing: {
        accountingBasic: {
          title: 'Ведение бухгалтерии',
          price: '4.999',
          period: 'в месяц',
          description: 'Для малого бизнеса и ИП',
          features: [
            'Ведение бухгалтерских книг',
            'Обработка счетов',
            'Бухгалтерская отчетность',
            'Онлайн доступ 24/7',
            'Электронный архив'
          ]
        },
        payroll: {
          title: 'Расчет зарплаты',
          price: '299',
          period: 'за сотрудника/месяц',
          description: 'Полное управление зарплатой',
          features: [
            'Расчет зарплаты',
            'Обработка выплат',
            'Социальное страхование',
            'Медицинское страхование',
            'Годовой расчет'
          ]
        },
        taxConsulting: {
          title: 'Налоговое к��нсультирование',
          price: '2.499',
          period: 'в месяц',
          description: 'Оптимизация налоговой нагрузки',
          features: [
            'Налоговая оптимизация',
            'Налоговая декларация',
            'Представление в органах',
            'Декларация НДС',
            'Контрольная отчетность'
          ]
        },
        financialAdvisory: {
          title: 'Финансовое консультирование',
          price: '1.999',
          period: 'в месяц',
          description: 'Стратегическое финансовое планирование',
          features: [
            'Финансовый анализ',
            'Бюджетное планирование',
            'Управление денежными потоками',
            'Инвестиционная стратегия',
            'Квартальные отчеты'
          ]
        }
      },
      trustSignals: {
        quality: {
          title: 'Гарантированное качество',
          description: 'Страхование ответственности до 10 млн. крон'
        },
        support: {
          title: 'Быстрая поддержка',
          description: 'Ответ в течение 24 часов'
        },
        certification: {
          title: 'Сертификация',
          description: 'Сертифицированные бухгалтеры'
        }
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
        },
        success: 'Спасибо за ваше сообщение!'
      },
      info: {
        title: 'Контактная информация',
        email: 'E-mail',
        phone: 'Телефон',
        location: 'Офис',
        hours: 'Рабочее время',
        response: 'Ответим в течение 24 часов',
        workdays: 'Понедельник - Пятница: 9:00 - 17:00',
        address: 'Водичкова 39, 110 00 Прага'
      }
    },
    error: {
      title: 'Ошибка на странице',
      description: 'Извините, произошла ошибка. Попробуйте снова.',
      button: 'Обновить страницу'
    }
  }
};

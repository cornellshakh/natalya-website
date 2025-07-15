export type Language = 'cs' | 'ru';

export interface Translation {
  meta: {
    homeDescription: string;
    homeKeywords: string;
    aboutDescription: string;
    aboutKeywords: string;
    servicesDescription: string;
    servicesKeywords: string;
    contactDescription: string;
    contactKeywords: string;
    blogDescription: string;
    blogKeywords: string;
    privacyDescription: string;
    privacyKeywords: string;
    termsDescription: string;
    termsKeywords: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    blog: string;
  };
  footer: {
    description: string;
    rights: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      welcome: string;
      accountingServices: string;
    };
    about: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      learnMore: string;
      taxConsulting: string;
      taxConsultingDesc: string;
      bookkeeping: string;
      bookkeepingDesc: string;
      financial: string;
      financialDesc: string;
    };
    stats: {
      yearsExperience: string;
      happyClients: string;
      languages: string;
      satisfaction: string;
    };
    benefits: {
      point1: string;
      point2: string;
      point3: string;
      point4: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  about: {
    title: string;
    mainTitle: string;
    experience: string;
    description: string;
    approach: string;
    experienceSection: {
      longTermTitle: string;
      longTermDesc: string;
      qualificationTitle: string;
      qualificationDesc: string;
      clientsTitle: string;
      clientsDesc: string;
      approachTitle: string;
      approachDesc: string;
    };
    certifications: {
      title: string;
      subtitle: string;
      cert1: {
        title: string;
        description: string;
      };
      cert2: {
        title: string;
        description: string;
      };
      cert3: {
        title: string;
        description: string;
      };
      cert4: {
        title: string;
        description: string;
      };
    };
    values: {
      title: string;
      subtitle: string;
      value1: {
        title: string;
        description: string;
      };
      value2: {
        title: string;
        description: string;
      };
      value3: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    mainTitle: string;
    subtitle: string;
    pricingTitle: string;
    pricingSubtitle: string;
    detailedTitle: string;
    startCooperation: string;
    detailedServices: string;
    currency: string;
    serviceCategories: {
      tax: {
        title: string;
        description: string;
        features: string[];
      };
      accounting: {
        title: string;
        description: string;
        features: string[];
      };
      payroll: {
        title: string;
        description: string;
        features: string[];
      };
    };
    pricing: {
      accountingBasic: {
        title: string;
        price: string;
        period: string;
        description: string;
        features: string[];
      };
      payroll: {
        title: string;
        price: string;
        period: string;
        description: string;
        features: string[];
      };
      taxConsulting: {
        title: string;
        price: string;
        period: string;
        description: string;
        features: string[];
      };
      financialAdvisory: {
        title: string;
        price: string;
        period: string;
        description: string;
        features: string[];
      };
    };
    trustSignals: {
      quality: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
      certification: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
      placeholder: {
        name: string;
        email: string;
        message: string;
      };
      success: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      location: string;
      hours: string;
      response: string;
      workdays: string;
      address: string;
    };
    getInTouch: string;
    quickMessage: string;
    responseTime: string;
  };
  error: {
    title: string;
    description: string;
    button: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      0: {
        question: string;
        answer: string;
      };
      1: {
        question: string;
        answer: string;
      };
      2: {
        question: string;
        answer: string;
      };
      3: {
        question: string;
        answer: string;
      };
      4: {
        question: string;
        answer: string;
      };
      5: {
        question: string;
        answer: string;
      };
    };
  };
  privacy: {
    title: string;
    subtitle: string;
    dataProcessing: {
      title: string;
      content: string;
    };
    dataCollection: {
      title: string;
      content: string;
      items: string[];
    };
    dataUsage: {
      title: string;
      content: string;
      items: string[];
    };
    dataRetention: {
      title: string;
      content: string;
    };
    rights: {
      title: string;
      content: string;
      items: string[];
    };
    contact: {
      title: string;
      content: string;
    };
    updates: {
      title: string;
      content: string;
    };
    lastUpdated: string;
  };
  terms: {
    title: string;
    subtitle: string;
    introduction: {
      title: string;
      content: string;
    };
    services: {
      title: string;
      content: string;
      items: string[];
    };
    responsibilities: {
      title: string;
      content: string;
      items: string[];
    };
    payment: {
      title: string;
      content: string;
    };
    confidentiality: {
      title: string;
      content: string;
    };
    liability: {
      title: string;
      content: string;
    };
    termination: {
      title: string;
      content: string;
    };
    changes: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
      content: string;
    };
    lastUpdated: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      0: {
        name: string;
        company: string;
        content: string;
      };
      1: {
        name: string;
        company: string;
        content: string;
      };
      2: {
        name: string;
        company: string;
        content: string;
      };
      3: {
        name: string;
        company: string;
        content: string;
      };
    };
    stats: {
      satisfaction: string;
      clients: string;
      years: string;
      response: string;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    challenge: string;
    solution: string;
    results: string;
    metrics: string;
    cta: {
      title: string;
      description: string;
      button: string;
    };
    cases: {
      0: {
        title: string;
        category: string;
        description: string;
        challenge: string;
        solution: string;
        results: string[];
        metrics: Array<{
          label: string;
          value: string;
          improvement: string;
        }>;
      };
      1: {
        title: string;
        category: string;
        description: string;
        challenge: string;
        solution: string;
        results: string[];
        metrics: Array<{
          label: string;
          value: string;
          improvement: string;
        }>;
      };
      2: {
        title: string;
        category: string;
        description: string;
        challenge: string;
        solution: string;
        results: string[];
        metrics: Array<{
          label: string;
          value: string;
          improvement: string;
        }>;
      };
    };
  };
  blog: {
    title: string;
    subtitle: string;
    search: {
      placeholder: string;
    };
    categories: {
      all: string;
      tax: string;
      accounting: string;
      business: string;
      tips: string;
    };
    noResults: {
      title: string;
      description: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
    posts: {
      0: {
        title: string;
        excerpt: string;
        content: string;
      };
      1: {
        title: string;
        excerpt: string;
        content: string;
      };
      2: {
        title: string;
        excerpt: string;
        content: string;
      };
      3: {
        title: string;
        excerpt: string;
        content: string;
      };
      4: {
        title: string;
        excerpt: string;
        content: string;
      };
      5: {
        title: string;
        excerpt: string;
        content: string;
      };
    };
  };
}

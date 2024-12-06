export type Language = 'cs' | 'ru';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
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
  };
  error: {
    title: string;
    description: string;
    button: string;
  };
}

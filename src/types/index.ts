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
    experience: string;
    description: string;
    approach: string;
  };
  services: {
    title: string;
    subtitle: string;
    taxServices: {
      title: string;
      description: string;
    };
    bookkeeping: {
      title: string;
      description: string;
    };
    payroll: {
      title: string;
      description: string;
    };
    financial: {
      title: string;
      description: string;
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
    };
    info: {
      title: string;
      email: string;
      phone: string;
      location: string;
      hours: string;
      response: string;
      workdays: string;
    };
  };
  error: {
    title: string;
    description: string;
    button: string;
  };
}
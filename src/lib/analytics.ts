// Analytics and conversion tracking utilities
export interface ConversionEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Define conversion events for tracking
export const CONVERSION_EVENTS = {
  // Lead generation events
  FREE_CONSULTATION_CLICK: 'free_consultation_click',
  PHONE_CALL_CLICK: 'phone_call_click',
  CONTACT_FORM_VIEW: 'contact_form_view',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  
  // Lead magnet events
  LEAD_MAGNET_VIEW: 'lead_magnet_view',
  LEAD_MAGNET_DOWNLOAD: 'lead_magnet_download',
  
  // Engagement events
  TESTIMONIAL_READ: 'testimonial_read',
  FAQ_EXPAND: 'faq_expand',
  SERVICE_VIEW: 'service_view',
  
  // Navigation events
  BOOKING_PAGE_VISIT: 'booking_page_visit',
  SERVICES_PAGE_VISIT: 'services_page_visit',
} as const;

// Track conversion events
export function trackConversion(event: ConversionEvent): void {
  try {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: event.label,
        content_category: event.category,
      });
    }

    // Console log for development
    if (import.meta.env.DEV) {
      console.log('Conversion tracked:', event);
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

// Helper functions for common conversion events
export const analytics = {
  // Lead generation tracking
  trackConsultationClick: (source: string) => 
    trackConversion({
      action: CONVERSION_EVENTS.FREE_CONSULTATION_CLICK,
      category: 'Lead Generation',
      label: source,
    }),

  trackPhoneClick: (source: string) => 
    trackConversion({
      action: CONVERSION_EVENTS.PHONE_CALL_CLICK,
      category: 'Lead Generation',
      label: source,
    }),

  trackFormSubmit: (formType: string) => 
    trackConversion({
      action: CONVERSION_EVENTS.CONTACT_FORM_SUBMIT,
      category: 'Lead Generation',
      label: formType,
    }),

  // Lead magnet tracking
  trackLeadMagnetDownload: (magnetType: string) => 
    trackConversion({
      action: CONVERSION_EVENTS.LEAD_MAGNET_DOWNLOAD,
      category: 'Lead Magnets',
      label: magnetType,
    }),

  // Engagement tracking
  trackFAQExpand: (question: string) => 
    trackConversion({
      action: CONVERSION_EVENTS.FAQ_EXPAND,
      category: 'Engagement',
      label: question,
    }),

  trackTestimonialRead: (testimonialId: string) => 
    trackConversion({
      action: CONVERSION_EVENTS.TESTIMONIAL_READ,
      category: 'Engagement',
      label: testimonialId,
    }),
};

// Declare global gtag and fbq for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
} 
import { useEffect } from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

export function useAnalytics() {
  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    // Track page views on route change
    const handleRouteChange = () => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };

    // Listen for hash changes (since we're using anchor navigation)
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      // Clean up scripts if needed
    };
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  return { trackEvent };
}

// Helper functions for common events
export function trackProjectView(projectName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_project', {
      event_category: 'Projects',
      event_label: projectName,
    });
  }
}

export function trackContactClick(method: 'email' | 'linkedin' | 'github') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_click', {
      event_category: 'Contact',
      event_label: method,
    });
  }
}

export function trackCTAClick(ctaName: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'Engagement',
      event_label: ctaName,
      location,
    });
  }
}
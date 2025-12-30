import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Generate a simple session ID based on timestamp + random
        const sessionId = sessionStorage.getItem('session_id') || 
          `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        
        if (!sessionStorage.getItem('session_id')) {
          sessionStorage.setItem('session_id', sessionId);
        }

        await supabase.from('page_views').insert({
          page_path: location.pathname,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          session_id: sessionId,
        });
      } catch (error) {
        // Silently fail - analytics shouldn't break the app
        console.error('Failed to track page view:', error);
      }
    };

    // Don't track admin pages
    if (!location.pathname.startsWith('/admin') && !location.pathname.startsWith('/auth')) {
      trackPageView();
    }
  }, [location.pathname]);
}

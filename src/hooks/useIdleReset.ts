import { useEffect, useRef, useState } from 'react';
import type { NavigateFunction } from 'react-router-dom';

const DEFAULT_TIMEOUT_SECONDS = 90;

export function useIdleReset(navigate: NavigateFunction, enabled = true) {
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_TIMEOUT_SECONDS);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const resetTimer = () => setSecondsLeft(DEFAULT_TIMEOUT_SECONDS);

    const tick = () => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          navigate('/');
          return DEFAULT_TIMEOUT_SECONDS;
        }
        return current - 1;
      });
    };

    const activityEvents = ['mousemove', 'mousedown', 'touchstart', 'keydown'];
    activityEvents.forEach((event) => window.addEventListener(event, resetTimer));

    timerRef.current = window.setInterval(tick, 1000);
    return () => {
      activityEvents.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [enabled, navigate]);

  return secondsLeft;
}

import { useState, useEffect } from 'react';

export default function TypingRoles({
  roles,
  typeSpeed = 80,
  eraseSpeed = 40,
  holdDelay = 1600,
  startDelay = 400,
}) {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState('waiting'); // waiting | typing | holding | erasing

  useEffect(() => {
    let timer;

    if (phase === 'waiting') {
      timer = setTimeout(() => setPhase('typing'), startDelay);
    } else if (phase === 'typing') {
      const current = roles[roleIndex];
      if (displayed.length < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => setPhase('holding'), 0);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('erasing'), holdDelay);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, eraseSpeed);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, roleIndex, roles, typeSpeed, eraseSpeed, holdDelay, startDelay]);

  const cursorClass =
    phase === 'holding' ? 'animate-pulse' : '';

  return (
    <>
      <span>{displayed}</span>
      <span
        className={`inline-block w-0.5 sm:w-0.75 h-[0.9em] ml-1 align-middle bg-[#4F8CFF] ${cursorClass}`}
        aria-hidden="true"
      />
    </>
  );
}
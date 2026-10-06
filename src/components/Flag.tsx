import type { Language } from '../i18n/translations';

// Bandeiras em SVG (emojis de bandeira não são exibidos no Windows)
const BrazilFlag = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" fill="#009c3b" />
    <path d="M16 6 L29 16 L16 26 L3 16 Z" fill="#ffdf00" />
    <circle cx="16" cy="16" r="6" fill="#002776" />
    <path d="M10.2 14.6 Q16 13 21.9 16.6" stroke="#fff" strokeWidth="1.1" fill="none" />
  </svg>
);

const UsaFlag = () => {
  const stripes = Array.from({ length: 13 }, (_, i) => i).filter(i => i % 2 === 0);
  const stripeHeight = 32 / 13;

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" fill="#fff" />
      {stripes.map(i => (
        <rect key={i} y={i * stripeHeight} width="32" height={stripeHeight} fill="#b22234" />
      ))}
      <rect width="15" height={stripeHeight * 7} fill="#3c3b6e" />
      {[3, 7.5, 12].flatMap(x => [3.5, 8.5, 13.5].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="#fff" />
      )))}
    </svg>
  );
};

export const Flag = ({ language }: { language: Language }) =>
  language === 'pt' ? <BrazilFlag /> : <UsaFlag />;

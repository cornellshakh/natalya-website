import { useLanguage } from '../../context/LanguageContext';

export default function SkipLink() {
  const { language } = useLanguage();

  const skipText = language === 'cs' ? 'Přeskočit na obsah' : 'Перейти к содержанию';

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 font-medium transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {skipText}
    </a>
  );
}

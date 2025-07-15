import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-pad py-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 mb-4">{t('footer.description')}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-gray-600">
              {t('privacy.title')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-gray-600">
              {t('terms.title')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

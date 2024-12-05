import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-pad py-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 mb-4">
            {t('footer.description')}
          </p>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Natalya Shakh · {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">{t('notFound.title')}</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">{t('notFound.message')}</p>
        <NavLink to="/">
          <Button variant="primary" icon={<Home size={18} />}>
            {t('notFound.button')}
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
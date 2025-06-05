import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  onClick,
  children,
}: {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const baseStyles =
    'inline-flex items-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400',
    secondary: 'bg-secondary-400 text-primary-700 hover:bg-secondary-500 focus:ring-secondary-300',
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

const HeroButtons: React.FC<{ onDiscoverClick?: () => void; onJoinClick?: () => void }> = ({
  onDiscoverClick,
  onJoinClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex space-x-4 mt-6">
      <Button
        variant="secondary"
        size="lg"
        icon={<ArrowRight size={20} />}
        iconPosition="right"
        onClick={onDiscoverClick}
      >
        {t('home.hero.cta')}
      </Button>

      <Button variant="primary" size="lg" onClick={onJoinClick}>
        {t('home.hero.join')}
      </Button>
    </div>
  );
};

export default HeroButtons;

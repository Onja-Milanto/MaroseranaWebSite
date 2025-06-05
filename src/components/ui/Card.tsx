import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  children,
  className = '',
  onClick,
  hoverEffect = true,
  animate = true
}) => {
  const cardClasses = `bg-white rounded-lg shadow-md overflow-hidden ${
    hoverEffect ? 'hover:shadow-lg transition-shadow duration-300' : ''
  } ${onClick ? 'cursor-pointer' : ''} ${className}`;

  const cardContent = (
    <>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold text-primary-700 mb-2">{title}</h3>}
        {subtitle && <h4 className="text-sm text-gray-500 mb-4">{subtitle}</h4>}
        {children}
      </div>
    </>
  );

  if (animate) {
    return (
      <motion.div 
        className={cardClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} onClick={onClick}>
      {cardContent}
    </div>
  );
};

export default Card;
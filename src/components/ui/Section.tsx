import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
  titleCenter?: boolean;
  noPadding?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'bg-white',
  titleCenter = false,
  noPadding = false,
  id,
}) => {
  const textAlignment = titleCenter ? 'text-center' : 'text-left';
  const paddingClasses = noPadding ? '' : 'py-16 md:py-20';

  return (
    <section id={id} className={`${bgColor} ${paddingClasses} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={`mb-12 ${textAlignment}`}>
            {title && (
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-primary-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="mt-4 text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isWhite = false }) => {
  return (
    <img
      src={isWhite ? '/images/logo_uc_maroserana.jpg' : '/images/logo_uc_maroserana.jpg'}
      alt="UC MaroSerana Logo"
      className={className}
    />
  );
};

export default Logo;

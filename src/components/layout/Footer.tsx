import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();

const mainLinks = [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.about'), path: '/about' },
  { label: t('nav.team'), path: '/about/team' },
  { label: t('nav.partnerships'), path: '/about/partnerships' },
  { label: t('nav.events'), path: '/events' },
  { label: t('nav.eventsUpcoming'), path: '/events/upcoming' },
  { label: t('nav.eventsPast'), path: '/events/past' },
  { label: t('nav.eventsCalendar'), path: '/events/calendar' },
];

const secondaryLinks = [
  { label: t('nav.researchProjects'), path: '/research/projects' },
  { label: t('nav.researchPublications'), path: '/research/publications' },
  { label: t('nav.researchGrants'), path: '/research/grants' },
  { label: t('nav.publications'), path: '/resources/publications' },
  { label: t('nav.membership'), path: '/resources/membership' },
  { label: t('nav.faq'), path: '/resources/faq' },
  { label: t('nav.contact'), path: '/contact' },
];


  const legalLinks = [
    { label: t('footer.links.privacy'), path: '/privacy-policy' },
    { label: t('footer.links.terms'), path: '/terms-of-service' },
    { label: t('footer.links.sitemap'), path: '/sitemap' },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', url: 'https://www.facebook.com/unitedeschercheursmaroserana.com' },
    { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-primary-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="h-10 w-auto" isWhite />
              <span className="ml-2 text-xl font-bold">UC MaroSerana</span>
            </div>
            <p className="text-gray-300 text-sm">
              Promoting scientific research and fostering collaboration between researchers and institutions.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Main links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Secondary links */}
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 md:opacity-0 lg:hidden">Links</h3>
            <ul className="space-y-2 md:pt-12 lg:pt-0">
              {secondaryLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <form className="space-y-3">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="px-4 py-2 rounded-md bg-primary-600 text-white placeholder-gray-300 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  required
                />
                <button
                  type="submit"
                  className="flex justify-center items-center px-4 py-2 bg-secondary-400 hover:bg-secondary-500 text-primary-700 font-medium rounded-md transition-colors duration-200"
                >
                  <Mail size={18} className="mr-2" />
                  {t('footer.newsletter.button')}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-primary-600 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-300">
            {legalLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.path} 
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
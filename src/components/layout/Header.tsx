import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

    // Gestion du scroll pour changer le style du header
    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer menu mobile & dropdowns lors du changement de route
    useEffect(() => {
      setIsOpen(false);
      setIsDropdownOpen(null);
      setSearchOpen(false);
    }, [location.pathname]);

    // Toggle menu mobile
    const toggleMenu = () => setIsOpen(prev => !prev);

    // Toggle dropdown desktop & mobile
    const toggleDropdown = (key: string) => {
      setIsDropdownOpen(prev => (prev === key ? null : key));
    };

    // Changer la langue
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    // Toggle recherche
    const handleSearchToggle = () => {
      setSearchOpen(prev => !prev);
      setSearchQuery('');
    };

    // Soumission recherche
    const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      }
        };

        // Items de navigation
        const navItems = [
      { key: 'home', label: t('nav.home'), link: '/', dropdown: [] },
      {
        key: 'about',
        label: t('nav.about'),
        link: '/about',
        dropdown: [
          { label: t('nav.team'), link: '/about/team' },
          { label: t('nav.partnerships'), link: '/about/partnerships' },
        ],
      },
      {
        key: 'research',
        label: t('nav.research'),
        link: '/research',
        dropdown: [
          { label: t('nav.projects'), link: '/research/projects' },
          { label: t('nav.publications'), link: '/research/publications' },
          { label: t('nav.grants'), link: '/research/grants' },
        ],
      },
      {
        key: 'events',
        label: t('nav.events'),
        link: '/events',
        dropdown: [
          { label: t('events.upcoming'), link: '/events/upcoming' },
          { label: t('events.past'), link: '/events/past' },
          { label: t('events.calendar'), link: '/events/calendar' },
        ],
      },
      {
      key: 'resources',
      label: t('nav.resources'),
      link: '/resources',
      dropdown: [
        { label: t('nav.publications'), link: '/resources/publications' },
        { label: t('nav.membership'), link: '/resources/membership' },
        { label: t('nav.faq'), link: '/resources/faq' },
      ],
      },
      { key: 'contact', label: t('nav.contact'), link: '/contact', dropdown: [] },
    ];

    // Animation variants for staggered entrance
    const navItemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        type: 'spring',
        stiffness: 80,
      },
      }),
    };

    const extraVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: navItems.length * 0.08 + i * 0.08,
        duration: 0.4,
        type: 'spring',
        stiffness: 80,
      },
      }),
    };

    return (
      <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
      isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-md' : 'bg-white/50 backdrop-blur-lg'
      } rounded-full`}
      role="banner"
      >
      <div className="px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <Logo className="h-12 w-12 rounded-full object-cover" />
        <span className="ml-2 text-xl font-bold text-primary-700">MaroSerana</span>
      </NavLink>
      {/* Navigation desktop */}
      <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8" aria-label="Primary Navigation">
        <AnimatePresence>
        {navItems.map((item, i) => (
          <motion.div
          key={item.key}
          className="relative group"
          custom={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navItemVariants}
          >
          {item.dropdown.length > 0 ? (
            <>
            <button
              aria-haspopup="true"
              aria-expanded={isDropdownOpen === item.key}
              onClick={() => toggleDropdown(item.key)}
              className={`flex items-center text-lg font-medium cursor-pointer select-none transition-colors duration-200 ${
              isScrolled
                ? 'text-blue-600 hover:text-accent-500'
                : 'text-primary-700 hover:text-accent-500'
              }`}
              type="button"
            >
              {item.label}
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            <div
              className="absolute left-0 top-full mt-0.5 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50
              opacity-0 invisible pointer-events-none
              group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
              transition-all duration-200 transform origin-top-left animate-slide-down"
              role="menu"
              aria-label={`${item.label} submenu`}
            >
              <div className="py-2">
              {item.dropdown.map((subItem, idx) => (
                <NavLink
                key={`${item.key}-sub-${idx}`}
                to={subItem.link}
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-primary-50 hover:text-primary-700"
                role="menuitem"
                >
                {subItem.label}
                </NavLink>
              ))}
              </div>
            </div>
            </>
          ) : (
            <NavLink
            to={item.link}
            className={({ isActive }) =>
              `text-lg font-medium transition-colors duration-200 ${
              isScrolled
                ? `text-blue-600 hover:text-accent-500 ${isActive ? 'border-b-2 border-accent-500' : ''}`
                : `text-primary-700 hover:text-accent-500 ${isActive ? 'border-b-2 border-accent-500' : ''}`
              }`
            }
            >
            {item.label}
            </NavLink>
          )}
          </motion.div>
        ))}
        {/* Recherche toggle + input */}
        <motion.div
          className="flex items-center space-x-4 relative"
          custom={0}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={extraVariants}
        >
          <button
          aria-label="Search"
          onClick={handleSearchToggle}
          className={`p-1 rounded-full ${
            isScrolled ? 'text-blue-600 hover:bg-primary-50' : 'text-primary-700 hover:bg-primary-50'
          }`}
          type="button"
          >
          <Search className="w-5 h-5" />
          </button>

          {searchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50 flex items-center"
            role="search"
          >
            <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('search.placeholder') || 'Search...'}
            className="px-3 py-1 outline-none text-black"
            aria-label={t('search.placeholder') || 'Search'}
            />
            <button type="submit" className="px-3 py-1 bg-primary-700 text-white hover:bg-primary-800">
            {t('search.button') || 'Go'}
            </button>
          </form>
          )}
        </motion.div>
        {/* Sélecteur de langue */}
        <motion.div
          className="relative group"
          custom={1}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={extraVariants}
        >
          <button
          aria-label="Change language"
          className={`p-1 rounded-full flex items-center ${
            isScrolled ? 'text-blue-600 hover:bg-primary-50' : 'text-primary-700 hover:bg-primary-50'
          }`}
          type="button"
          >
          <Globe className="w-5 h-5" />
          <span className="ml-1 text-sm">{i18n.language.toUpperCase()}</span>
          </button>
          <div
          className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 animate-slide-down"
          role="menu"
          aria-label="Language selection"
          >
          <button
            onClick={() => changeLanguage('fr')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-primary-50"
            type="button"
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-primary-50"
            type="button"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('mg')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-primary-50"
            type="button"
          >
            Malagasy
          </button>
          </div>
        </motion.div>
        </AnimatePresence>
      </nav>
      {/* Login Button */}
      <motion.button
        onClick={() => window.location.href = '/login?popup=true'}
        className={`ml-4 px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
        isScrolled
          ? 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
          : 'bg-primary-700 text-white hover:bg-primary-800'
        }`}
        type="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
        delay: navItems.length * 0.08 + 2 * 0.08,
        duration: 0.4,
        type: 'spring',
        stiffness: 80,
        }}
      >
        {t('auth.login') || 'Login'}
      </motion.button>
      {/* Bouton menu mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-md text-primary-700"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        type="button"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white"
        >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Primary Navigation">
          {navItems.map((item) => (
            <div key={item.key} className="py-2">
            {item.dropdown.length > 0 ? (
              <>
              <button
                onClick={() => toggleDropdown(item.key)}
                className="flex items-center justify-between w-full text-lg font-medium text-gray-900"
                aria-expanded={isDropdownOpen === item.key}
                type="button"
              >
                {item.label}
                <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen === item.key ? 'transform rotate-180' : ''
                }`}
                />
              </button>
              <AnimatePresence>
                {isDropdownOpen === item.key && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 ml-4 space-y-2"
                  role="menu"
                  aria-label={`${item.label} submenu`}
                >
                  {item.dropdown.map((subItem, idx) => (
                  <NavLink
                    key={`${item.key}-sub-mobile-${idx}`}
                    to={subItem.link}
                    className="block py-2 text-base text-gray-700 hover:text-primary-700"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    {subItem.label}
                  </NavLink>
                  ))}
                </motion.div>
                )}
              </AnimatePresence>
              </>
            ) : (
              <NavLink
              to={item.link}
              className={({ isActive }) =>
                `block text-lg font-medium ${
                isActive ? 'text-primary-700' : 'text-gray-900 hover:text-primary-700'
                }`
              }
              onClick={() => setIsOpen(false)}
              >
              {item.label}
              </NavLink>
            )}
            </div>
          ))}

          {/* Recherche mobile */}
          <div className="pt-4 border-t border-gray-200">
            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2" role="search">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search.placeholder') || 'Search...'}
              className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
              aria-label={t('search.placeholder') || 'Search'}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800"
            >
              {t('search.button') || 'Go'}
            </button>
            </form>
          </div>

          {/* Sélecteur de langue mobile */}
          <div className="pt-4 border-t border-gray-200">
            <span className="block mb-2 text-sm font-semibold text-gray-700">Language</span>
            <div className="flex space-x-4">
            {['fr', 'en', 'mg'].map((lng) => (
              <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`px-3 py-1 rounded-md border ${
                i18n.language === lng ? 'border-primary-700 bg-primary-100' : 'border-gray-300'
              }`}
              type="button"
              >
              {lng === 'fr'
                ? 'Français'
                : lng === 'en'
                ? 'English'
                : 'Malagasy'}
              </button>
            ))}
            </div>
          </div>
          </nav>
        </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

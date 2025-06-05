import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    // Simulate API call
    try {
      // In a real app, you would send this data to your backend
      console.log('Form data submitted:', data);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      label: t('contact.info.address'),
      value: '123 Research Avenue, Casablanca, Morocco'
    },
    {
      icon: <Phone size={24} />,
      label: t('contact.info.phone'),
      value: '+212 522 123 456'
    },
    {
      icon: <Mail size={24} />,
      label: t('contact.info.email'),
      value: 'contact@ucmaroserana.org'
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://youtube.com' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary-700 mb-6">
              {t('contact.form.subject')}
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">{t('common.required')}</span>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('email', { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-red-500 text-sm mt-1">{t('common.required')}</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="text-red-500 text-sm mt-1">{t('common.email')}</span>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('subject', { required: true })}
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1">{t('common.required')}</span>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">{t('common.required')}</span>
                )}
              </div>
              
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send size={18} />}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? t('common.loading') : t('contact.form.submit')}
                </Button>
                
                {submitSuccess && (
                  <motion.div 
                    className="mt-4 p-3 bg-green-100 text-green-700 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {t('contact.form.success')}
                  </motion.div>
                )}
                
                {submitError && (
                  <motion.div 
                    className="mt-4 p-3 bg-red-100 text-red-700 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {t('contact.form.error')}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary-700 mb-6">
              {t('contact.info.title')}
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-primary-50 text-primary-700 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">{t('contact.info.social')}</h3>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-full transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 h-64 bg-gray-200 rounded-lg">
              {/* Map would go here */}
              <div className="h-full flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
import { useTranslation } from 'react-i18next';

const ResourcesFAQ = () => {
  const { t } = useTranslation();

  // Exemple de FAQ statique, tu peux remplacer par des données dynamiques si besoin
  const faqs = [
    {
      question: t('resources.faq.questions.membership.question'),
      answer: t('resources.faq.questions.membership.answer')
    },
    {
      question: t('resources.faq.questions.events.question'),
      answer: t('resources.faq.questions.events.answer')
    },
    {
      question: t('resources.faq.questions.contact.question'),
      answer: t('resources.faq.questions.contact.answer')
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('nav.faq')}</h1>
      <section>
        {faqs.map(({ question, answer }, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{question}</h2>
            <p className="text-gray-700">{answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResourcesFAQ;

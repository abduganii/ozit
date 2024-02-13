
import initTranslations from '@/app/i18n';
import HomePage from '@/components/page/home/home';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home'];
export default async function Home({ params: { locale } }) {
  
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
 
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
     <HomePage lang={locale}/>
    </TranslationsProvider>
    

  )
}

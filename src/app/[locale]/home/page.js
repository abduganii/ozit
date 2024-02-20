
import initTranslations from '@/app/i18n';
import HomePage from '@/components/page/home/home';
import TranslationsProvider from '@/components/TranslationsProvider';
import axios_init from '@/utils/axios_init';


const i18nNamespaces = ['home'];

async function getCurriculum() {
  return await axios_init.get(`/course/main-course`)
}

async function getBlogs() {
  return await axios_init.get(`/common/posts`)
}
export default async function Home({ params: { locale } }) {
  const Curriculum = await getCurriculum()
  const Blogs = await getBlogs()
  
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
 
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <HomePage
        lang={locale}
        Curriculum={Curriculum}
        Blogs={Blogs}
      />
    </TranslationsProvider>
    

  )
}

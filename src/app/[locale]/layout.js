import NextTopLoader from 'nextjs-toploader';
import { dir } from 'i18next'
import i18nConfig from '../../../i18nConfig'
import '../../style/globals.css'
import { cookies } from 'next/headers'
import AuthLayout from '@/components/layout/auth-layout'
import MainLayout from '@/components/layout/main-layout'

export const metadata = {
  title: 'Uz IT',
  description: 'Generated by create next app',
}
export  function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export default  function  RootLayout({
  children,
  params: { locale }
}) {
    const token = cookies().get("token")?.value|| null
    // const data =  getData()
   
  return (
    <html lang={locale} dir={dir(locale)}>
      <body >
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {
          token ? <AuthLayout>
            {children}
          </AuthLayout> :
            <MainLayout>
          {children}
          </MainLayout>
        }
      </body>
    </html>
  )
}

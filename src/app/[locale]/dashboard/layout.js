import AuthLayout from "@/components/layout/auth-layout";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import NextTopLoader from 'nextjs-toploader';

export default async function layout({ children }) {
    const token = cookies().get("token")
    const session = await getServerSession(authOptions);
    return (
        <AuthLayout token={token}>
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
        {children}
    </AuthLayout>
    )
  }
import LoginPage from "@/components/page/auth/login";
import MainLayout from "@/components/layout/main-layout";

export default async function page() {
   
    
    return (
        <MainLayout>
            <LoginPage />
        </MainLayout>
    )
}

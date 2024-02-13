'use server'

import LoginPage from "@/components/page/auth/login";
import {getServerSession} from "next-auth";
import {authOptions} from "@/utils/auth";

export default async function page() {
    const session = await getServerSession(authOptions);
    
    return (
        <>
            <LoginPage session={session}/>
        </>
    )
}

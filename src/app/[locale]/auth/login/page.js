'use server'


import LoginPage from "@/components/page/auth/login";
import axios_init from "@/utils/axios_init";
import {cookies} from "next/headers";
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

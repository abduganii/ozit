import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

import GooglePage from "@/components/page/auth/google";

export default async function page() {
  const session = await getServerSession(authOptions);
    return (
        <>
          <GooglePage session={session}/>
        </>
    )
}

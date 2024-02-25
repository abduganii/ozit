import LassonText from "@/components/page/dashboard/lsn-text";
import { cookies } from "next/headers";

async function getData(id) {
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/course/lesson/${id}/`,{
    credentials:"include",
    headers: { Authorization: 'Bearer ' + token?.value || "" }
  })
  return res.json()
}

export default async function page({ params: { id } }) {
  const data = await getData(id)
    return (
      <>
        <LassonText data={data} />
      </>
    )
  }
import LassonExercises from "@/components/page/dashboard/lsn-exercises";
import { cookies } from "next/headers";

async function getData(id) {
  // const res = await axios_init.get(`/course/exercises/${id}/`)
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/course/exercises/${id}/`,{
    credentials:"include",
    headers: { Authorization: 'Bearer ' + token?.value || "" }
  })
  return res.json()
}

export default async function page({ params: { id } }) {
  const data = await getData(id)
 
  return (
    <>
      <LassonExercises data={data} id={id} />
    </>
  )
}
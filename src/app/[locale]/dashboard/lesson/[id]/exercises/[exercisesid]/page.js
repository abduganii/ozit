import LassonExercisesBuId from "@/components/page/dashboard/lsn-id-exercises";
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


export default async function page({ params: { id,exercisesid } }) {
  const data = await getData(id)
  return (
    <>
      <LassonExercisesBuId data={data} index={exercisesid} />
    </>
  )
}
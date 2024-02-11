import LassonExercises from "@/components/page/dashboard/lsn-exercises";
import axios_init from "@/utils/axios_init";
async function getData(id) {
  const res = await axios_init.get(`/course/exercises/${id}/`)
  return res
}

export default async function page({ params: { id } }) {
  const data = await getData(id)
  return (
    <>
      <LassonExercises data={data} />
    </>
  )
}